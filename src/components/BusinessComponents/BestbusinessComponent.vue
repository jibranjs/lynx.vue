<template>
<section class="bg-[#FFEEFD]">
    <div class="max-w-[1536px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 py-[75px] items-center justify-center px-6">
            <div> 
                <img src="/src/assets/images/our-services-image.avif" alt="" class="w-full rounded">
            </div>
            <div>
                <BasicHeading>The best business taxi company in Manchester</BasicHeading>
                <p v-for="para in paragraphs" class="mb-6 text-lg">{{ para }}</p>
               <div class="flex gap-4">
                 <Buttons class="bg-[#10B981] hover:bg-[#059669] flex items-center text-white"><Icon icon="mdi:phone" width="28" height="28" class="pr-2 align-sub text-white"></Icon>01625 43 43 43</Buttons>
                <Buttons Buttons class="flex items-center border border-[#10B981]" text="txpink"><Icon icon="mdi:phone" width="28" height="28" class="pr-2 align-sub text-[#FD04B1]"></Icon>0161 480 5000</Buttons>
               </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import BasicHeading from '../GlobalComponents/BasicHeading.vue';
import Buttons from '../GlobalComponents/Buttons.vue';

const paragraphs = [
    'A trusted corporate taxi company should be known for their effective service and reliability, right? Well, that’s exactly what you can expect from Lynx Taxis.',
    'We work hard to uphold our glowing reputation – earnt over the last 30 years – and promise to always get you where you need to be as quickly as possible, even in the busy and bustling landscape of a city-centre environment.',
    'With flexible booking and convenience at the heart of what we do. Simply get in touch with an operator and one of our drivers will pick you up as soon as you need us – always on time to get you where you need to be.',
    'Not only are our corporate cab services a dependable option, but we also offer an exceptional level of customer service to make passengers feel comfortable and welcome at all times. We appreciate that the last thing you want to experience on the way to an important business trip is an uncomfortable journey! In our cabs, just sit back, relax and prepare yourself for the time ahead.'
]

</script>