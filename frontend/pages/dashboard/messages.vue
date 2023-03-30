<template>
    <section class="bg-gray relative z-10 overflow-hidden py-16 w-full">
        <div class="fixed bottom-4 right-4 animate-[bounce_5s_ease-in-out]">
            <div @click="addForm=true" class="p-3 m-2 bg-indigo-100 border rounded-full shadow-xl text-indigo-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20V5q0-.825.588-1.413T5 3h12q.825 0 1.413.588T19 5v5.075q-.25-.05-.5-.063T18 10q-.25 0-.5.013t-.5.062V5H5v10h7.075q-.05.25-.063.5T12 16q0 .25.013.5t.062.5H6l-3 3ZM7 9h8V7H7v2Zm0 4h5v-2H7v2Zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2ZM5 15V5v10Z"/></svg>
            </div>
            <div class="p-3 m-2 bg-indigo-100 border rounded-full shadow-xl text-indigo-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8m18 14v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/></g></svg>
            </div>
        </div>
      <div class="container mx-auto" v-if="messages.results">
        <div v-for="msg in messages.results" class="shadow-three mx-auto mb-8 w-full max-w-[570px] rounded-lg bg-white border shadow">
          <div class="border-stroke flex flex-wrap justify-between border-b px-6 pt-5">
            <h3 class="mb-5 mr-4 text-xl font-medium text-black">{{ msg.title }}</h3>
            <div class="mb-5 flex items-center space-x-4">
              <p class="text-base font-medium text-black">@{{ msg.author.username }}</p>
              <a @click="deleteMsg(msg.id)" class="bg-primary rounded px-6 py-1 text-base font-medium text-white hover:bg-opacity-90"> DELETE </a>
            </div>
          </div>
          <div class="px-6 pt-5">
            <p class="text-body-color mb-5 text-base">{{ msg.content }}</p>
            <div class="flex flex-wrap">
              <p class="mb-5 mr-5 flex items-center">
                <span class="pr-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                </span>
                <a href="javascript:void(0)" class="text-body-color text-base"> {{ msg.date }} </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Over :show="addForm">
            <DialogPanel class="pointer-events-auto relative w-screen max-w-4xl">
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
                    <DialogTitle class="text-base font-semibold leading-6 text-gray-900">New Message</DialogTitle>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <div class="my-4">
                        <div class="w-full mt-4">
                            <label class="text-xs text-gray-600">Title</label>
                            <input v-model="newMessage.title" type="text" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Title">
                        </div>
                        <div class="w-full mt-4">
                            <label class="text-xs text-gray-600">Message</label>
                            <textarea v-model="newMessage.content" rows="10" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Username"></textarea>
                        </div>
                        <p class="text-rose-500 my-4" v-if="newMessage.error">{{ newMessage.error }}</p>
                        <div class="w-full mt-4">
                            <button @click="saveMessage" class="bg-primary inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90">Save message</button>
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
definePageMeta({
    layout: 'dashboard'
})
const Api = useApi()
const messages = ref('')
async function getMessages(){
    const response = await Api.get('/api/dash/message')
    messages.value = response.data
}
getMessages()


const addForm = ref(false) 
const newMessage = ref({
        title: '',
        content: '',
    })

async function saveMessage(){
    console.log(newMessage.value)
    const response = await Api.post('/api/dash/messages', newMessage.value)
    getMessages()
    addForm.value = false
}

async function deleteMsg(id){
    const response = await Api.get('/api/dash/message?delete='+id)
    messages.value = response.data
}

</script>

<style scoped>
</style>