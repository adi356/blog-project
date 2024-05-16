import { BlogPostView } from "./BlogPostView"
import axios from "axios"
import { useEffect, useState } from 'react'
import { Button, TextField } from "@mui/material"
import { BlogPostType } from "../types"

interface CreateBlogPostProps {
    onCreate: (title: string, body: string, author: string) => void,
    onCancel: () => void
}

export const CreateBlogPost = ({
    onCreate,
    onCancel
}: CreateBlogPostProps) => {
    const [ title, setTitle ] = useState<string>('')
    const [ author, setAuthor ] = useState<string>('')
    const [ body, setBody ] = useState<string>('')

    const handleCreateClick = async () => {
        await onCreate(title, body, author)
    }

    return (
        <div>
            New blog post

            <br /><br />

            <TextField label='Title' value={title} onChange={event => setTitle(event.target.value)} />
            <br />
            <TextField label='Author' value={author} onChange={event => setAuthor(event.target.value)} />
            <br />
            <TextField label='Body' value={body} onChange={event => setBody(event.target.value)} />

            <br /><br />

            <Button variant='outlined' color='error' onClick={onCancel}>
                Cancel
            </Button>
            <Button variant='outlined' onClick={handleCreateClick}>
                Create
            </Button>
        </div>
    )
}


export const BlogPostController = () => {
    
    const [ blogPosts, setBlogPosts ] = useState<BlogPostType[]>([])
    const [ showCreateForm, setShowCreateForm ] = useState<boolean>(false)

    const fetchBlogPosts = async () => {
        const response = await axios.get('http://localhost:3500/all-posts')
        const { data } = response
        setBlogPosts(data)

    }

    const deleteBlogPost = async (id: string) => {
        await axios.delete(`http://localhost:3500/delete-post?id=${id}`)
        await fetchBlogPosts()
    }

    const createBlogPost = async (title: string, body: string, author: string) => {
        await axios.post('http://localhost:3500/create-post', {
            //data: {
                title,
                body,
                author
            //}
        })
        setShowCreateForm(false)
        await fetchBlogPosts()
    }

    useEffect(() => {
        fetchBlogPosts()
    }, [])
    
    return (
        <div style ={{ padding: '40px' }}>

            {
                showCreateForm ? <CreateBlogPost onCreate={createBlogPost} onCancel={() => setShowCreateForm(false)} /> : (
                    <Button variant='contained' style={{ width: '520px' }} onClick={() => setShowCreateForm(true)}>
                        New Post
                    </Button>
                )
            }

            <br /><br />

            {
                blogPosts.length === 0 ? 'No Posts' : ''
            }

            {
                blogPosts.map(blogPost => 
                    <BlogPostView key={blogPost._id} {...blogPost} onDelete={deleteBlogPost} />
                )
            }
        </div>
    )
}