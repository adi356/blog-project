import { BlogPostModel } from "../schemas";

export const deleteBlogPost = async (id: string) => {
    const result = await BlogPostModel.findByIdAndDelete(id)
    return result
}