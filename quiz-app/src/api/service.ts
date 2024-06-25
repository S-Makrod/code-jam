import { AxiosResponse, HttpStatusCode, Method } from 'axios'
import IService from './types/service'
import ServiceResponse from '../types/serviceResponse'
import IHttpClient from './types/httpClient'
import HttpClient from './httpClient'

class Service<T> implements IService<T> {
    baseUrl?: string
    client: IHttpClient<T>

    constructor(endpoint?: string, base?: string) {
        this.baseUrl = endpoint
        this.client = new HttpClient<T>(endpoint, base)
    }

    buildRes<V>(res: AxiosResponse<V>, error: boolean): ServiceResponse<V> {
        const success = HttpStatusCode.Ok <= res.status && res.status < HttpStatusCode.MultipleChoices

        if (error && !success)
            throw Error('Error here')

        return {
            success: success,
            status: res.status,
            data: res.data
        }
    }

    async retrieve(query?: string): Promise<ServiceResponse<Array<T>>> {
        const res = await this.client.get(query)
        return this.buildRes<Array<T>>(res, true)
    }

    async retrieveSingle(id: string): Promise<ServiceResponse<T>> {
        const res = await this.client.getSingle(`${id}/`)
        return this.buildRes<T>(res, true)
    }

    async request<K>(method: Method, data?: K, endpoint?: string): Promise<ServiceResponse<K>> {
        return this.requestWith<K, K>(method, data, endpoint)
    }

    async requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<ServiceResponse<K>> {
        const res = await this.client.requestWith<K, V>(method, data, endpoint)
        return this.buildRes<K>(res, true)
    }
}

export default Service