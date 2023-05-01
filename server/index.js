import express from 'express'
import mongoose from 'mongoose'
import cardsModel from './models/cardsModel.js'

//App config
const app = express()
const port = process.env.PORT || 5000
const connectionUrl = "mongodb+srv://millenmarkdev:0e3QZpS33qswJ3TU@cluster0.3dh9m4w.mongodb.net/datingDB?retryWrites=true&w=majority"


//Middleware
app.use(express.json())

//DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully Connected to MongoDB ATLAS')
  })
  .catch((error) => {
    console.log('MongoDB Connection Failed! ', error.message)
  })

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Dating App"))
app.get("/dating/cards", async (req, res) => {
  try {
    const cards = await cardsModel.find()
    res.status(200).send(cards)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

app.post("/dating/cards", async (req, res) => {
  try {
    const card = req.body
    const createdCard = await cardsModel.create(card)
    res.status(201).send(createdCard)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})


//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))

