import { Method } from 'axios'

export const METHODS: { [key: string]: Method } = {
    get: 'GET',
    delete: 'DELETE',
    head: 'HEAD',
    options: 'OPTIONS',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    purge: 'PURGE',
    link: 'LINK',
    unlink: 'UNLINK',
}

export const HEADERS: { [key: string]: string } = {
    csrf: 'X-CSRFToken',
    contentType: 'Content-Type',
    json: 'application/json'
}

export const getCookie = (name: string): string | null => {
    let cookieValue = null

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            // does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break
            }
        }
    }

    return cookieValue
}