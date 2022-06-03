import express from "express";
const app=express()
import dotenv from 'dotenv'
dotenv.config()
// db and authentications
import { connectDB } from "./db/connect.js";

//routers
import authRouters from './routes/authRoutes.js'
import jobRouters from './routes/jobsRoutes.js'




// Middleware
import {notFoundMiddle} from './middleware/notFound.js'
import { errorHandler } from "./middleware/errorHandler.js";

app.use(express.json())
app.get('/',(req,res)=>{

    res.send('welcome')
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