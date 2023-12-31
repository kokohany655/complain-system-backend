import express, { Application, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import database from './config/database'
import cors from 'cors'

import ApiError from './utils/ApiError'
import globalError from './middleware/globalErrorMiddleware'


import ComplainRoutes from './routes/complainRoutes'



dotenv.config()


const app:Application = express()
app.use(cors());
app.options('*', cors());
app.enable('trust proxy');

app.use(express.json())



const port = process.env.PORT || 8000

//datebase
database()

//middleware to i can know request status
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
    console.log(`mood :${process.env.NODE_ENV} `)
}


//routes
app.use('/api/v1/complain' , ComplainRoutes)


//middle ware for catching error wrong route
app.all('*' , (req:Request , res:Response , next:NextFunction)=>{
    next(new ApiError(`can not find this route ${req.originalUrl}`, 400))
})

// Error middleware to catch error 
app.use(globalError)

// listening port
const server = app.listen(port,()=>{console.log(`Server is listening on port ${8000} ....`)})

// handle rejection outside express
process.on("unhandledRejection" , (err:Error)=>{
    console.error(`unhandle rejection Errors : ${err.name} | ${err.message}`)
    server.close(()=>{
        console.log('shutting down..')
        process.exit(1)
    })
})