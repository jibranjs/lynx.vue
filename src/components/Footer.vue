<template>
  <footer>
    <div class="bg-[#000000]">
      <div class="max-w-[1536px] mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 py-12 lg:py-[25px] px-6">
          <!-- 1 -->
          <div class="text-white">
            <img src="../assets/images/footer-logo.png" alt="footerlogo" class="h-14">
            <p>How To Find</p>
            <p v-html="address" class="text-sm"></p>
          </div>
          <!-- 2 -->
          <div class="flex flex-col gap-2 ">
            <h2 class="text-lg font-bold text-[#FD04B1]">Area We Cover</h2>
            <a href="#" v-for="area in areas" class="text-white text-sm hover:text-[#FD04B1]">{{ area }}</a>
          </div>
          <!-- 3 -->
          <div class="text-white flex flex-col gap-2 pt-[36px]">
            <a href="#" v-for="area1 in areas1" class="text-sm hover:text-[#FD04B1]">{{ area1 }}</a>
          </div>
          <!-- 4 -->
          <div class="flex flex-col gap-2">
            <h2 class="text-[#FD04B1] text-lg font-bold">Airport Transfers</h2>
            <a href="#" v-for="transfer in transfers" class="text-white text-sm  hover:text-[#FD04B1]">{{ transfer }}</a>
            <h2 class="text-[#FD04B1] text-lg font-bold ">Blogs</h2>
            <a href="#" v-for="blog in blogs" class="text-white  text-sm  hover:text-[#FD04B1]">{{ blog }}</a>
          </div>
          <!-- 5 -->
          <div  class="flex flex-col gap-2">
            <h2 class="text-[#FD04B1] text-lg font-bold">About Lynx</h2>
            <a href="#" v-for="about in abouts" class="text-white text-sm  hover:text-[#FD04B1]">{{ about }}</a>
            <h2 class="text-[#FD04B1] text-lg font-bold ">Contact</h2>
            <a href="#" v-for="contact in contacts" class="text-white  text-sm  hover:text-[#FD04B1]">{{ contact }}</a>
          </div>
          <!-- 6 -->
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-bold text-[#FD04B1]">Download</h2>
            <img src="../assets/images/app-store.jpg" alt="appstore" class="rounded border border-white h-16 w-[200px]">
            <img src="../assets/images/google-play.jpg" alt="playstore" class="rounded border border-white h-16 w-[200px]">
            <h2 class="text-[#FD04B1] text-lg font-bold ">Follow Us</h2>
            <div class="flex text-white gap-4">
              <Icon icon="ic:baseline-facebook" width="24" height="24" class=" hover:text-[#FD04B1]"></Icon>
              <Icon icon="flowbite:instagram-solid" width="24" height="24" class=" hover:text-[#FD04B1]"></Icon>
              <Icon icon="ri:twitter-x-fill" width="24" height="24" class=" hover:text-[#FD04B1]"></Icon>
              <Icon icon="fa-brands:linkedin-in" width="21" height="24" class=" hover:text-[#FD04B1]"></Icon>
            </div>
 
          </div>
        </div>
        <hr class="border-white pt-8">
        <div class="flex justify-between px-6 items-center">
          <div>
            <p class="text-white hover:text-[#FD04B1]">Copyright © 2025 Lynx Taxis</p>
          </div>
          <div>
            <a href="#" v-for="term in terms" class="text-white hover:text-[#FD04B1]">{{ term }}</a>
            
          </div>
          <div>
            <img src="/src/assets/images/xiots-logo.jpg" alt="logo" class="w-[120px]">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

const address = '297a London Road Hazel Grove, Stockport SK7 4PS Tel: <span class="font-semibold text-[#FD04B1]">0161 480 0000</span>'

const terms = [
  'Terms & Conditions | ',
  'Privacy Policy | ',
  'Cookie Policy | ',
  'Refund Policy | ',
  'Card Payment Pre-Authorisation'
]

const areas = [
  'Alderley Edge',
  'Altrincham',
  'Bollington',
  'Bredbury',
  'Cheadle hulme',
  'Edgeley',
  'Heaton Chapel',
  'Heaton Mersey',
  'Heaton Moor',
  'Knutsford'
]

const areas1 = [
  'Levenshulme',
  'Macclesfield',
  'Marple',
  'Parrs Wood',
  'Reddish',
  'Romiley',
  'Stockport Train station',
  'Stretford',
  'Wilmslow',
  'Wythenshawe'
]

const transfers = [
  'Manchester Airport',
  'Birmingham Airport',
  'Liverpool Airport'
]

const blogs = [
  'Taxi to Manchester Airport',
  'Taxi to Birmingham Airport',
  'Taxi to Liverpool Airport'
]

const abouts = [
  'About Us',
  'Lynx Eco',
  'Blogs'
]

const contacts = [
  'Contact Us',
  'BUsiness Accounts',
  'School Run'
]

</script>
