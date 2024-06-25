type ServiceResponse<T> = {
    status: number,
    success: boolean,
    data: string | T
}

export default ServiceResponse