<template>
    <section>
        <div class="max-w-[1536px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 py-[45px] justify-center items-center">
                <div>
                    <img src="/src/assets/images/download-app-image.png" alt="download image">
                </div>
                <div class="lg:ml-12">
                    <BasicHeading size="xl">Download Our App</BasicHeading>
                    <p class="text-lg mt-4">{{ para }}</p>
                    <ul class="mt-4">
                        <li v-for="list in lists" class="mb-3 hover:underline flex gap-2 items-center text-lg"><Icon icon="lets-icons:check-fill" width="24" height="24"  style="color: #FD04B1"></Icon>{{ list }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BasicHeading from '../GlobalComponents/BasicHeading.vue';

const para = "Never wait for a taxi again! Get the Lynx Taxis app for instant bookings and real-time tracking."

const lists = [
    'Instant booking',
    'Real-time driver tracking',
    'Fare estimates',
    'Ride history'
]
</script>