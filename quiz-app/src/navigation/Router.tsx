import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import routes from './routes'
import LandingPage from '../pages/LandingPage'
import Quiz from '../pages/Quiz'
import Summary from '../pages/Summary'
import { useState } from 'react'
import Question from '../types/question'

const Router = () => {
    const [questions, setQuestions] = useState<Array<Question>>([])
    const [numberofPlayers, setNumberofPlayers] = useState(1)
    const [score, setScore] = useState(0)

    return (
        <ScrollToTop>
            <Routes>
                <Route path={routes.main} element={<LandingPage questions={questions} setQuestions={setQuestions} numberOfPlayers={numberofPlayers} setNumberOfPlayers={setNumberofPlayers}/>} />
                <Route path={routes.quiz} element={<Quiz questions={questions} numberOfPlayers={numberofPlayers} score={score} setScore={setScore}/>} />
                <Route path={routes.summary} element={<Summary score={score}/>}/>
            </Routes>
        </ScrollToTop>
    )
}

export default Router