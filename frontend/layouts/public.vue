<template>
    <div class="">
        <no-ssr class="fixed -z-50">
            <Ball />
        </no-ssr>
        <Navbar />
        <div  class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 text-gray-900 dark:text-gray-300">
            <slot/>
        </div>
        <footer />
    </div>
</template>

<script setup>
</script>

<style scoped>

</style>