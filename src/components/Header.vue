<template>
  <header>
    <section class="max-w-[1536px] mx-auto">
      <div class="flex gap-4 justify-between items-center py-3 px-6">
        <img src="../assets/images/lynx-logo.webp" alt="Logo" class="h-14" />
        <nav class="lg:flex hidden gap-4">
        <router-link to="/" class="hover:bg-[#FFB8F8] active:bg-[#FD04B1] py-2 px-3  rounded">Home</router-link>
        <router-link to="/business"
          class="hover:bg-[#FFB8F8] active:bg-[#FD04B1] py-2 px-3  rounded">Business</router-link>
        <router-link to="/services"
          class="hover:bg-[#FFB8F8] active:bg-[#FD04B1] py-2 px-3  rounded">Services</router-link>
        <router-link to="#" class="hover:bg-[#FFB8F8] active:bg-[#FD04B1] py-2 px-3  rounded">Help</router-link>
        <router-link to="#" class="hover:bg-[#FFB8F8] active:bg-[#FD04B1] py-2 px-3  rounded">About</router-link>
        <router-link to="#" class="text-white bg-[#FD04B1] py-2 px-3  rounded">BOOK ONLINE</router-link>
        <router-link to="#" class="text-white bg-[#FD04B1] py-2 px-3 rounded">Call</router-link>
        <router-link to="#" class="text-white bg-[#FD04B1] py-2 px-3 rounded">Join Us</router-link>
        </nav>
        <button class="bg-[#FD04B1] block lg:hidden py-2 px-3 rounded text-white hamburger">
         =
        </button>
      </div>

    </section>
  </header>
</template>
<script setup>

</script>
