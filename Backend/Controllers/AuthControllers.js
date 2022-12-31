import UserModel from "../Model/UserModel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
    // mã hóa password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPass

    // Create new document
    const newUser = new UserModel(req.body)
    const { username } = req.body
    try {
        const olderUser = await UserModel.findOne({ username })
        // check username already
        if (olderUser) {
            return res.status(400).json({ message: 'Username is already! ' })
        }
        const user = await newUser.save()
        const token = Jwt.sign(
            {
                username: user.username,
                id: user._id
            },
            process.env.JWT_KEY,
            { expiresIn: '1h' },
        )
        res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await UserModel.findOne({ username: username })
        if (user) {
            // compare password input with password in database
            const verify = await bcrypt.compare(password, user.password)
            if (!verify) {
                res.status(400).json("Wrong password")
            } else {
                const token = Jwt.sign(
                    {
                        username: user.username,
                        id: user._id,
                    },
                    process.env.JWT_KEY,
                    { expiresIn: '1h' },
                )
                res.status(200).json({ user, token })
            }
        } else res.status(404).json('Username not found')

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
