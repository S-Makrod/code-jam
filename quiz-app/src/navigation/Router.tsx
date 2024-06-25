import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import routes from './routes'
import LandingPage from '../api/pages/LandingPage'
import Quiz from '../api/pages/Quiz'

const Router = () => {
<<<<<<< Updated upstream
=======
    const [questions, setQuestions] = useState<Array<Question>>([])
    const [numberofPlayers, setNumberofPlayers] = useState(1)

>>>>>>> Stashed changes
    return (
        <ScrollToTop>
            <Routes>
                <Route path={routes.main} element={<LandingPage />} />
                <Route path={routes.quiz} element={<Quiz />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router