import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

const DB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.tnt1pd3.mongodb.net/\
${process.env.DB_NAME}?retryWrites=true&w=majority`;

function connectDB() {
    mongoose
        .connect(DB_URI)
        .then((result) => {
            console.log('connected to db', result.connection.name);
        })
        .catch((err) => {
            console.warn(err.message);
        });
}

export default connectDB;