import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import routes from './routes'
import LandingPage from '../pages/LandingPage'

const Router = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path={routes.main} element={<LandingPage />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router