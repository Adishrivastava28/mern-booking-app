import express,{Request,Response} from 'express';
import cors from 'cors'
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from 'path';
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app=express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    // only from the frontendurl specified in our origin will be accepcted
    origin: process.env.FRONTEND_URL,
    credentials:true,

}))
app.use(express.static(path.join(__dirname,"../../frontend/dist")))

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.listen(7001,()=>{
    console.log("Server running on local host: 7000 ")
})