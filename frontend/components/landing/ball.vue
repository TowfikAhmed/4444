<template>
    <div class="relative">
        <canvas ref="canvas" class="canvas"></canvas>
        <div class="absolute h-[100vh] w-[100vw] bg-slate-50 dark:bg-slate-900 opacity-90 left-0 top-0"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

definePageMeta({
    layout: 'public',
})



onMounted(()=>{
    const canvas = document.querySelector(".canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const frameCount = 179;

    const currentFrame = (index) => `./static/frontend/best-ball/${(index + 1).toString()}.jpg`;

    const images = [];
    let ball = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    images[0].onload = render;

    function render() {
        context.canvas.width = images[0].width;
        context.canvas.height = images[0].height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[ball.frame], 0, 0);
    }

    gsap.to(ball, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 0.5,
            pin: "canvas",
            end: "500%",
        },
        onUpdate: render,
    });

gsap.fromTo(
        ".ball-text",
        {
            opacity: 0,
        },
        {
            opacity: 1,
            scrollTrigger: {
            scrub: 1,

            start: "50%",
            end: "60%",
            },
            onComplete: () => {
            gsap.to(".ball-text", { opacity: 0 });
            },
        }
        );
    })

</script>

<style scoped>
canvas {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 1;
}

</style>