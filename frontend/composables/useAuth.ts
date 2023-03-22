const Api = useApi()
export const useAuth = () => {
    const baseURL = Api.baseURL
    const user = useState<any>('user', ()=>null)
    const isAuthenticated = computed(() => user.value !== null)
    const jwt = useCookie('jwt')
    
    const jwtLogin = async () => {
        const { data , pending, error, refresh } = await useFetch<any>(baseURL+'/api/auth/login/', {
            headers: {
                Authorization: `Bearer ${jwt.value}`,
                Accept: 'application/json',
            },
            method: 'GET',
        })
        if (data.value) {
            user.value = data.value
        }
    }
    const login = async (identity: string, password: string) => {
        const { data , pending, error, refresh } = await useFetch<any>( baseURL+'/api/auth/login/',{
            method: 'POST',
            body: JSON.stringify({ identity, password }),
        })
        console.log(identity, password, data)
        if (data.value) {
            user.value = data.value
            const jwt = useCookie('jwt')
            jwt.value = data.value.jwt
            return true
        }
    }
    
    const logout = async () => {
        user.value = null;
        const jwt = useCookie('jwt')
        jwt.value = null
    }
    if (jwt.value) {
        jwtLogin()
    }

    return { user, isAuthenticated, jwtLogin, login, logout }
}