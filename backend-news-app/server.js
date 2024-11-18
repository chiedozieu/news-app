import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running...');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`'Server is running on port ${PORT}'`);
})