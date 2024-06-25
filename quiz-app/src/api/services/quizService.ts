import ServiceResponse from '../../types/serviceResponse'
import apiRoutes from '../apiRoutes'
import Service from '../service'
import Question from '../../types/question'
import { METHODS } from '../utils'
import { Empty } from '../contracts/generalContracts'
import { Answer, Guess, Score, Topics } from '../contracts/quiz'

const quizService = new Service<Question>()

const registerPlayer = async (playerId: string): Promise<ServiceResponse<string>> => {
    return await quizService.requestWith<string, Empty>(METHODS.post, {username: playerId}, `${apiRoutes.register}`)
}

const retrieveScore = async (playerId: string): Promise<ServiceResponse<Score>> => {
    return await quizService.requestWith<Score, Empty>(METHODS.get, undefined, `${apiRoutes.score}/${playerId}`)
}

const retrieveTopics = async (): Promise<ServiceResponse<Topics>> => {
    return await quizService.requestWith<Topics, Empty>(METHODS.get, undefined, `${apiRoutes.topics}`)
}

const verify = async (questionId: number, user: string, answerResponse: string): Promise<ServiceResponse<string>> => {
    return await quizService.requestWith<Answer, Empty>(METHODS.post, {questionId: questionId, user: user, answerResponse: answerResponse}, `${apiRoutes.verify}`)
}

const reset = async (): Promise<ServiceResponse<Empty>> => {
    return await quizService.requestWith<Empty, Empty>(METHODS.post, undefined, `${apiRoutes.reset}/`)
}

export default {
    retrieveScore,
    retrieveTopics,
    verify,
    reset,
    registerPlayer
}