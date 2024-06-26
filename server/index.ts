import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { getAllPostsController, createBlogPostController, getBlogPostController, editBlogPostController, deleteBlogPostController } from './controllers'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

console.log(process.env.PORT)

app.use(bodyParser())
app.use(cors())


// endpoints
app.get('/all-posts', getAllPostsController)
app.get('/get-post', getBlogPostController)
app.post('/create-post', createBlogPostController)
app.put('/edit-post', editBlogPostController)
app.delete('/delete-post', deleteBlogPostController)

mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    console.log('Connection failed')
})