<template>
    <section>
        <div class="max-w-[1536px] mx-auto py-[75px]">
            <h2 class="text-[#EB6F25] font-semibold text-center mb-3">EXPLORE THE AWESOME</h2>
            <h1 class="text-4xl font-bold text-center mb-5">Various Products</h1>
            <div class="flex gap-20 justify-center items-center">
                <a href="#" class="hover:text-[#EB6F25]">New Products</a>
                <a href="#" class="hover:text-[#EB6F25]">Best Selling</a>
                <a href="#"  class="hover:text-[#EB6F25]">Accessories</a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-[45px]">
                <div v-for="product in products" class="text-center bg-[#ccc] px-5 pb-8 rounded-lg">
                    <img :src='product.image' alt="product">
                    <h2 class="text-xl font-semibold text-center">{{product.title}}</h2>       
                    <p class="text-center text-lg w-[350px] mb-4 mx-auto">{{ product.description }}</p>            
                    <p class="text-lg font-semibold ml-3 text-center">{{product.price}}</p>
                    <p class="bg-[#50A151] mx-auto text-center mt-2 w-[200px] text-white px-6 rounded-full">In Stock</p>
                    <button class="text-white bg-black w-[200px] mx-auto hover:shadow-xl text-center px-6 py-2 rounded-full mt-4">Add To Cart</button>
                </div>             
             </div>

        </div>
    </section>
</template>
<script setup>
const products = [
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    },
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    },
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    },
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    },
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    },
    {
        image: "/src/assets/images/transparent.png",
        title: "Product Name",
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,",
        price : '10$'
    }
]

</script>