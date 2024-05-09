import { getBlogPost } from '../services'
import { Request, Response } from 'express'
import { Error } from 'mongoose'

export const getBlogPostController = async ( req: Request, res: Response ) => {
    //@ts-ignore
    const id: string = req.query.id
    const blogPost = await getBlogPost(id)
    res.json(blogPost)
}