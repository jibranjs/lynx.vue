<template>
  <footer>
    <div class="bg-[#000000]">
      <div class="max-w-[1536px] mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <!-- 1 -->
          <div class="text-white">
            <img src="../assets/images/footer-logo.png" alt="footerlogo" class="h-14">
            <p>How To Find</p>
            <p v-html="address" class="text-sm"></p>
          </div>
          <!-- 2 -->
          <div>
            <h2 class="text-2xl font-semibold text-[#FD04B1]">Area We Cover</h2>
            <p v-for="Area in areas"></p>
          </div>

          <!-- 3 -->
          <div>

          </div>

          <!-- 4 -->
          <div>

          </div>

          <!-- 5 -->
          <div>

          </div>

          <!-- 6 -->
          <div>

          </div>
        </div>
      </div>
    </div>


  </footer>
</template>

<script setup>

const address = '297a London Road Hazel Grove, Stockport SK7 4PS Tel: <span class="font-semibold text-[#FD04B1]">0161 480 0000</span>'

const areas = [
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge',
  'Alderley Edge'
]
</script>
