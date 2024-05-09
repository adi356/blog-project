import { deleteBlogPost } from "../services";
import { Request, Response } from 'express'

export const deleteBlogPostController = async (req: Request, res: Response) => {
    const id: string = req.body.id
    const result = await deleteBlogPost(id)
    res.json(result)
}