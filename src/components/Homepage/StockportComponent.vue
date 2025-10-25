<template>
    <section>
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12 lg:py-[75px] justify-center items-center">
                <div>
                    <img src="/src/assets/images/stockport.png" alt="stockport image">
                </div>
                <div>
                    <h2>{{ heading }}</h2>
                    <p>{{ para }}</p>
                    <div v-for="list in lists" class="flex mb-3 gap-3 bg-[#FFEEFD] py-3 px-4">
                        <img :src="list.image" :alt="list.title" class="bg-[#FD04B1] p-4 rounded-full">
                        <div class="flex flex-col">
                            <h2 class="text-lg font-bold">{{ list.heading }}</h2>
                            <p class="textsm">{{ list.para }}</p>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const heading = "Stockport Taxi Services"
const para ="Comprehensive taxi services in Stockport including airport transfers, local journeys, and corporate accounts."

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