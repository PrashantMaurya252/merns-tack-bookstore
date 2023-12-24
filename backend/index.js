import express, { response } from "express";
import { PORT,MONGODBURL } from "./config";
import mongoose from "mongoose";

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack tutorial')
})



mongoose.connect(MONGODBURL).then(()=>{
    console.log('App to connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port ${PORT}`)
    });
}).catch((error)=>{
    console.log(error)
})