<template>
    <section class="p-6 w-4/5">
        <!-- ====== Stats Section Start -->
        <section class="bg-white pb-20 lg:pb-[120px]">
           <div class="bg-primary pt-20 pb-[140px] lg:pt-[120px]">
              <div class="mx-auto px-4 sm:container">
                 <div class="mx-auto max-w-[570px] text-center">
                    <span class="mb-2 block text-lg font-semibold text-white">
                    Some Fun Facts
                    </span>
                    <h2 class="mb-4 text-3xl font-bold text-white md:text-[40px]">
                       Platform overview
                    </h2>
                    <p class="text-base text-white">
                       Here are many info of our platform, you can may want to know
                       as an admin.
                    </p>
                 </div>
              </div>
           </div>
           <div class="-mt-20" v-if="stats">
              <div class="mx-auto px-4 sm:container">
                 <div
                    class="shadow mx-auto flex max-w-[970px] flex-wrap items-center justify-center rounded-lg bg-white py-[60px] px-10"
                    >
                    <div class="w-1/2 md:w-1/5">
                       <div class="mb-10 text-center md:mb-0">
                          <p class="text-body-color mb-1 text-lg">Total Workers</p>
                          <span
                             class="block text-4xl font-bold text-black sm:text-[44px]"
                             >
                          {{ stats.workers }}
                          </span>
                       </div>
                    </div>
                    <div class="w-1/2 md:w-1/5">
                       <div class="mb-10 text-center md:mb-0">
                          <p class="text-body-color mb-1 text-lg">Total Banks</p>
                          <span
                             class="block text-4xl font-bold text-black sm:text-[44px]"
                             >
                             {{ stats.banks }}
                          </span>
                       </div>
                    </div>
                    <div class="w-1/2 md:w-1/5">
                       <div class="mb-10 text-center md:mb-0">
                          <p class="text-body-color mb-1 text-lg">Live Banks</p>
                          <span
                             class="block text-4xl font-bold text-black sm:text-[44px]"
                             >
                             {{ stats.live }}
                          </span>
                       </div>
                    </div>
                    <div class="w-1/2 md:w-1/5">
                       <div class="text-center">
                          <p class="text-body-color mb-1 text-lg">Pending Dollars</p>
                          <span
                             class="block text-4xl font-bold text-black sm:text-[44px]"
                             >
                             ${{ stats.pending }}
                          </span>
                       </div>
                    </div>
                    <div class="w-1/2 md:w-1/5">
                       <div class="text-center">
                          <p class="text-body-color mb-1 text-lg">Earnings</p>
                          <span
                             class="block text-4xl font-bold text-black sm:text-[44px]"
                             >
                             ${{ stats.completed }}
                          </span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <!-- ====== Stats Section End -->
    </section>
</template>

<script setup>
    const Api = useApi()
    definePageMeta({
        layout: 'dashboard'
    })
    const stats = ref('ss')
    const getStats = async () => {
        const response = await Api.get('/api/dash/overview')
        stats.value = response.data
    }
    getStats()
</script>

<style>
    .bg-primary {
        background-color: #3057d3;
    }
</style>
