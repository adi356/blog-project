import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { getAllPostsController, createBlogPostController } from './controllers'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

console.log(process.env.PORT)

app.use(bodyParser())

app.get('/all-posts', getAllPostsController)
app.post('/create-post', createBlogPostController)

mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    console.log('Connection failed')
})