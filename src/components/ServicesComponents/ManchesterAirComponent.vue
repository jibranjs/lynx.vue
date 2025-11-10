<template>
<section>
    <div class="max-w-[1536px] mx-auto">
       <button @click="increament" class="bg-[#000] px-4 py-2 text-white font-bold my-5">{{ plus }}</button>
       <p>{{ count }}</p>
    </div>
</section>
</template>
<script setup>
import { ref } from 'vue'

const plus = '+';
const count = ref(0)

const increament = ()=>{
   count.value = count.value * 2
}


</script>