<template>

<section class="flex-1 mt-12">
    <div class="max-w-4xl shadow-xl m-auto py-8 px-6 border rounded w-full">
        <button @click="generateAccount()" class="bg-primary max-w-sm mx-auto block text-center font-semibold text-xl border p-2 mb-8 rounded w-full text-slate-50">Generate Account</button>
        <div class="flex gap-2 mb-5" :class="{'cursor-none pointer-events-none opacity-30':!account}">
            <div class="mb-6 flex-1">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input :value="account.name" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
            <div class="mb-6 flex-1">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
              <input :value="account.account" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
            <div class="mb-6 flex-1">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Routing</label>
              <input :value="account.routing" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
        </div>
        <div class="proof" :class="{'cursor-none pointer-events-none opacity-30':!account}">
            <div class="mb-1 max-w-sm mt-4" v-for="proof in proofs" :key="proof.id">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <div class="flex gap-1">    
                    <input @keyup="setAmount(proof)" type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0.00" required>
                    <div class="sh" v-if="!proof.screenshot">
                        <input @change="imageAdded(proof)" type="file" class="hidden" :id="proof.id" />
                        <label :for="proof.id" class="flex-1 h-10 flex gap-1 justify-center items-center border text-sm p-3 rounded text-slate-400 cursor-pointer shadow hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 576q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45zm640 960v128h-256v256h-128v-256h-256v-128h256v-256h128v256h256zM922 1216l358 357v91H0V256h1792v896h-128V384H128v421l192-191l512 512l256-256l448 447v91h-91l-357-358l-166 166zM320 794L128 987v549h933L320 794z"></path></svg>
                            <p class="text-sm text-gray-500 whitespace-nowrap">Add Screenshot</p>
                        </label>
                    </div>
                    <div class="sh" v-else>
                        <img :src="proof.screenshot" class="h-10 shadow border object-cover rounded" />
                    </div>
                    <button class="px-2" @click="deleteProof(proof)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
                    </button>
                </div>
            </div>
            <p @click="addAnotherProof" class="text-indigo-800 text-sm mb-5 mt-2 cursor-pointer">+ Add Another</p>
            <button @click="submitProof" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Proof</button>
        </div>
    </div>

</section>
    
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
const Api = useApi()
definePageMeta({
    layout: 'dashboard'
})
const account = ref('')
const proofs = ref([
    {
        amount: '',
        screenshot: '',
        id: 'file' + Math.random().toString(36).substr(2, 9)
    }
])
const getAccount = async () => {
    const res = await Api.get('/api/dash/generate')
    account.value = res.data
    proofs.value = [
        {
            amount: '',
            screenshot: '',
            id: 'file' + Math.random().toString(36).substr(2, 9)
        }
    ]
}
getAccount()
const generateAccount = async () => {
    const res = await Api.get('/api/dash/generate?generate=true')
    account.value = res.data
    proofs.value = [
        {
            amount: '',
            screenshot: '',
            id: 'file' + Math.random().toString(36).substr(2, 9)
        }
    ]
}

function addAnotherProof() {
    proofs.value.push({
        amount: '',
        screenshot: '',
        id: 'file' + Math.random().toString(36).substr(2, 9)
    })
}
function deleteProof(proof){
    proofs.value = proofs.value.filter(p => p.id !== proof.id)
}
function imageAdded(proof) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        proof.screenshot = e.target.result
    }
    reader.readAsDataURL(file)
}

const submitProof = async()=>{
    const res = await Api.post('/api/dash/generate', {
        proofs: proofs.value,
        account: account.value
    })
    getAccount()
}

function setAmount(proof){
    proof.amount = event.target.value
}

</script>

<style>
    .bg-primary{
        background-color: #3057d3;
    }
</style>
