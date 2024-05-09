import { getBlogPost, editBlogPost } from "../services";
import { Request, Response } from 'express'
import { Error } from 'mongoose'

export const editBlogPostController = async (req: Request, res: Response) => {
    //@ts-ignore
    const id: string = req.query.id

    const result = await editBlogPost(id, req.body)
    res.json(result)
}