// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxt/image-edge', 'nuxt-swiper', '@vueuse/nuxt', 'nuxt-headlessui'],
    ssr: false,
    app: {
        buildAssetsDir: '/static/frontend',
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    
    colorMode: {
        preference: 'dark',
        classSuffix: ''
    },
    tailwindcss:{
        configPath: 'tailwind.config.js'
    },
})
