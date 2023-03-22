<template>
    
        <section class="p-6 w-4/5">
        
            <section class="bg-white py-6 ">
                <div class="flex items-center justify-between pb-8">
                    <h3 class="text-2xl font-bold text-slate-700 my-4">Get Accounts List</h3>
                    <a
                        class="bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded  px-6 text-center  font-normal text-white hover:bg-opacity-90"
                        >
                        Filter
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
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Status</th>
                                    <th class="w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white">Transaction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="account in accounts.results" :key="account.id">
                                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] h-16 px-2 text-center text-base font-medium">{{ account.account }}</td>
                                    <td class="text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium">{{ account.routing }}</td>
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
                                        <span @click="addProof=account" class="text-sm">+ Add Proof</span>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </section>

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
            <Modal v-if="addProof">
                <div class="bg-white">
                    <div class="sm:flex sm:items-start">
                        <div class="p-5">
                        <div @click="addProof = ''" class="mx-auto cursor-pointer flex h-12 w-12 p-2 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 sm:mx-0 sm:h-10 sm:w-10 text-white hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                        </div>
                        </div>
                        <div class="mt-3 border-l text-center sm:mt-0 sm:text-left w-full">
                            <h3 class="text-slate-100 p-4 bg-primary text-2xl">Add Proof</h3>
                            <div class="flex flex-1 flex-col justify-center p-5 w-full">
                            <div class="md:col-span-2 md:mt-0">
                                <p class="my-2">Account: {{ addProof.account }}</p>
                                <p class="my-2">Routing: {{ addProof.routing }}</p>
                                <div class="mb-1 max-w-sm mt-4">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                    <div class="flex gap-1">    
                                        <input v-model="newProof.amount" type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0.00" required>
                                        <div class="sh" v-if="!newProof.screenshot">
                                            <input @change="imageAdded(newProof)" type="file" class="hidden" :id="newProof.id" />
                                            <label :for="newProof.id" class="flex-1 h-10 flex gap-1 justify-center items-center border text-sm p-3 rounded text-slate-400 cursor-pointer shadow hover:shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 576q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45zm640 960v128h-256v256h-128v-256h-256v-128h256v-256h128v256h256zM922 1216l358 357v91H0V256h1792v896h-128V384H128v421l192-191l512 512l256-256l448 447v91h-91l-357-358l-166 166zM320 794L128 987v549h933L320 794z"></path></svg>
                                                <p class="text-sm text-gray-500 whitespace-nowrap">Add Screenshot</p>
                                            </label>
                                        </div>
                                        <div class="sh" v-else>
                                            <img  class="h-10 shadow border object-cover rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-end my-4 gap-1">
                                <button class="bg-primary text-white px-4 py-2 rounded out">Submit Proof</button>
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

const viewProof = ref('')
const destroyProof = async(id)=>{
    const response = await Api.del('/api/dash/proofs/'+id+'/delete')
    console.log(response);
    getAccounts()
}
const addProof = ref('')
const newProof = ref({
    amount: '',
    sc: '',
})
const addProofs = async(id)=>{
    const response = await Api.post('/api/dash/proofs/'+id+'/add')
    console.log(response);
    getAccounts()
}
</script>

<style>
    .bg-primary{
        background-color: #3057d3;
    }
</style>
