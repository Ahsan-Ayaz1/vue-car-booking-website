<script setup>
import { Button } from '../ui/button';
        
const mobileInformations = [
    {
        title: 'For IOS',
        version: 'IOS 15.6+',
        image: 'ios.png'
    },
    {
        title: 'For Andriod',
        version: 'Andriod 8.0+',
        image: 'android.png'
    }
]
</script>

<template>
  <div>   
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-12 mt-4 text-white">
      <!-- Left Content -->
      <div class="col-span-1 md:col-span-2">
        <h1 class="text-3xl md:text-4xl lg:text-[50px] font-bold">
          Download Our Mobile <br> <span class="text-[#FFC700]">Application Now !</span>
        </h1>
        <p class="mt-2 text-base md:text-lg lg:text-xl">
          Book rides in seconds, track your driver in real time, and enjoy safe, reliable travel anytime, anywhere.
        </p>

        <!-- Stats Row -->
        <div class="flex flex-col sm:flex-row mt-6">
          <div class="flex flex-col border-b sm:border-b-0 sm:border-r border-white sm:pr-16 sm:mr-8 pb-4 sm:pb-0">
            <span class="text-xl font-semibold">5 Million <span class="text-[#FFC700]">+</span></span>
            <span class="text-sm sm:text-base">Worldwide Download</span>
          </div>
          <div class="flex flex-col border-b sm:border-b-0 sm:border-r border-white sm:pr-16 sm:pl-8 sm:mr-8 pb-4 sm:pb-0 mt-4 sm:mt-0">
            <span class="text-xl font-semibold">200 <span class="text-[#FFC700]">+</span></span>
            <span class="text-sm sm:text-base">Countries</span>
          </div>
          <div class="flex flex-col sm:px-8 mt-4 sm:mt-0">
            <span class="text-xl font-semibold">8000<span class="text-[#FFC700]">+</span></span>
            <span class="text-sm sm:text-base">Taxi Drivers</span>
          </div>
        </div>
      </div>

      <!-- App Cards -->
      <template v-for="(item, index) in mobileInformations" :key="index">
        <div class="relative col-span-1 py-6 px-4 bg-[#353341] rounded-3xl">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold">{{ item.title }}</h1>
            <p class="text-[#FFFFFF] text-base md:text-lg">{{ item.version }}</p>
            <Button class="bg-[#FFC700] mt-6 p-4 md:p-6 hover:bg-[#FFC700] text-black rounded-full w-full md:w-auto">
              Download App
            </Button>
          </div>
          <div class="bg-white w-[60px] md:w-[70px] mt-6">
            <img src="/src/assets/images/qr-code.png" alt="">
          </div>
          <div class="absolute right-[-0.5rem] bottom-[-0.5rem] bg-[#272530] text-white rounded-full px-4 py-4 md:px-6 md:py-5">
            <img :src="`/src/assets/images/${item.image}`" alt="">
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
