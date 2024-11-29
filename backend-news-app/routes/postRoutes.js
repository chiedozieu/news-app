import express from "express";
import {
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postController.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);

router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost);

export default router;
