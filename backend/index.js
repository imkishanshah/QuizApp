const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors  = require("cors")
const Quizroutes = require("./routes/quizrouter")

const app = express()
dotenv.config()

connectBD = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Quizapp",).then(()=> console.log((`Connected to mongodb...`)))
    const quizSchema = mongoose.Schema({})
    const quiz = mongoose.model('quiz',quizSchema)
    const data = await quiz.find()
    console.log(data);
}
connectBD()

app.use(express.json())
app.use(cors())

app.use("/api",Quizroutes)

app.listen(4000, () => console.log("running on port 4000"))