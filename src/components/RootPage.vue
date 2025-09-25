<script setup>
import { Plus } from "lucide-vue-next"
import LogoSvg from './icons/LogoSvg.vue';
import RideBooking from './root-components/RideBooking.vue';
import DownloadSection from "./root-components/DownloadSection.vue";
import WhyCallCabSection from "./root-components/WhyCallCabSection.vue";
import ServicesSection from "./root-components/ServicesSection.vue";
import MovingPoeple from "./root-components/MovingPoeple.vue";
import ContactUs from "./root-components/ContactUs.vue";
import Footer from "./root-components/Footer.vue";
import DownloadTheAppNow from "./root-components/DownloadTheAppNow.vue";
</script>

<template>
  <div>
    <div class="grid grid-cols-4 pl-4">
      <div class="col-span-2">
        <LogoSvg />
        <div class="pl-10 mt-10">
          <h1 class="text-[#272530] font-semibold">The Most Reliable Ride Booking</h1>
          <span class="font-bold text-[70px]">Ride in Minutes, <span class="text-[#FFC700]">Anywhere.</span></span>
          <div class="flex gap-2">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <div class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 bg-[#FFC700] flex items-center justify-center">
                <Plus class="size-5 text-black" />
              </div>
            </div>
            <div class="flex flex-col">
              <h1 class="font-bold text-[25px]">5 Million +</h1>
              <p class="text-[#272530]">Worldwide Download</p>
            </div>
          </div>
          <div class="-mr-10 z-30 relative overflow-visible">
            <img src="/src/assets/images/ride-call-cab.png" alt="" class="" />
          </div>
        </div>
      </div>
      <div class="col-span-2 bg-[#FFC700]">
        <RideBooking />
      </div>
    </div>
    <!-- Download Section -->
    <div class="-mt-12 relative overflow-visible">
      <div class="border p-10 bg-[#272530] rounded-lg">
        <DownloadSection />
      </div>
    </div>
    <!-- WhyUs Section -->
    <div class="p-10">
      <WhyCallCabSection />
    </div>
    <!-- TODO the Moving Section -->
     <div class=" flex justify-center">
      <MovingPoeple/>
     </div> 
    <div class="p-10 flex justify-center">
      <ServicesSection />
    </div>
    <div class="flex justify-center">
      <DownloadTheAppNow />
    </div>
    <div class=" ml-4 flex justify-center">
      <ContactUs  />
    </div>
    <div class=" flex justify-center">
      <Footer  />
    </div>
  </div>
</template>