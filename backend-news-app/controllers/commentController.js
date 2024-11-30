import Comment from "../models/comment.js";
import Post from "../models/post.js";

export const createComment = async (req, res, next) => {
  try {
    const {desc, slug, parent, replyOnUser} = req.body 

    const post = await Post.findOne({slug:slug})

    if(!post) {
        throw new Error("Post not found")
    }

    const newComment = new Comment({
        user: req.user._id,
        desc,
        post: post._id,
        parent,
        replyOnUser
    })

    const savedComment = await newComment.save()
    return res.json(savedComment)

    ;
  } catch (error) {
    next(error);
  }
};