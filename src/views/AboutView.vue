<template>
  <PremierTaxis
  :image = "premier.image"
  :imageAlt = "premier.imageAlt"
  :heading = "premier.heading"
  :paragraph = "premier.paragraph"
  :lists = "premier.lists"
  />
</template>

<script setup>
import PremierTaxis from '../components/Homepage/PremierTaxis.vue';

// Data for Premier Taxis
const premier = {
  image: '/src/assets/images/premier-service.png',
  imageAlt: 'Premier Taxi Service',
  heading: `Stockport's Premier Taxi Service`,
  paragraph: `<strong>At Lynx Taxis,</strong> we've been Stockport's leading taxi service since 1988. Our commitment to excellence means you can always count on:`,
  lists: [
        `<strong>Punctuality:</strong> Reliable service throughout Stockport`,
        `<strong>Comfort:</strong> Modern, well-maintained vehicles`,
        `<strong>Professionalism:</strong> Experienced local drivers`,
        `<strong>Affordability:</strong> Competitive rates in Stockport`
    ]
}
</script>
