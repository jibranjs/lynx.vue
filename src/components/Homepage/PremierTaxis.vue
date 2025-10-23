<template>
    <!--Section-->
    <section class="max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center gap-4">
        <!--Left Column-->
        <div class="w-full lg:w-1/2">
            <img :src="image" :alt="imageAlt">
            </img>
        </div>
        <!--Right Column-->
        <div class="w-full lg:w-1/2">            
            <h1 class="text-4xl font-bold mb-4">{{ heading }}</h1>
            <p v-html="paragraph" class="mb-3"></p>
            <ul class="list-disc space-y-4 lg:ml-5">
                <li v-for="list in lists" v-html="list" class="">
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
defineProps({
    image: String,
    imageAlt: String,
    heading: String,
    paragraph: String,
    lists: Array,
})
</script>