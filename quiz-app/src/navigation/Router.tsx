import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import routes from './routes'
import LandingPage from '../pages/LandingPage'
import Quiz from '../pages/Quiz'
import { useState } from 'react'
import Question from '../types/question'

const Router = () => {
    const [questions, setQuestions] = useState<Array<Question>>([])
    const [numberofPlayers, setNumberofPlayers] = useState(1)

    return (
        <ScrollToTop>
            <Routes>
                <Route path={routes.main} element={<LandingPage questions={questions} numberOfPlayers={numberofPlayers} setNumberOfPlayers={setNumberofPlayers} setQuestions={setQuestions} />} />
                <Route path={routes.quiz} element={<Quiz questions={questions} numberOfPlayers={numberofPlayers}/>} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router