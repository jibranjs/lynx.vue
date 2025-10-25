<template>
    <section class="max-w-[1536px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 py-12 lg:py-20">
            <div>
                <h2 class="text-center text-3xl font-bold">{{ mainHeading }}</h2>
                <p class="text-lg font-light text-center my-2">{{ subtitle }}</p>
                <div class="flex flex-wrap gap-4 justify-center items-center">
                    <img v-for="logo in logos" :src="logo" alt="Logos" class="w-[136px]"></img>
                </div>
            </div>
            <div>
                <h2 class="text-2xl text-center font-bold">Best In Stockport Award Since 2022</h2>
                <div class="flex justify-center ">
                    <img src="/src/assets/images/badge.png" alt="" class="w-30">
                    <img src="/src/assets/images/badge.png" alt=" " class="w-30">
                    <img src="/src/assets/images/badge.png" alt="" class="w-30">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const mainHeading = "Trusted by Stockport Businesses"
const subtitle = "Providing reliable corporate taxi services to leading businesses in Stockport and surrounding areas."

const logos = [
    "../src/assets/logos/logo1.webp",
    "../src/assets/logos/logo2.webp",
    "../src/assets/logos/logo3.webp",
    "../src/assets/logos/logo4.webp",
    "../src/assets/logos/logo5.webp",
    "../src/assets/logos/logo6.webp",
    "../src/assets/logos/logo7.webp",
    "../src/assets/logos/logo8.webp",
    "../src/assets/logos/logo9.webp",
    "../src/assets/logos/logo10.webp",
]
</script>