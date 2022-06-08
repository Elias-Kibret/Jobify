import express from "express";
// import cors from 'cors'
const app=express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors' 
import morgan from 'morgan'
// db and authentications
import { connectDB } from "./db/connect.js";

//routers
import authRouters from './routes/authRoutes.js'
import jobRouters from './routes/jobsRoutes.js'




// Middleware
import {notFoundMiddle} from './middleware/notFound.js'
import { errorHandler } from "./middleware/errorHandler.js";

// app.use(cors())
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Home")
})
app.get('/api/v1',(req,res)=>{

    res.json({msg:'welcome'})
})
app.use('/api/v1/auth',authRouters)
app.use('/api/v1/jobs',jobRouters)
app.use(notFoundMiddle)
app.use(errorHandler)
const port =process.env.PORT || 5000



const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()