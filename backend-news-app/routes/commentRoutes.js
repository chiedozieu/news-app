import express from "express";
import { authGuard } from "../middleware/authMiddleware.js";
import { createComment } from "../controllers/commentController.js";

const router = express.Router();

router.post("/", authGuard, createComment);



export default router;
