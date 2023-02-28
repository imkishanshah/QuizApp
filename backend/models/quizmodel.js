const mongoose = require("mongoose")
const {Schema, model} = mongoose

const quizSchema = new Schema({
    question: {
        type: String,
        required: true,
      },
      options:[{id:Number,text:String}],
      // a: { type: String, required: true },
      // b: { type: String, required: true },
      // c: { type: String, required: true },
      correct: { type: String, required: true },
    }
    )
const Quiz = model(
  'quizzes',quizSchema
)
module.exports = Quiz