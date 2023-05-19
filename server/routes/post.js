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

export default router;