const router = require("express").Router()
const Quizcontroller = require("../controller/quizcontroller")

router.post("/questions",Quizcontroller.addQuestions)
router.get("/questions",Quizcontroller.allQuestions)
router.post("/questions/checkAns",Quizcontroller.CheckAns)

module.exports = router