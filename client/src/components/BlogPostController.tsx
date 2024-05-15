import { BlogPostView } from "./BlogPostView"
import axios from "axios"
import { useEffect, useState } from 'react'
import { Button } from "@mui/material"
import { BlogPostType } from "../types"


export const BlogPostController = () => {
    
    const [ blogPosts, setBlogPosts ] = useState<BlogPostType[]>([])

    const fetchBlogPosts = async () => {
        const response = await axios.get('http://localhost:3500/all-posts')
        const { data } = response
        setBlogPosts(data)

    }

    useEffect(() => {
        fetchBlogPosts()
    }, [])
    
    return (
        <div style ={{ padding: '40px' }}>
            <Button variant='contained' style={{ width: '520px' }} >
                New Post
            </Button>

            <br /><br />

            {
                blogPosts.length === 0 ? 'No Posts' : ''
            }

            {
                blogPosts.map(blogPost => 
                    <BlogPostView key={blogPost._id} {...blogPost} />
                )
            }
        </div>
    )
}