import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const createRecommendation = await prisma.recommendations.create({
    data: {
      recommendation: req.body.recommendation,
      postId: req.body.postId,
    },
  });

  res.status(201).json({
    success: true,
  });
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const getRecommendation = await prisma.recommendations.findMany({
    where: {
      postId: Number(postId),
    },
  });

  res.status(200).json({
    success: true,
    getRecommendation,
  });
});

export default router;
