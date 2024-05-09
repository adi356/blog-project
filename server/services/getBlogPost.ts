import { BlogPostModel } from "../schemas";

export const getBlogPost = async (id: string) => {
    const blogPost = await BlogPostModel.findById(id)
    return blogPost
}