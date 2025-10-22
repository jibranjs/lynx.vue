<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <img src="../assets/images/lynx-logo.webp" alt="Logo" class="logo">
      </div>
      <nav class="navItems">
        <router-link to="/">Home</router-link>
        <router-link to="/business">Business</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/about">About</router-link>
        <div class="bgnavitems">
              <router-link to="/bookonline">BOOK ONLINE</router-link>        
              <router-link to="/call">Call</router-link>
             <router-link to="/joinus">Join Us</router-link>
        </div>
    
        
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

