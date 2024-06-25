import { useState } from "react"
import Option from "../components/Option"
import Question from "../types/question"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Quiz.css'
import quizService from "../api/services/quizService"
import { useNavigate } from "react-router-dom";

interface Props {
  questions: Array<Question>,
  numberOfPlayers: number;
}

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: 25,
  background: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

const Quiz = ({questions, numberOfPlayers}: Props) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)

  const [questionCount, setQuestionCount] = useState(1)

  const [isOpen, setIsOpen] = useState(false)

  const [modalString, setModalString] = useState("")

  const [score, setScore] = useState(0)

  const navigate = useNavigate()

  const onClickAnswer = async (id) => {
    if (questionCount === currentQuestionId - 1) {
      navigate('/summary')
    }
    try {
      setCurrentQuestionId(currentQuestionId + 1)
      setQuestionCount(questionCount + 1)
      const res = await quizService.verify(questions[currentQuestionId].id, 'Player', questions[currentQuestionId].options[id])

      setIsOpen(true)
  
      if (res.data === "Correct") {
        setScore(score + 1)
        setModalString("Correct! 🎉🎉")
      }
      else if (res.data === "Incorrect") {
        setModalString("Incorrect!")
      }

      setScore(newScore.data)
    }
    catch(e) {
      console.log(e)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="quiz-container">
      <h3>Question Number: {questionCount}/{questions.length}</h3>
      <h3>Player 1</h3>
      <h3>Score: {score}</h3>
      <h3>
        Question: {questions[currentQuestionId].question}
      </h3>
      <div>
        {questions[currentQuestionId].options.map((option, index) => (
          <Option text={option} id={index} onClick={onClickAnswer} />
        ))}
      </div>


      <Modal open={isOpen} onClose={handleClose}>
        <Box style={boxStyle}>
          {modalString}
        </Box>
      </Modal>
    </div>
  )
}

export default Quiz
