import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const PORT=5555;
export const MONGODBURL=`mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.7mk2cyi.mongodb.net/?retryWrites=true&w=majority`;

