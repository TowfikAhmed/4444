<template>
    <div class="relative overflow-hidden">  
        <main class="mx-auto mt-16 max-w-7xl sm:mt-24 lg:mt-32">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                <span class="block text-base font-semibold text-gray-400 sm:text-lg lg:text-base xl:text-lg">Coming soon</span>
                <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span class="block text-gray-900 dark:text-gray-300">Data to enrich your</span>
                    <span class="block text-indigo-600">online business</span>
                </span>
                </h1>
                <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
                <form action="#" method="POST" class="mt-3 sm:flex">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="text-gray-400 outline-none px-4 block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm sm:flex-1" placeholder="Enter your email" />
                    <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">Join Now</button>
                </form>
                <p class="mt-3 text-sm text-gray-400">
                    We care about the protection of your data. Read our
                    <a href="#" class="font-medium text-gray-900 underline">Privacy Policy</a>.
                </p>
                </div>
            </div>
            <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex justify-end lg:max-w-none lg:items-center">
                <LandingGlobe class="" />
            </div>
            </div>
        </main>
    </div>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  </script>