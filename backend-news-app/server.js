import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); 
app.get('/', (req, res) => {
    res.send('Server is running...');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`'Server is running on port ${PORT}'`);
})