<template>
    
        <section class="p-6 w-4/5">
        
            <section class="bg-white py-6 ">
                <div class="flex items-center justify-between pb-8">
                    <h3 class="text-2xl font-bold text-slate-700 my-4">Workers List</h3>
                    <a
                        @click="addForm=true"
                        class="bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded  px-6 text-center  font-normal text-white hover:bg-opacity-90"
                        >
                        + Add Worker 
                    </a>
                </div>
                <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="max-w-full overflow-x-auto" v-if="workers && workers.results">
                            <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-primary text-center">
                                    <th class="w-1/6 min-w-[160px] border-l border-transparent py-3 px-3 text-lg font-semibold text-white">Username</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Pending</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Earning</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Joined On</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="worker in workers.results" :key="worker.id">
                                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">{{ worker.user.username }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">{{ worker.pending }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">{{ worker.earning }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">{{ worker.user.date_joined }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 text-center text-base font-medium">
                                        <a @click="destroyWorker(worker.id)" class="bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90">Delete</a>
                                    </td>
                                </tr>
                        
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Over :show="addForm">
                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                    <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                      <div @click="addForm=false" class="absolute top-0 -left-2 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <span type="button" class="rounded-full text-slate-600 shadow-xl bg-white hover:text-slate-500 cursor-pointer p-1" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"/></svg>
                        </span>
                      </div>
                    </TransitionChild>
                    <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6">
                        <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Add Worker</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <div class="my-4">
                            <div class="w-full mt-4">
                                <label class="text-xs text-gray-600">Username</label>
                                <input v-model="newWorker.username" type="text" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Username">
                            </div>
                            <div class="w-full mt-4">
                                <label class="text-xs text-gray-600">Password</label>
                                <input v-model="newWorker.password" type="password" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Password">
                            </div>
                            <div class="w-full mt-4">
                                <label class="text-xs text-gray-600">Password</label>
                                <input v-model="newWorker.confirm_password" type="password" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Password">
                            </div>
                            <p class="my-4 text-rose-600" v-if="newWorker.error">{{ newWorker.error }}</p>
                            
                            <div class="w-full mt-4">
                                <button @click="createWorker" class="bg-primary inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90">Add Worker</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
            </Over>
        </section>
    
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
const Api = useApi()
definePageMeta({
    layout: 'dashboard'
})
const workers = ref('ss')
const getWorkers = async () => {
    const response = await Api.get('/api/dash/profiles')
    workers.value = response.data
}
getWorkers()
const destroyWorker = async (id) =>{
    const response = await Api.del('/api/dash/profiles/'+id+'/delete')
    console.log(response);
    getWorkers()
} 

const addForm = ref(false) 
const newWorker = ref({
    username: '',
    password: '',
    confirm_password: '',
    error: "",
})
const createWorker = async () => {
    newWorker.value.error = '';
    if( !newWorker.value.username || !newWorker.value.password || !newWorker.value.confirm_password){
        newWorker.value.error = "All fields are required"
        return
    }
    if(newWorker.value.password != newWorker.value.confirm_password){
        newWorker.value.error = "Password does not match"
        return
    }
    const response = await Api.post('/api/dash/profiles/create', newWorker.value)
    console.log(response);
    getWorkers()
    addForm.value = false
}


</script>

<style>
    .bg-primary{
        background-color: #3057d3;
    }
</style>
