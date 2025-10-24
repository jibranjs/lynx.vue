<template>
<section class="bg-[#FFEEFD]">
    <div class="max-w-[1536px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 relative py-[45px]">
            <div>
                <BasicHeading>Area We Cover</BasicHeading>
              <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                  <ul>
                    <li v-for="list1 in lists1" class="mb-3 flex gap-2 items-center  hover:underline text-lg"><Icon icon="lets-icons:check-fill" width="24" height="24"  style="color: #FD04B1"></Icon>{{ list1 }}</li>
                </ul>
                  <ul>
                    <li v-for="list2 in lists2"  class="mb-3 hover:underline flex gap-2 items-center text-lg"><Icon icon="lets-icons:check-fill" width="24" height="24"  style="color: #FD04B1"></Icon>{{ list2 }}</li>
                </ul>
                  <ul>
                    <li v-for="list3 in lists3" class="mb-3 hover:underline flex gap-2 items-center text-lg"><Icon icon="lets-icons:check-fill" width="24" height="24"  style="color: #FD04B1"></Icon>{{ list3 }}</li>
                </ul>
              </div>
            </div>
            <div class="relative">
                <img src="/src/assets/images/areas-covered.png" alt="" class="absolute top-0 mt-[-90px]">
            </div>
        </div>
    </div>
</section> 
  </template>

  <script setup>
import { Icon } from '@iconify/vue';
import BasicHeading from '../GlobalComponents/BasicHeading.vue';

const lists1 = [
   'Alderley Edge',
   'Bredbury',
   'Heaton Chapel',
   'Knutsfood',
   'Marple',
   'Romiley',
   'Wythenshawe'
]
const lists2 = [
   'Altricham',
   'Cheadle hulme',
   'Heaton Mersey',
   'Levenshulme',
   'Parrs Wood',
   'Stockport Train Station',
   'Wilmslow'
]

const lists3 = [
   'Bollinton',
   'Edgeley',
   'Heaton Moor',
   'Macclesfield',
   'Reddish',
   'Stretford'
]

</script>