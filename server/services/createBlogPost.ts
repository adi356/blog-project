import { BlogPostModel, BlogPost } from "../schemas"

export const createBlogPost = async (blogpost: BlogPost) => {
    const result = await BlogPostModel.create(blogpost)
    return result
}