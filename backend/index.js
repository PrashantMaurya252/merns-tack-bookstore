import express, { response } from "express";
import { PORT,MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json())

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack tutorial')
});
app.use('/books',router)




mongoose.connect(MONGODBURL).then(()=>{
    console.log('App to connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port ${PORT}`)
    });
}).catch((error)=>{
    console.log(error)
})