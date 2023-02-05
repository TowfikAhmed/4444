// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxt/image-edge', 'nuxt-swiper', '@morev/vue-transitions/nuxt', '@vueuse/nuxt', 'nuxt-headlessui'],
    ssr: false,
    app: {
        buildAssetsDir: '/static/frontend',
        cdnURL: 'asdasdgg'
    },
    colorMode: {
        preference: 'dark',
        classSuffix: ''
    },
    runtimeConfig: {
        baseURL: process.env.BASE_URL || 'http:// 127.0.0.1:8000/',
    },
    tailwindcss:{
        configPath: 'tailwind.config.js'
    }
})
