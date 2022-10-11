import express from 'express'
import cors from 'cors'
import mongoose  from 'mongoose'
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import productRoutes from './Routes/Product.js'
import uploadRoute from './Routes/Upload.js'
import authRoutes from './Routes/Auth.js'
import userRoutes from "./Routes/User.js"
dotenv.config()
// Connect database
mongoose.connect('mongodb+srv://minhthanh2k:minhthanh2k@watchshop.8ique69.mongodb.net/WatchShop?retryWrites=true&w=majority',()=>{
    console.log("Connect to MongoDB");
})
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
// app.use(morgan("common")) // khi sai request morgan nó sẽ báo dưới terminal

app.use(express.static('public'))
app.use('/images', express.static('images'))

// Routes
app.use("/product", productRoutes)
app.use('/upload', uploadRoute)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)

app.listen(8000, ()=>{
    console.log("Server is running ");
})