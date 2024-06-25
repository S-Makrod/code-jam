import { AxiosResponse, Method } from 'axios'
import ServiceResponse from '../../types/serviceResponse'

interface IService<T> {
    buildRes<V>(res: AxiosResponse<V>, error: boolean): ServiceResponse<V>
    retrieve(query?: string):  Promise<ServiceResponse<Array<T>>>
    retrieveSingle(id: string):  Promise<ServiceResponse<T>>

    request<K>(method: Method, data?: K, endpoint?: string): Promise<ServiceResponse<K>>
    requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<ServiceResponse<K>>
}

export default IService