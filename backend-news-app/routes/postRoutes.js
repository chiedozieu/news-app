import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postController.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);

router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost)

export default router;
