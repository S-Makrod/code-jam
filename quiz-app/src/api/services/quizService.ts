import ServiceResponse from '../../types/serviceResponse'
import apiRoutes from '../apiRoutes'
import Service from '../service'
import Question from '../../types/question'
import { METHODS } from '../utils'
import { Empty } from '../contracts/generalContracts'
import { Answer, Guess, Score } from '../contracts/quiz'

const quizService = new Service<Question>()

const retrieveScore = async (playerId: string): Promise<ServiceResponse<Score>> => {
    return await quizService.requestWith<Score, Empty>(METHODS.get, undefined, `${apiRoutes.score}/${playerId}`)
}

const verify = async (questionId: string, guess: Guess): Promise<ServiceResponse<Answer>> => {
    return await quizService.requestWith<Answer, Guess>(METHODS.post, guess, `${apiRoutes.verify}/${questionId}`)
}

const reset = async (): Promise<ServiceResponse<Empty>> => {
    return await quizService.requestWith<Empty, Empty>(METHODS.post, undefined, `${apiRoutes.reset}/`)
}

export default {
    retrieveScore,
    verify,
    reset
}