<template>
    <section>
        <div class="max-w-[1536px] mx-auto py-[75px]">
           <div>
            
           </div>
        </div>
    </section>
</template>
<script setup>
import { ref , onMounted } from 'vue';
import { useFetchCategory } from '../../composables/useFetchCategory'

const defaultCategory = 'beauty'

const { categories , loading , error , fetchCategories} = useFetchCategory()

onMounted(()=>{
    fetchCategories(defaultCategory)
})
</script>