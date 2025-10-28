<template>
    <section class="bg-[url(/src/assets/images/homeBg.webp)] bg-cover">
        <div class="max-w-[1536px] mx-auto">
            <div class="flex justify-center item-center py-20">
                <BasicHeading color="white" class="text-5xl font-bold">Corporate Taxis</BasicHeading>
            </div>
        </div>
    </section>

    <section>
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-20 px-6 py-[75px]">
                <div>
                    <BasicHeading class="mb-4">Corporate Taxi Services</BasicHeading>
                    <p class="mb-5 text-lg">{{ para1 }}</p>
                    <p class="mb-5 text-lg">{{ para2 }}</p>
                    <p class="mb-5 text-lg">{{ para3 }}</p>
                    <Buttons bg="pink" text="txwhite">Book Now</Buttons>
                </div>
                <div>
                    <img src="/src/assets/images/corporate-taxi.jpg" alt="CorporateTaxi" class="w-full">
                </div>

            </div>
        </div>

    </section>
</template>
<script setup>
import BasicHeading from '../GlobalComponents/BasicHeading.vue';
import Buttons from '../GlobalComponents/Buttons.vue';

const para1 = "Travel regularly between meetings and appointments? Being late never looks good, so your business needs a local corporate taxi company it can rely on."

const para2 = "It may seem trivial, but the importance of finding reliable corporate taxi services shouldn’t be underestimated. Find a company you can trust and you needn’t use anyone else, as you can be assured that their drivers will always get you where you need to be, on time."

const para3 = "Here at Lynx Taxis, we have many years of experience transporting business people to where they need to be in and around the Manchester area. If you have an important meeting at the heart of the city centre, we’re the people to call upon. With our high-performance vehicles and dependable drivers, your search for a business taxi service is over."
</script>