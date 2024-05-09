import { BlogPostModel } from "../schemas";

// get all blog posts currently held in MongoDB 
export const getAllPosts = async () => {
    const allPosts = await BlogPostModel.find({})
    return allPosts
}