import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import routes from './routes'
import LandingPage from '../pages/LandingPage'
import Quiz from '../pages/Quiz'

const Router = () => {
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