<template>
    <div class="p-10">
        <button class="btn">ref {{ name }}</button>
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
            }"
        >
            <SwiperSlide v-for="slide in 10" :key="slide" class="bg-rose-200 p-10"> {{ slide }} </SwiperSlide>
        </Swiper>
        <nuxt-img src="https://wallpaperaccess.com/full/1356237.jpg" class="w-[200px] inline" />
        <Icon name="uil:github" class="m-10 text-orange-500 text-2xl" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    definePageMeta({
        layout: 'public',
        middleware: ['auth']
    })
    const { user } = useAuth() 
    const name = ref('John Doe')
</script>

<style scoped>

</style>