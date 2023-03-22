export const useApi = () => {

    // const baseURL = ''
    const baseURL = 'http://127.0.0.1:8000'

    const jwt = useCookie('jwt')
    const head = computed(() => {
        if (jwt.value) {
            return {
                Authorization: `Bearer ${jwt.value}`,
                Accept: 'application/json',
            }
        } else {
            return {
                Accept: 'application/json',
            }
        }
    })
    
    const get = async (endpoint:string) => {
        const { data , pending, error, refresh } = await useFetch<any>(baseURL+endpoint, {
            headers: head.value,
            method: 'get',
        })
        return {
            data: data.value,
            error: error.value,
        }
    }
    const post = async (endpoint:string, postdata:object) => {
        const { data , pending, error, refresh } = await useFetch<any>(baseURL+endpoint, {
            headers: head.value,
            method: 'post',
            body: JSON.stringify(postdata),
        })
        return {
            data: data.value,
            error: error.value,
        }
    }

    const put = async (endpoint:string, postdata:object) => {
        const { data , pending, error, refresh } = await useFetch<any>(baseURL+endpoint, {
            headers: head.value,
            method: 'put',
            body: JSON.stringify(postdata),
        })
        return {
            data: data.value,
            error: error.value,
        }
    }

    const del = async (endpoint:string) => {
        const { data , pending, error, refresh } = await useFetch<any>(baseURL+endpoint, {
            headers: head.value,
            method: 'delete',
        })
        return {
            data: data.value,
            error: error.value,
        }
    }


    const Api = {
        baseURL,
        get: get,
        post: post,
        put: put,
        del: del,
    }

    return Api
}