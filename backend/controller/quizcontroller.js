const Quiz = require("../models/quizmodel")

const  allQuestions = async (req,res) => {
    try {
        const questions = await Quiz.find()
        res.send(questions)
    } catch (error) {
        res.send({message:error})
    }
}

const  addQuestions = async (req,res) => {
    try {
        const newquestion = new Quiz(req.body)
        const savedquestions = await newquestion.save();
        res.send(savedquestions)
        // const newquiz = new Quiz(req.body)
        // const addquestion = Quiz.save(newquiz)
        // res.send(addquestion)
        // console.log({message:"success"})
        // // res.send({message:"success"})
    } catch (error) {
        res.send(error)
    }
}

const CheckAns = async (req, res) => {
    try {
      const { body: ansList } = req;
      let result = 0;
      for (let index = 0; index < ansList.length; index++) {
        const element = ansList[index];
        const correctAns = await QuestionBank.findOne({
          _id: element._id,
          correct: element.ans,
        });
        if (correctAns) {
          result += 1;
        }
      }
      res.send({ result, total: ansList.length });
    } catch (error) {
      res.send(error);
    }
  };


module.exports = {allQuestions,addQuestions,CheckAns}