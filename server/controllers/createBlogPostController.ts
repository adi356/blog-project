import { createBlogPost } from "../services";
import { Request, Response } from 'express'
import { Error } from 'mongoose'

export const createBlogPostController = async (req: Request, res: Response) => {
    //TODO: add input validation

    const newBlogPost = req.body
    try {
        const result = await createBlogPost(newBlogPost)
        res.json(result)
    } catch (e) {
        res.status(400).json('Blog Post creation failed | Validation failed')
    }
}