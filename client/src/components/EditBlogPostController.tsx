import axios from "axios"
import { useEffect, useState } from 'react'
import { Button, TextField } from "@mui/material"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const EditBlogPostController = () => {
    const [ title, setTitle ] = useState<string>('')
    const [ author, setAuthor ] = useState<string>('')
    const [ body, setBody ] = useState<string>('')
    
    const { id } = useParams()
    const navigate = useNavigate()
    
    const loadBlogPosts = async () => {
        const result = await axios.get(`http://localhost:3500/get-post?id=${id}`)
        const { data } = result
        
        setTitle(data.title)
        setAuthor(data.author)
        setBody(data.body)
    }

    const editBlogPost = async () => {
        await axios.put(`http://localhost:3500/edit-post?id=${id}`, {
            title, author, body
        })
        navigate('/')
    }

    useEffect(() => {
        loadBlogPosts()
    }, [])

    return (
        <div>
            Edit Blog Post

            <br /><br />

            <TextField label='Title' value={title} onChange={event => setTitle(event.target.value)} />
            <br />
            <TextField label='Author' value={author} onChange={event => setAuthor(event.target.value)}/>
            <br />
            <TextField label='Body' value={body} onChange={event => setBody(event.target.value)}/>

            <br /><br />

            <Button variant='outlined' color='error' onClick={() => navigate('/')}>
                Cancel
            </Button>
            <Button variant='outlined' onClick={editBlogPost}>
                Edit
            </Button>
        </div>
    )
}