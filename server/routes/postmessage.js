import express from "express";
import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postmessage.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/likepost/:id", likePost);

export default router;
