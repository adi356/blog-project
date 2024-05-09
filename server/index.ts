import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(bodyParser())

