import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const getAllPost = await prisma.post.findMany();

  res.status(200).json({
    success: true,
    getAllPost,
  });
});

router.post("/", async (req, res) => {
  const createPost = await prisma.post.create({
    data: {
      cost: req.body.cost,
      title: req.body.title,
      implementationDifficulty: req.body.implementationDifficulty,
      location: req.body.location,
      livingSituation: req.body.livingSituation,
      description: req.body.description,
      userName: req.body.userName,
      // user: {connect: {id: req.body.userId}}
    },
  });

  res.status(201).json({
    success: true,
  });
});

router.put("/:postId/vote", async (req, res) => {
    const { postId } = req.params;
    const { userName, type } = req.body;
  
    try {
      const post = await prisma.post.findUnique({
        where: { id: parseInt(postId) },
      });
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      const existingVote = await prisma.votes.findFirst({
        where: { postId: parseInt(postId), userName },
      });
  
      if (existingVote) {
        if (existingVote.type === type) {
          return res
            .status(400)
            .json({ error: `You have already ${type}voted this post` });
        } else {
          // Decrement the corresponding vote count if it's greater than 0
          if (existingVote.type === "upvote" && post.upvotes > 0) {
            await prisma.post.update({
              where: { id: parseInt(postId) },
              data: { upvotes: { decrement: 1 } },
            });
          } else if (existingVote.type === "downvote" && post.downvotes > 0) {
            await prisma.post.update({
              where: { id: parseInt(postId) },
              data: { downvotes: { decrement: 1 } },
            });
          }
  
          await prisma.votes.delete({
            where: { id: existingVote.id },
          });
        }
      }
  
      // Increment the corresponding vote count
      if (type === "upvote") {
        await prisma.post.update({
          where: { id: parseInt(postId) },
          data: { upvotes: { increment: 1 } },
        });
      } else if (type === "downvote") {
        await prisma.post.update({
          where: { id: parseInt(postId) },
          data: { downvotes: { increment: 1 } },
        });
      }
  
      await prisma.votes.create({
        data: {
          userName,
          type,
          post: { connect: { id: parseInt(postId) } },
        },
      });
  
      return res.status(200).json({ message: `Successfully ${type}voted the post` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  router.get("/upvotes/:userName", async (req, res) => {
    const { userName } = req.params;
    const getUpvotes = await prisma.votes.findMany({
        where: {
            userName: userName,
            type: "upvote"
        },
        include: { post: true },
    });

    res.status(200).json({
        success: true,
        getUpvotes
    });
  });
  

export default router;
