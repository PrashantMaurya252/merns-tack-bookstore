import express, { response } from "express";
import { PORT,MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack tutorial')
})

// Route for save a book

app.post('/books',async (request,response)=>{
    try {
        if(!request.body.title || request.body.author || request.body.publishYear){
            return response.status(400).send({
                message:'Send all required field:title,author,publishYear'
            })
        };
        const newBook={
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear
        }

        const book=await Book.create(newBook);
        return response.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
        
    }

})

mongoose.connect(MONGODBURL).then(()=>{
    console.log('App to connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port ${PORT}`)
    });
}).catch((error)=>{
    console.log(error)
})