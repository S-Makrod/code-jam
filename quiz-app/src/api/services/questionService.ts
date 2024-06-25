import ServiceResponse from '../../types/serviceResponse'
import apiRoutes from '../apiRoutes'
import Service from '../service'
import Question from '../../types/question'

const questionService = new Service<Question>(apiRoutes.questions)

const retrieve = async (query: string): Promise<ServiceResponse<Array<Question>>> => {
    return await questionService.retrieve(query)
}

const retrieveSingle = async (id: string): Promise<ServiceResponse<Question>> => {
    return await questionService.retrieveSingle(id)
}

export default {
    retrieve,
    retrieveSingle
}