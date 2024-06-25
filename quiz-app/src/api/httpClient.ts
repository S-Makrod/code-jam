import axios, { AxiosResponse, AxiosInstance, Method, AxiosHeaders } from 'axios'
import IHttpClient from './types/httpClient'
import ITokenStateManager from './types/tokenStateManger'
import TokenStateManager from './tokenStateManager'

class HttpClient<T> implements IHttpClient<T> {
    client: AxiosInstance
    stateManager: ITokenStateManager

    constructor(root?: string, base?: string) {
        let baseURL = 'api/'
        
        if (base)
            baseURL += `${base}/`
        if (root)
            baseURL += `${root}/`

        this.client = axios.create({
            baseURL: baseURL,
        })

        this.stateManager = new TokenStateManager()
    }

    getAuthorizationHeader = (): AxiosHeaders => {
        const token = this.stateManager.getToken()

        const header: AxiosHeaders = new AxiosHeaders()
        if(token) header.setAuthorization(token)
        return header
    }

    async get(query?: string, endpoint: string = ''): Promise<AxiosResponse<Array<T>>> {
        const url = query === undefined? endpoint : `${endpoint}?${query}`
        return await this.client.get<Array<T>>(url, { headers: this.getAuthorizationHeader() })
    }

    async getSingle(endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.get<T>(endpoint, { headers: this.getAuthorizationHeader() })
    }

    async post(obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(`${endpoint}`, obj, { headers: this.getAuthorizationHeader() })
    }

    async request<K>(method: Method, data?: K, endpoint?: string | undefined): Promise<AxiosResponse<K>> {
        return this.requestWith<K, K>(method, data, endpoint)
    }

    async requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<AxiosResponse<K>> {
        return await this.client.request<K>({
            method,
            url: endpoint,
            data: data,
            headers: this.getAuthorizationHeader()
        })
    }
}

export default HttpClient