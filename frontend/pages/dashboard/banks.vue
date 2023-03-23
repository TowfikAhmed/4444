<template>
    
        <section class="p-6 w-4/5">
        
            <section class="bg-white py-6 ">
                <div class="flex items-center justify-between pb-8">
                    <h3 class="text-2xl font-bold text-slate-700 my-4">Accounts List</h3>
                    <a
                        @click="addForm=true"
                        class="bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded  px-6 text-center  font-normal text-white hover:bg-opacity-90"
                        >
                        + Add account 
                    </a>
                </div>
                <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="max-w-full overflow-x-auto" v-if="accounts && accounts.results">
                            <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-primary text-center">
                                    <th class="w-1/6 min-w-[160px] border-l border-transparent py-3 px-3 text-lg font-semibold text-white">Account</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Routing</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Group</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Status</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Proof</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="account in accounts.results" :key="account.id">
                                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] h-16 px-2 text-center text-base font-medium">{{ account.account }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium">{{ account.routing }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium">{{ account.group.name }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium">
                                        <span class="text-indigo-500 font-bold" v-if="account.status == 'COMPLETED'">{{ account.status }}</span>
                                        <span class="text-pink-500 font-bold" v-else-if="account.status == 'PENDING'">{{ account.status }}</span>
                                        <span class="text-lime-500 font-bold" v-else>{{ account.status }}</span>
                                    </td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white py-0 px-2 text-center text-base font-medium cursor-pointer">
                                        <div class="w-full my-1 text-left flex items-center justify-between" v-for="proof in account.proof_set" :key="proof.id">
                                            <span class="flex-1">${{ proof.amount }}</span>
                                            <span @click="viewProof=proof" class="flex-1 text-sm text-indigo-400 border p-1 rounded text-center bg-gray-50">See Proof</span>
                                            <span @click="destroyProof(proof.id)" class="px-1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg></span>
                                        </div>
                                    </td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 text-center text-base font-medium">
                                        <div class="flex gap-1 w-full flex-wrap">
                                            <a @click="destroyAccount(account.id)" class="bg-primary cursor-pointer inline-flex items-center h-[30px] justify-center rounded px-4 text-center font-normal text-white hover:bg-opacity-90">Delete</a>
                                            <a v-if="account.status == 'PENDING'" @click="approveAccount(account.id)" class="bg-primary cursor-pointer inline-flex items-center h-[30px] justify-center rounded px-4 text-center font-normal text-white hover:bg-opacity-90">Approve</a>
                                        </div>
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
                        <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Add account</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <div class="my-4">
                            <select v-model="newAccount.group" class="w-full border border-gray-200 p-2 rounded mt-1">
                                <option value="">Select Group</option>
                                <option v-for="group in groups.results" :value="group.id">{{ group.name }}</option>
                            </select>
                            <div class="w-full mt-4">
                                <label class="text-xs text-gray-600">Username</label>
                                <textarea v-model="newAccount.accounts" rows="10" class="w-full border border-gray-200 p-2 rounded mt-1" placeholder="Username"></textarea>
                            </div>
                            <p class="text-rose-500 my-4" v-if="newAccount.error">{{ newAccount.error }}</p>
                            <div class="w-full mt-4">
                                <button @click="createAccount" class="bg-primary inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90">Add accounts</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
            </Over>
            <Modal v-if="viewProof">
                <div class="bg-white">
                    <div class="sm:flex sm:items-start">
                        <div class="p-5">
                        <div @click="viewProof = ''" class="mx-auto cursor-pointer flex h-12 w-12 p-2 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 sm:mx-0 sm:h-10 sm:w-10 text-white hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                        </div>
                        </div>
                        <div class="mt-3 border-l text-center sm:mt-0 sm:text-left w-full">
                            <h3 class="text-slate-100 p-4 bg-primary text-2xl">Proof Details</h3>
                            <div class="flex flex-1 flex-col justify-center p-5 w-full">
                            <div class="md:col-span-2 md:mt-0">
                                <p class="my-2">Amount: {{ viewProof.amount }}</p>
                                <p class="my-2">Status: {{ viewProof.status }}</p>
                                <img :src="Api.baseURL+viewProof.sc" alt="">
                                <img :src="Api.baseURL+viewProof.sc1" alt="">
                                <img :src="Api.baseURL+viewProof.sc2" alt="">
                                <img :src="Api.baseURL+viewProof.sc3" alt="">
                            </div>
                            <div class="flex justify-end my-4 gap-1">
                                <button class="bg-primary text-white px-4 py-2 rounded out">Save Changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
const Api = useApi()
definePageMeta({
    layout: 'dashboard'
})
const accounts = ref('ss')
const getAccounts = async () => {
    const response = await Api.get('/api/dash/banks')
    accounts.value = response.data
}
getAccounts()
const destroyAccount = async (id) =>{
    const response = await Api.del('/api/dash/banks/'+id+'/delete')
    console.log(response);
    getAccounts()
} 

const addForm = ref(false) 
const newAccount = ref({
    group: '',
    accounts: '',
    error: ''
})
const createAccount = async () => {
    if( !newAccount.value.accounts || !newAccount.value.group){
        newAccount.value.error = 'Please fill all fields'
        return
    }
    newAccount.value.error = ''
    const response = await Api.post('/api/dash/banks/create', newAccount.value)
    console.log(response);
    getAccounts()
    addForm.value = false
}
const approveAccount = async(id)=>{
    const response = await Api.get('/api/dash/banks?approve='+id)
    accounts.value = response.data
}

const viewProof = ref('')
const destroyProof = async(id)=>{
    const response = await Api.del('/api/dash/proofs/'+id+'/delete')
    console.log(response);
    getAccounts()
}

const groups = ref([])
const getGroups = async () => {
    const response = await Api.get('/api/dash/groups')
    groups.value = response.data
}
getGroups()

</script>

<style>
    .bg-primary{
        background-color: #3057d3;
    }
</style>
