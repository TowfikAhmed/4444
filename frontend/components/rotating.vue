<template>
    <div class="mx-auto">
        <div class="relative mx-auto">
            <div class="absolute right-0 top-0 img1 w-full">
                <img class="card-img2 pix-img-elem rounded-0  h-1002 lazyloaded" style="width:100%;height:auto;" width="662" height="664" src="https://trustswap.com/wp-content/uploads/2021/09/Layer-2-1.svg" data-src="https://trustswap.com/wp-content/uploads/2021/09/Layer-2-1.svg" alt="">
            </div>
            <div class="absolute right-0 top-0 img2 w-full">
                <img class="card-img2 pix-img-elem rounded-0  h-1002 lazyloaded" style="width:100%;height:auto;" width="662" height="664" src="https://trustswap.com/wp-content/uploads/2021/09/Layer-3-1.svg" data-src="https://trustswap.com/wp-content/uploads/2021/09/Layer-3-1.svg" alt="">
            </div>
            <div class="absolute right-0 top-0 img3 w-full">
                <img class="card-img2 pix-img-elem rounded-0  h-1002 lazyloaded" style="width:100%;height:auto;" width="662" height="664" src="https://trustswap.com/wp-content/uploads/2022/05/header-1.svg" data-src="https://trustswap.com/wp-content/uploads/2022/05/header-1.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .img1 {
        animation: rotate 15s linear infinite;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .img3 {
        animation: rotate3 25s linear infinite;
    }
    @keyframes rotate3 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>