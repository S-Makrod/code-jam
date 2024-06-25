import { useState } from "react"
import Option from "../components/Option"
import Question from "../types/question"

interface Props {
  questions: Array<Question>,
  numberOfPlayers: number;
}

const Quiz = ({questions, numberOfPlayers}: Props) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)

  const [questionCount, setQuestionCount] = useState(1)

  const onClickAnswer = (id) => {
    setCurrentQuestionId(currentQuestionId + 1)
    setQuestionCount(questionCount + 1)
  }

  return (
    <div>
      <h3>Question Number: {questionCount}/{questions.length}</h3>
      <h3>Player 1</h3>
      <h3>Score: </h3>
      <h3>
        Question: {questions[currentQuestionId].question}
      </h3>
      <div>
        {questions[currentQuestionId].options.map((option, index) => (
          <Option text={option} id={index} onClick={onClickAnswer} />
        ))}
      </div>
    </div>
  )
}

export default Quiz
