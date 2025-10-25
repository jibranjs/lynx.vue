<template>
    <section class="bg-[#FFEEFD]">
        <div class="max-w-[1536px] mx-auto py-[75px]">            
                <h2 class="text-center text-3xl mb-5 font-bold">Why Choose Lynx Taxis in StockPOrt?</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 justify-center items-center mt-8 gap-6">
                    <div v-for="item in items" class="bg-white hover:bg-[#FD04B1] hover:text-white hover:shadow-2xl p-12 text-center flex flex-col justify-center items-center rounded-[20px] border border-[#FD04B1]">
                        <img :src="item.image" :alt="item.title" class="bg-[#FD04B1] p-4 rounded-full mb-4">
                        <h2 class="text-2xl font-bold">{{ item.title }}</h2>                      
                        <p>{{ item.discription }}</p>
                    </div>
                </div>            
        </div>
    </section>
</template>
<script setup>
const items = [
    {
        image:"/src/assets/images/peoplecheck.png",
        title: "Local Experience",
        discription: "35 years serving Stockport and surrounding arears."
    },
    {
        image:"/src/assets/images/car.png",
        title: "Reliability",
        discription: "Punctual service throughout Stockport."
    },
    {
        image:"/src/assets/images/shield.png",
        title: "Safety",
        discription: "Fully licensed and insured Stockport taxis."
    },
    {
        image:"/src/assets/images/comfort.png",
        title: "Comfort",
        discription: "Modern fleet serving Stockport."
    },
    {
        image:"/src/assets/images/building.png",
        title: "Convenience",
        discription: "Easy booking for Stockport residents."
    },
    {
        image:"/src/assets/images/pound.png",
        title: "Value",
        discription: "Competitive rates in Stockport."
    }
]

</script>