<template>
    <section class="bg-[#FFEEFD]">
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 py-[75px] px-6">
                <div>
                   <BasicHeading size="lg">Drive For Us</BasicHeading>
                   <BasicHeading size="xl">Join the Lynx Family!</BasicHeading>
                   <p class="text-[#333] pb-3 text-lg">{{ para }}</p>
                   <div class="flex gap-4 mt-2">
                    <Buttons bg="pink" text="txwhite">APPLY NOW</Buttons>
                    <Buttons border="bordered" text="txpink">LEARN MORE</Buttons>
                   </div>                   
                </div>
                <div>
                    <img src="/src/assets/images/drive-with-lynx.png" alt="drive wiht us">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BasicHeading from '../GlobalComponents/BasicHeading.vue';
import Buttons from '../GlobalComponents/Buttons.vue';

const para = "We're always looking for talented, professional drivers to become a key part of our dynamic and ever-growing team!"

</script>