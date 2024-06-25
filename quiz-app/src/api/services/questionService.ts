import ServiceResponse from '../../types/serviceResponse'
import apiRoutes from '../apiRoutes'
import Service from '../service'
import Question from '../../types/question'

const userService = new Service<Question>(apiRoutes.questions)

const retrieve = async (): Promise<ServiceResponse<Array<Question>>> => {
    return await userService.retrieve()
}

const retrieveSingle = async (id: string): Promise<ServiceResponse<Question>> => {
    return await userService.retrieveSingle(id)
}

export default {
    retrieve,
    retrieveSingle
}