import { getAllPosts } from "../services";
import { Request, Response } from 'express'
import { Error } from 'mongoose'

export const getAllPostsController = async (req: Request, res: Response) => {
    const allPosts = await getAllPosts()
    res.json(allPosts)
}