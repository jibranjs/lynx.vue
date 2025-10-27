<template>
    <section>
        <div class="max-w-[1536px] mx-auto py-[75px]">
            <h2 class="text-[#EB6F25] font-semibold text-center mb-3">EXPLORE THE AWESOME</h2>
            <h1 class="text-4xl font-bold text-center mb-5">Various Products</h1>
            <div class="flex gap-6 justify-center items-center mb-5">
                <button 
                    @click="changeCategory('smartphones')" 
                    :class="activeCategory === 'smartphones' ? 'bg-[#EB6F25] text-white' : 'bg-gray-200'"
                    class="px-6 py-2 rounded-full hover:bg-[#EB6F25] hover:text-white transition">
                    Smartphones
                </button>
                <button 
                    @click="changeCategory('fragrances')" 
                    :class="activeCategory === 'fragrances' ? 'bg-[#EB6F25] text-white' : 'bg-gray-200'"
                    class="px-6 py-2 rounded-full hover:bg-[#EB6F25] hover:text-white transition">
                    Fragrances
                </button>
                <button 
                    @click="changeCategory('laptops')" 
                    :class="activeCategory === 'laptops' ? 'bg-[#EB6F25] text-white' : 'bg-gray-200'"
                    class="px-6 py-2 rounded-full hover:bg-[#EB6F25] hover:text-white transition">
                    Laptops
                </button>
            </div>

            <!-- Show loading message -->
            <div v-if="loading" class="text-center py-10">
                <p class="text-xl">Loading products...</p>
            </div>

            <!-- Show error message if there's an error -->
            <div v-else-if="error" class="text-center py-10">
                <p class="text-xl text-red-600">{{ error }}</p>
            </div>

            <!-- Show products -->
            <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-[45px]">
                <div v-for="product in products" :key="product.id" class="text-center bg-[#ccc] px-5 pb-8 rounded-lg">
                    <img :src='product.thumbnail' :alt="product.title" class="w-full h-48 object-cover rounded-t-lg mb-3">
                    <h2 class="text-xl font-semibold text-center">{{ product.title }}</h2>       
                    <p class="text-center text-lg mb-4 mx-auto">{{ product.description }}</p>            
                    <p class="text-lg font-semibold ml-3 text-center">${{ product.price }}</p>
                    <p class="bg-[#50A151] mx-auto text-center mt-2 w-[200px] text-white px-6 rounded-full">In Stock</p>
                    <button class="text-white bg-black w-[200px] mx-auto hover:shadow-xl text-center px-6 py-2 rounded-full mt-4">Add To Cart</button>
                </div>             
             </div>

        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useFetchProducts } from '../../composables/useFetchProducts'

// Use the composable
const { products, loading, error, fetchProducts } = useFetchProducts()

// Track active category
const activeCategory = ref('smartphones')

// Function to change category
const changeCategory = (category) => {
    activeCategory.value = category
    fetchProducts(category)
}

// Fetch smartphones when component is mounted
onMounted(() => {
    fetchProducts('smartphones')
})
</script>