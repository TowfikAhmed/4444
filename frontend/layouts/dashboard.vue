<template>
<section class="flex bg-white w-full">
    <section class="h-screen bg-white w-[280px]">
        <div class="bg-primary shadow-card flex h-screen w-full max-w-[280px] flex-col justify-between overflow-y-scroll">
            <div>
                <div class="px-10 pt-10 pb-9">
                    <nuxt-link to="/">
                        <h4 class="text-white text-xl w-full text-center font-bold">4444</h4>
                    </nuxt-link>
                </div>
                <nav class="px-6" v-if="user && user.user">
                    <ul v-if="user.user.type=='WORKER'">
                        <li>
                            <nuxt-link to="/dashboard/getbanks" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H7.5C7.91421 1.5 8.25 1.83579 8.25 2.25V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25ZM3 3V6.75H6.75V3H3Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H10.5C10.0858 8.25 9.75 7.91421 9.75 7.5V2.25ZM11.25 3V6.75H15V3H11.25Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5ZM11.25 11.25V15H15V11.25H11.25Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10.5C1.5 10.0858 1.83579 9.75 2.25 9.75H7.5C7.91421 9.75 8.25 10.0858 8.25 10.5V15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H2.25C1.83579 16.5 1.5 16.1642 1.5 15.75V10.5ZM3 11.25V15H6.75V11.25H3Z" />
                                    </svg>
                                </span>
                                Dashboard
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dashboard/history" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6877 1.82327C6.85337 2.20291 6.67991 2.64497 6.30027 2.81064C5.28972 3.25163 4.40257 3.93345 3.7164 4.79651C3.03023 5.65956 2.56593 6.67756 2.36408 7.76151C2.16223 8.84546 2.22898 9.96236 2.5585 11.0146C2.88802 12.0667 3.47028 13.0222 4.25436 13.7974C5.03844 14.5726 6.00048 15.1439 7.05637 15.4613C8.11226 15.7788 9.22984 15.8328 10.3114 15.6186C11.393 15.4044 12.4056 14.9285 13.2608 14.2325C14.116 13.5365 14.7876 12.6417 15.217 11.6261C15.3783 11.2446 15.8184 11.0661 16.1999 11.2275C16.5814 11.3888 16.7599 11.8288 16.5986 12.2103C16.0737 13.4515 15.2528 14.5453 14.2076 15.3959C13.1624 16.2466 11.9248 16.8282 10.6028 17.09C9.28092 17.3518 7.91498 17.2859 6.62445 16.8978C5.33393 16.5098 4.1581 15.8115 3.19977 14.8641C2.24145 13.9166 1.5298 12.7489 1.12706 11.4628C0.724309 10.1768 0.642721 8.81174 0.889426 7.48691C1.13613 6.16208 1.70362 4.91786 2.54227 3.86301C3.38092 2.80817 4.46521 1.97482 5.70033 1.43584C6.07997 1.27017 6.52203 1.44363 6.6877 1.82327Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 0.96967C8.61032 0.829018 8.80109 0.75 9 0.75C10.0834 0.75 11.1562 0.963393 12.1571 1.37799C13.1581 1.7926 14.0675 2.40029 14.8336 3.16637C15.5997 3.93245 16.2074 4.84192 16.622 5.84286C17.0366 6.8438 17.25 7.91659 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H9C8.58579 9.75 8.25 9.41421 8.25 9V1.5C8.25 1.30109 8.32902 1.11032 8.46967 0.96967ZM9.75 2.2918V8.25H15.7082C15.6379 7.62106 15.4793 7.00387 15.2362 6.41689C14.897 5.59794 14.3998 4.85382 13.773 4.22703C13.1462 3.60023 12.4021 3.10303 11.5831 2.76381C10.9961 2.52068 10.3789 2.36211 9.75 2.2918Z" />
                                    </svg>
                                </span>
                                Bank Accounts
                            </nuxt-link>
                        </li>

                        <li>
                            <a href="javascript:void(0)" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.90901 1.40901C3.33097 0.987053 3.90326 0.75 4.5 0.75H10.5C10.6989 0.75 10.8897 0.829018 11.0303 0.96967L15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6V15C15.75 15.5967 15.5129 16.169 15.091 16.591C14.669 17.0129 14.0967 17.25 13.5 17.25H4.5C3.90326 17.25 3.33097 17.0129 2.90901 16.591C2.48705 16.169 2.25 15.5967 2.25 15V3C2.25 2.40326 2.48705 1.83097 2.90901 1.40901ZM4.5 2.25C4.30109 2.25 4.11032 2.32902 3.96967 2.46967C3.82902 2.61032 3.75 2.80109 3.75 3V15C3.75 15.1989 3.82902 15.3897 3.96967 15.5303C4.11032 15.671 4.30109 15.75 4.5 15.75H13.5C13.6989 15.75 13.8897 15.671 14.0303 15.5303C14.171 15.3897 14.25 15.1989 14.25 15V6.31066L10.1893 2.25H4.5Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0.75C10.9142 0.75 11.25 1.08579 11.25 1.5V5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H10.5C10.0858 6.75 9.75 6.41421 9.75 6V1.5C9.75 1.08579 10.0858 0.75 10.5 0.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 9.75C5.25 9.33579 5.58579 9 6 9H12C12.4142 9 12.75 9.33579 12.75 9.75C12.75 10.1642 12.4142 10.5 12 10.5H6C5.58579 10.5 5.25 10.1642 5.25 9.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 12.75C5.25 12.3358 5.58579 12 6 12H12C12.4142 12 12.75 12.3358 12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5H6C5.58579 13.5 5.25 13.1642 5.25 12.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 6.75C5.25 6.33579 5.58579 6 6 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75C8.25 7.16421 7.91421 7.5 7.5 7.5H6C5.58579 7.5 5.25 7.16421 5.25 6.75Z" />
                                    </svg>
                                </span>
                                Documents/Notes
                            </a>
                        </li>
                        <li>
                            <div class="bg-stroke mx-4 my-3 h-[1px] bg-opacity-20"></div>
                        </li>

                        <li>
                            <a @click="logoutUser()" class="relative cursor-pointer mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H6.75C7.16421 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.16421 3 6.75 3H3.75Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803C11.1768 12.9874 11.1768 12.5126 11.4697 12.2197L14.6893 9L11.4697 5.78033C11.1768 5.48744 11.1768 5.01256 11.4697 4.71967Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Log out
                            </a>
                        </li>
                    </ul>
                    <ul v-if="user.user.type=='ADMIN'">
                        <li>
                            <a href="javascript:void(0)" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H7.5C7.91421 1.5 8.25 1.83579 8.25 2.25V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25ZM3 3V6.75H6.75V3H3Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H10.5C10.0858 8.25 9.75 7.91421 9.75 7.5V2.25ZM11.25 3V6.75H15V3H11.25Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5ZM11.25 11.25V15H15V11.25H11.25Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10.5C1.5 10.0858 1.83579 9.75 2.25 9.75H7.5C7.91421 9.75 8.25 10.0858 8.25 10.5V15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H2.25C1.83579 16.5 1.5 16.1642 1.5 15.75V10.5ZM3 11.25V15H6.75V11.25H3Z" />
                                    </svg>
                                </span>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <nuxt-link to="/dashboard/banks" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6877 1.82327C6.85337 2.20291 6.67991 2.64497 6.30027 2.81064C5.28972 3.25163 4.40257 3.93345 3.7164 4.79651C3.03023 5.65956 2.56593 6.67756 2.36408 7.76151C2.16223 8.84546 2.22898 9.96236 2.5585 11.0146C2.88802 12.0667 3.47028 13.0222 4.25436 13.7974C5.03844 14.5726 6.00048 15.1439 7.05637 15.4613C8.11226 15.7788 9.22984 15.8328 10.3114 15.6186C11.393 15.4044 12.4056 14.9285 13.2608 14.2325C14.116 13.5365 14.7876 12.6417 15.217 11.6261C15.3783 11.2446 15.8184 11.0661 16.1999 11.2275C16.5814 11.3888 16.7599 11.8288 16.5986 12.2103C16.0737 13.4515 15.2528 14.5453 14.2076 15.3959C13.1624 16.2466 11.9248 16.8282 10.6028 17.09C9.28092 17.3518 7.91498 17.2859 6.62445 16.8978C5.33393 16.5098 4.1581 15.8115 3.19977 14.8641C2.24145 13.9166 1.5298 12.7489 1.12706 11.4628C0.724309 10.1768 0.642721 8.81174 0.889426 7.48691C1.13613 6.16208 1.70362 4.91786 2.54227 3.86301C3.38092 2.80817 4.46521 1.97482 5.70033 1.43584C6.07997 1.27017 6.52203 1.44363 6.6877 1.82327Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 0.96967C8.61032 0.829018 8.80109 0.75 9 0.75C10.0834 0.75 11.1562 0.963393 12.1571 1.37799C13.1581 1.7926 14.0675 2.40029 14.8336 3.16637C15.5997 3.93245 16.2074 4.84192 16.622 5.84286C17.0366 6.8438 17.25 7.91659 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H9C8.58579 9.75 8.25 9.41421 8.25 9V1.5C8.25 1.30109 8.32902 1.11032 8.46967 0.96967ZM9.75 2.2918V8.25H15.7082C15.6379 7.62106 15.4793 7.00387 15.2362 6.41689C14.897 5.59794 14.3998 4.85382 13.773 4.22703C13.1462 3.60023 12.4021 3.10303 11.5831 2.76381C10.9961 2.52068 10.3789 2.36211 9.75 2.2918Z" />
                                    </svg>
                                </span>
                                Bank Accounts
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dashboard/workers" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg class="opacity-80" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#c2cdf2" stroke-width="2" d="M3 6h18H3Zm7-4v2m4-2v2m2 8c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 4.5V23m0-10a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm-4-1a4 4 0 1 0 8 0" /></svg>
                                </span>
                                Workers
                            </nuxt-link>
                        </li>

                        <li>
                            <a href="javascript:void(0)" class="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.90901 1.40901C3.33097 0.987053 3.90326 0.75 4.5 0.75H10.5C10.6989 0.75 10.8897 0.829018 11.0303 0.96967L15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6V15C15.75 15.5967 15.5129 16.169 15.091 16.591C14.669 17.0129 14.0967 17.25 13.5 17.25H4.5C3.90326 17.25 3.33097 17.0129 2.90901 16.591C2.48705 16.169 2.25 15.5967 2.25 15V3C2.25 2.40326 2.48705 1.83097 2.90901 1.40901ZM4.5 2.25C4.30109 2.25 4.11032 2.32902 3.96967 2.46967C3.82902 2.61032 3.75 2.80109 3.75 3V15C3.75 15.1989 3.82902 15.3897 3.96967 15.5303C4.11032 15.671 4.30109 15.75 4.5 15.75H13.5C13.6989 15.75 13.8897 15.671 14.0303 15.5303C14.171 15.3897 14.25 15.1989 14.25 15V6.31066L10.1893 2.25H4.5Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0.75C10.9142 0.75 11.25 1.08579 11.25 1.5V5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H10.5C10.0858 6.75 9.75 6.41421 9.75 6V1.5C9.75 1.08579 10.0858 0.75 10.5 0.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 9.75C5.25 9.33579 5.58579 9 6 9H12C12.4142 9 12.75 9.33579 12.75 9.75C12.75 10.1642 12.4142 10.5 12 10.5H6C5.58579 10.5 5.25 10.1642 5.25 9.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 12.75C5.25 12.3358 5.58579 12 6 12H12C12.4142 12 12.75 12.3358 12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5H6C5.58579 13.5 5.25 13.1642 5.25 12.75Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 6.75C5.25 6.33579 5.58579 6 6 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75C8.25 7.16421 7.91421 7.5 7.5 7.5H6C5.58579 7.5 5.25 7.16421 5.25 6.75Z" />
                                    </svg>
                                </span>
                                Documents/Notes
                            </a>
                        </li>
                        <li>
                            <div class="bg-stroke mx-4 my-3 h-[1px] bg-opacity-20"></div>
                        </li>

                        <li>
                            <a @click="logoutUser()" class="relative cursor-pointer mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-white text-opacity-50 duration-200 hover:bg-white hover:bg-opacity-[15%] hover:text-opacity-100">
                                <span class="pr-[10px]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H6.75C7.16421 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.16421 3 6.75 3H3.75Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803C11.1768 12.9874 11.1768 12.5126 11.4697 12.2197L14.6893 9L11.4697 5.78033C11.1768 5.48744 11.1768 5.01256 11.4697 4.71967Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Log out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="py-10 px-6">
                <div class="flex items-center">
                    <div class="mr-4 h-[50px] w-full max-w-[50px] rounded-full">
                        <img src="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg" alt="profile" class="h-full w-full rounded-full object-cover object-center" />
                    </div>
                    <div>
                        <h6 class="text-base font-medium text-white text-opacity-80">Musharof</h6>
                        <p class="text-sm text-white text-opacity-50">hello@tailgrids.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <slot />
</section>
</template>

<script setup>
const {
    login,
    jwtLogin,
    logout,
    user,
    isAuthenticated
} = useAuth()

const logoutUser = () => {
    logout()
    navigateTo('/')
}
</script>

<style scoped>
    .router-link-active{
        background-color: rgba(255, 255, 255, 0.15);
    }
</style>
