import { deleteBlogPost } from "../services";
import { Request, Response } from 'express'

export const deleteBlogPostController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id
    const result = await deleteBlogPost(id)
    res.json(result)
}