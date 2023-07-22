import express from "express";
import prisma from "../db/index.js";
import passport from "passport";

const router = express.Router();

router.get("/", async (req, res) => {
  const getAllPost = await prisma.post.findMany();

  res.status(200).json({
    success: true,
    getAllPost,
  });
});

router.post("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
  console.log(req.body)
  const createPost = await prisma.post.create({
    data: {
      cost: req.body.cost,
      title: req.body.title,
      implementationDifficulty: req.body.implementationDifficulty,
      city: req.body.city,
      livingSituation: req.body.livingSituation,
      description: req.body.description,
      userId: req.user.id
      // user: {connect: {id: req.user.id}}
    },
  });

  res.status(201).json({
    success: true,
  });
});

router.put("/:postId/vote", passport.authenticate("jwt", { session: false }),async (req, res) => {
  const { postId } = req.params;
  const { type } = req.body;
  console.log(postId);
  console.log(type)

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId) },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const existingVote = await prisma.votes.findFirst({
      where: { 
        postId: parseInt(postId),
        userId: req.user.id
      },
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
            data: {
              upvotes: { decrement: 1 },
              // downvotes: { increment: 1 },
            },
          });
        } else if (existingVote.type === "downvote" && post.downvotes > 0) {
          await prisma.post.update({
            where: { id: parseInt(postId) },
            data: {
              downvotes: { decrement: 1 },
              // upvotes: { increment: 1 },
            },
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
        user: {connect: {id: req.user.id}},
        type,
        post: { connect: { id: parseInt(postId) } },
      },
    });

    const updatedVotes = await prisma.post.findUnique({
      where: { id: parseInt(postId)},
    });

    return res.status(200).json({
      message: `Successfully ${type}voted the post`,
      updatedVotes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/upvotes/:type", passport.authenticate("jwt", { session: false }),async (req, res) => {
  const { type } = req.params;
  const getUpvotes = await prisma.votes.findMany({
    where: {
      userId: req.user.id,
      type: type,
    },
    include: { post: true },
  });

  res.status(200).json({
    success: true,
    getUpvotes,
  });
});

export default router;
