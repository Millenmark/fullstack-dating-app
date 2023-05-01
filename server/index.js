import express from 'express'
import mongoose from 'mongoose'

//App config
const app = express()
const port = process.env.PORT || 5000

//Middleware

//DB Config

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Dating App"))

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))

