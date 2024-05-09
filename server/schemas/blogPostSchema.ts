import { Schema, model } from 'mongoose'

export interface BlogPost {
    title: string,
    author: string,
    body: string,
    date: Date,
}

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

export const blogPostModel = model('BlogPost', BlogPostSchema)