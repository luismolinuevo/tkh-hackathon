import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const getAllPost = await prisma.post.findMany();

    res.status(200).json({
        success: true,
        getAllPost
    });
});

router.post("/", async (req, res) => {
    const createPost = await prisma.post.create({
        data: {
            cost: req.body.cost,
            implementationDifficulty: req.body.implementationDifficulty,
            location: req.body.location,
            livingSituation: req.body.livingSituation,
            description: req.body.description
        }
    })
});

export default router;