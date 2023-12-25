import express, { response } from "express";
import { PORT,MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from 'cors'

const app = express();

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS policy

//option1:Allow all origin with default of cors
// app.use(cors());
// option2:Allow custom origin

app.use(
    cors({
        origin:"http://localhost:5555",
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type']
    })
)

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