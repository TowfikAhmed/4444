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
        <div class="flex gap-1">
            <transition-fade :duration="2000">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-fade>
            <transition-slide :delay="1000" :duration="1500">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-slide>
            <transition-fade>
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-fade>
            <transition-expand>
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-expand>
        </div>
        <p class="my-1">Slide</p>
        <div class="flex gap-1">
            <transition-slide>
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-slide>
            <transition-slide :offset="[100, 0]">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-slide>
            <transition-slide :offset="[0, 100]">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-slide>
        </div>
        <p class="my-1">Scale</p>
        <div class="flex gap-1">
            <transition-scale>
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-scale>
            <transition-scale :scale="0.5">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-scale>
            <transition-scale :scale="1.5">
                <div v-if="isVisible" class="bg-orange-800 p-10">Hello</div>
            </transition-scale>
        </div>
        <button @click="isVisible = !isVisible" class="btn">Toggle</button>

        
            {{ targetIsVisible }}
            {{ target2IsVisible }}
        <transition-scale>
                <div v-if="targetIsVisible" class="bg-orange-800 p-10">Hello</div>
        </transition-scale>
        <div class="" ref="target"></div>
          <div ref="target2" class="p-20 bg-teal-300 m-10">
            <h1>Hello world</h1>
            {{user}}

            <nuxt-link to="/login">Login</nuxt-link>
          </div>
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
    const isVisible = ref(true)

    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)
    const target2 = ref(null)
    const target2IsVisible = useElementVisibility(target2)
</script>

<style scoped>

</style>