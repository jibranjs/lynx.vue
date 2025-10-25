<template>
    <section class="bg-[#FFEEFD]">
        <div class="max-w-[1536px] mx-auto py-12 lg:py-[75px]">
            <h2 class="text-center font-bold text-3xl">{{ mainHeading }}</h2>
            <p class="text-center w-1/2 mx-auto mt-2 mb-6">{{ paragraph }}</p>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                <div v-for="cartype in cartypes" class="bg-white hover:bg-[#FD04B1] hover:text-white hover:shadow-2xl mt-4 py-6 px-4 rounded-[20px] border border-[#FD04B1]">
                    <h2 class="text-2xl text-center font-bold">{{ cartype.title }}</h2>
                    <p class="text-center">{{ cartype.paragraph }}</p>
                    <img :src="cartype.image" :alt="cartype.title" class="w-[286px] mx-auto mt-4">
                 
                </div>
                
            </div>
        </div>
    </section>
</template>
<script setup>
const mainHeading = "Our Stockport Taxi Fleet"
const paragraph = "At Lynx Taxis, we maintain a diverse fleet to serve all of Stockport's transportation needs.Every vehicle in our fleet is fully licensed and undergoes regular MOT checks.Our professional drivers know Stockport's streets inside out, ensuring you'll always reach your destination on time."

const cartypes = [
    {
        title: "Saloon Cars",
        paragraph:"Comfortable 4-Seater taxis ideal for local Stockport journeys.",
        image:"/src/assets/images/saloon.png"
    },
    {
        title: "Estate Cars",
        paragraph:"Perfect for Airport runs and shopping trips with large luggage space.",
        image:"/src/assets/images/estate.png"
    }, 
    {
        title: "MPV Cars",
        paragraph:"Spacious option for up to 8 passengers with luggage.",
        image:"/src/assets/images/mpv.png"
    }, 
    {
        title: "Mini Bus",
        paragraph:"Ideal for large groups up to 16 passengers Not Recommended For Long Route.",
        image:"/src/assets/images/minibus.png"
    }

]
</script>