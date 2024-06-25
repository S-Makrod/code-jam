import ServiceResponse from '../../types/serviceResponse'
import apiRoutes from '../apiRoutes'
import Service from '../service'
import Question from '../../types/question'
import { METHODS } from '../utils'
import { Empty } from '../contracts/generalContracts'
import { Score } from '../contracts/quiz'

const apiService = new Service<Question>()

const retrieveScore = async (playerId: string): Promise<ServiceResponse<Score>> => {
    return await apiService.requestWith<Empty, Score>(METHODS.get, null, playerId)
}

const retrieveSingle = async (id: string): Promise<ServiceResponse<Question>> => {
    return await apiService.retrieveSingle(id)
}

export default {
    retrieve,
    retrieveSingle
}