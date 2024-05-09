import { BlogPostModel, BlogPost } from "../schemas";
import { getBlogPost } from "./getBlogPost";

export const editBlogPost = async (id: string, blogPost: BlogPost) => {
    await BlogPostModel.findByIdAndUpdate(id, blogPost)
    const newBlogPost = await getBlogPost(id)
    return newBlogPost
}