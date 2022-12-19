import UserModel from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findOne({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete successful ");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, oldPassword, password } = req.body;
  console.log(id);
  console.log(_id);
  if (id === _id) {
    try {
      if (password) {
        const oldUser = await UserModel.findById(id);
        const verify = bcrypt.compare(oldPassword, oldUser.password);
        if (verify) {
          const salt = await bcrypt.genSalt(10);
          const newPassword = await bcrypt.hash(password, salt);
          const user = await UserModel.findByIdAndUpdate(
            id,
            { password: newPassword },
            { new: true }
          );
          const token = jwt.sign(
            {
              username: user.username,
              id: user._id,
            },
            process.env.JWT_KEY
          );
          res.status(200).json({ user, token });
        } else res.status(400).json("Mật khẩu cũ không đúng");
      } else {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        const token = jwt.sign(
          {
            username: user.username,
            id: user._id,
          },
          process.env.JWT_KEY
        );
        res.status(200).json({ user, token });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else
    res.status(403).json("Access Denied! You can`t update your own profile");
};
