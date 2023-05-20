import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const createRecommendation = prisma.recommendations.create({
        data: {
            where: {
                recommendation: req.body.recommendation,
                postId: req.body.postId
            }
        }
    });

    res.status(201).json({
        success: true
    });
});