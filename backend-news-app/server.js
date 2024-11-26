import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorResponseHandler, invalidPathHandler } from "./middleware/errorHandler.js";
import path from 'path'
import { fileURLToPath } from 'url';

// Routes
import userRoutes from "./routes/userRoutes.js";

 
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); 
app.get('/', (req, res) => {
    res.send('Server is running...');
})

app.use('/api/users', userRoutes)

// Static file middleware
// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(invalidPathHandler)
app.use(errorResponseHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`'Server is running on port ${PORT}'`);
})