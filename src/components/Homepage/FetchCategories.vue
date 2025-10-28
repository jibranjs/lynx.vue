<template>
    <section>
        <div class="max-w-[1536px] mx-auto py-[75px]">
        
            <h2 class="font-bold text-4xl text-center mb-3">Category List</h2>         
          
                <div v-if="loading" class="text-2xl font-semibold  text-center">
                Listing Categories ...
            </div>
            <div v-else-if="error" class="text-center text-2xl text-[#E9292B] font-bold">
                Failed To Load Categories
            </div>
              <div v-else v-for="category in categories" :key="category.slug" class="">
                <a href="#" class="mb-3 bg-[#ccc] px-4 py-2 rounded flex ">{{ category.name }}</a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref , onMounted} from 'vue'
import { useFetchCategories } from '../../composables/useFetchCategories';

const { categories , loading , error , fetchCategories} = useFetchCategories()

onMounted(() =>{
    fetchCategories()
})
</script>