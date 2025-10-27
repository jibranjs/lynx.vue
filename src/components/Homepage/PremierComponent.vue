<template>
    <!--Section-->
    <section class="max-w-[1536px] mx-auto flex flex-col py-12 lg:py-20 lg:flex-row items-center gap-20">
        <!--Left Column-->
        <div class="w-full lg:w-1/2">
            <img :src="image" :alt="imageAlt">
            </img>
        </div>
        <!--Right Column-->
        <div class="w-full lg:w-1/2">
            <h1 class="text-4xl font-bold mb-4 w-1/2">{{ heading }}</h1>
            <p v-html="paragraph" class="mb-3 text-lg"></p>
            <ul class="list-disc space-y-4 lg:ml-5">
                <li v-for="list in lists" v-html="list">
                </li>
            </ul>
            <button class="text-white bg-[#FD04B1] py-2 px-3 rounded mt-8">LEARN MORE</button>
        </div>
    </section>
</template>

<script setup>

const image =  "/src/assets/images/premier-service.png"
const heading = "Stockport's Premier Taxi Service"
const paragraph =  "At Lynx Taxis, we've been Stockport's leading taxi service since 1988. Our commitment to excellence means you can always count on:"


const lists = [
    `<strong>Punctuality:</strong> Reliable service throughout Stockport`,
    `<strong>Comfort:</strong> Modern, well-maintained vehicles`,
    `<strong>Professionalism:</strong> Experienced local dirvers`,
    `<strong>Affordability:</strong> Competitive rates in stockport`
]

</script>