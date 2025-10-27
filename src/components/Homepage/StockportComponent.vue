<template>
    <section>
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 py-12 lg:py-[75px] justify-center items-center">
                <div>
                    <img src="/src/assets/images/stockport.png" alt="stockport image">
                </div>
                <div>
                    <BasicHeading>{{ heading }}</BasicHeading>
                    <p class="text-lg mb-6">{{ para }}</p>
                    <div v-for="list in lists" class="flex mb-3 gap-3 bg-[#FFEEFD] py-3 px-4">
                        <img :src="list.image" :alt="list.title" class="bg-[#FD04B1] p-4 rounded-full">
                        <div class="flex flex-col">
                            <h2 class="text-lg font-bold">{{ list.heading }}</h2>
                            <p>{{ list.para }}</p>
                        </div>
                    </div>
                    <div class="flex gap-6 mt-8">
                        <Buttons bg="pink" text="txwhite">EXPLORE SERVICES</Buttons>
                        <Buttons border="bordered" text="txpink">BOOK A RIDE</Buttons>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BasicHeading from '../GlobalComponents/BasicHeading.vue';
import Buttons from '../GlobalComponents/Buttons.vue';

const heading = "Stockport Taxi Services"
const para = "Comprehensive taxi services in Stockport including airport transfers, local journeys, and corporate accounts."

const lists = [
    {
        image: "/src/assets/images/plane.png",
        heading: "Airport Transfers",
        para: "Fixed-price airport taxis from Stockport with flight monitoring."
    },
    {
        image: "/src/assets/images/carlist.png",
        heading: "Local Joourneys",
        para: "Reliable taxi service throughout Stockport and surroundings."
    },
    {
        image: "/src/assets/images/train.png",
        heading: "Group Travel",
        para: "Group transport solutions in and around  Stockport."
    },
]

</script>