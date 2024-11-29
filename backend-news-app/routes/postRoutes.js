import express from "express";
import { createPost, updatePost } from "../controllers/postController.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);


export default router;
 