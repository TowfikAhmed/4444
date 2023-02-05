export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated.value) {
        console.log('isAuthenticated.value', isAuthenticated.value)
        navigateTo('/login')
    }
  })