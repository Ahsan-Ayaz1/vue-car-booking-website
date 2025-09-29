<script setup>
import { Plus, Phone } from "lucide-vue-next"
import LogoSvg from './icons/LogoSvg.vue';
import RideBooking from './root-components/RideBooking.vue';
import DownloadSection from "./root-components/DownloadSection.vue";
import WhyCallCabSection from "./root-components/WhyCallCabSection.vue";
import ServicesSection from "./root-components/ServicesSection.vue";
import MovingPoeple from "./root-components/MovingPoeple.vue";
import ContactUs from "./root-components/ContactUs.vue";
import Footer from "./root-components/Footer.vue";
import DownloadTheAppNow from "./root-components/DownloadTheAppNow.vue";

const handleScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>


<template>
  <div>
    <div class="fixed bottom-6 right-6 z-50 cursor-pointer bg-[#FFD231] p-3 rounded-full transition-transform duration-300 transform hover:scale-110">
      <Phone />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:pr-0">
      <div class="col-span-1 md:col-span-2 px-6">
        <LogoSvg />
        <div class="md:pl-10 mt-6 md:mt-10">
          <h1 class="text-[#272530] font-semibold text-lg md:text-xl lg:text-2xl">The Most Reliable Ride Booking</h1>
          
          <span class="font-bold text-3xl md:text-5xl lg:text-[70px] leading-tight block">
            Ride in Minutes, <span class="text-[#FFC700]">Anywhere.</span>
          </span>

          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <img class="w-10 h-10 border-2 border-white rounded-full" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0" alt="">
              <img class="w-10 h-10 border-2 border-white rounded-full" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0" alt="">
              <div class="w-10 h-10 border-2 border-white rounded-full bg-[#FFC700] flex items-center justify-center">
                <Plus class="size-5 text-black" />
              </div>
            </div>

            <div class="flex flex-col">
              <h1 class="font-bold text-xl md:text-2xl">5 Million +</h1>
              <p class="text-[#272530] text-sm md:text-base">Worldwide Download</p>
            </div>
          </div>

          <div class="-mr-2 xl:-mr-10 z-30 relative overflow-visible mt-6 hidden lg:block">
            <img src="/src/assets/images/ride-call-cab.png" alt="" class="w-full max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div class="col-span-1 md:col-span-2 bg-[#FFC700]">
        <RideBooking>
          <template #navItem>
              <div class="flex flex-wrap justify-center sm:justify-between items-center text-[#272530] font-bold text-sm bg-[#FFD231] px-4 sm:px-10 py-4 gap-3">
                <p 
                  class="whitespace-nowrap cursor-pointer"
                  @click="handleScrollToSection('whoWeAre')"
                  >
                  WHO WE ARE
                </p>
                <p 
                  class="whitespace-nowrap cursor-pointer"
                  @click="handleScrollToSection('whyCallCab')"
                  >
                  WHY CALL CAB
                </p>
                <p 
                  class="whitespace-nowrap cursor-pointer"
                  @click="handleScrollToSection('aboutUs')"
                  >
                  ABOUT
                </p>
                <p 
                  class="whitespace-nowrap cursor-pointer"
                  @click="handleScrollToSection('contactUs')"
                >
                  CONTACT
                </p>
                <p 
                  class="border rounded-full border-black px-3 py-2 whitespace-nowrap cursor-pointer"
                  @click="handleScrollToSection('joinUs')"
                >
                  JOIN US NOW!
                </p>
            </div>
          </template>
        </RideBooking>
      </div>
    </div>

    <!-- Download Section -->
    <div id="whoWeAre" class="-mt-2 xl:-mt-12 relative overflow-visible">
      <div class="border p-10 bg-[#272530] rounded-lg">
        <DownloadSection />
      </div>
    </div>
    <!-- WhyCallCab Section -->
    <div id="whyCallCab" class="p-10">
      <WhyCallCabSection />
    </div>
    <!-- Moving Section -->
     <div class=" flex justify-center">
      <MovingPoeple/>
     </div> 
    <div id="aboutUs" class="p-10 flex justify-center">
      <ServicesSection />
    </div>
    <div class="flex justify-center">
      <DownloadTheAppNow />
    </div>
    <!-- JoinUs Section -->
    <div id="contactUs" class=" ml-4 flex justify-center">
      <ContactUs  />
    </div>
    <div class=" flex justify-center">
      <Footer  />
    </div>
  </div>
</template>