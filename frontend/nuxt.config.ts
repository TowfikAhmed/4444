// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge', 'nuxt-swiper', '@vueuse/nuxt', 'nuxt-headlessui'],
    ssr: false,
    app: {
        buildAssetsDir: '/static/frontend',
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    tailwindcss:{
        configPath: 'tailwind.config.js'
    },
})
