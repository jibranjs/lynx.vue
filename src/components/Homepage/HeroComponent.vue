<template>
    <section class="bg-[#FFEEFD]">
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:gap-12 items-center justify-center">
                <div>
                    <h2 class="text-xl lg:text-2xl font-semibold pb-2">{{ subHeading }}</h2>
                    <h1 class="text-xl lg:text-4xl pb-4 font-bold text-[#FD04B1] w-full lg:w-[650px]">{{ mainHeading }}</h1>
                    <p class="pb-4 lg:w-[650px] text-lg">{{ heroPara }}</p>
                    <div class="flex gap-4 mb-8">
                        <button class="bg-[#FD04B1] text-white py-2 px-3 rounded">
                            BOOK ONLINE
                        </button>
                        <button class="border border-[#FD04B1] py-2 px-3 text-[#FD04B1]">
                            CALL {{ Phone }}
                        </button>
                    </div>
                    <ul class="mb-8">
                        <li v-for="list in lists" class="flex gap-3 mb-2">
                            <Icon icon="material-symbols:check-box-rounded" width="24" height="24"></Icon>{{ list }}
                        </li>
                    </ul>

                    <!-- Google play -->
                   <div class="flex gap-4 my-4">
                     <div class="flex items-center gap-3 bg-white py-2 px-3 shadow-lg">
                        <img src="/src/assets/images/google.png" alt="google" class="w-[56px]" />
                        <div>
                            <h2>Google Play</h2>
                            <div class="flex">
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                            </div>
                        </div>
                    </div>

                    <!-- appstor -->
                      <div class="flex items-center gap-3 bg-white px-3 py-2 shadow-lg">
                        <img src="/src/assets/images/app.png" alt="appstore" class="w-[46px]"/>
                        <div>
                            <h2>App Store</h2>
                            <div class="flex">
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                                <Icon icon="ic:round-star" width="24" height="24" class="text-[#E5712A]"></Icon>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div>
                    <img src="/src/assets/images/hero.jpg" alt="heroimage" class="h-[800px]">
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import { Icon } from "@iconify/vue";

// Text
const subHeading = "Lynx Taxis - Stockport taxi service";
const mainHeading = "Local taxi and airport transfer specialists since 1988";
const heroPara =
    "Specializing in airport transfers and local journeys with fixed competitive rates. Convenient Online Booking, Mobile App, WhatsApp Booking, Phone Reservations, and 24/7 Customer Support.";
const Phone = "0161 480 0000";

// Arrays
const lists = [
    "Fixed Fare gurunteed",
    "24/7 Stockport taxi service",
    "Manchester Airport specialists",
];
</script>


<style scoped>
:deep(.p-accordionpanel){
    border:  1px solid pink !important;
}
:deep(.p-accordionheader){
    border: 1px solid pink !important;
    background-color: white;
    padding: 20px !important;
}
:deep(.p-accordioncontent-content){
    border: none !important;
}
</style>