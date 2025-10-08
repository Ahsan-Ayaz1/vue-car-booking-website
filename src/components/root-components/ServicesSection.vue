<script setup>
import Button from '../ui/button/Button.vue';

const services = [
  {
    title: 'Liver GPS Tracking',
    text: 'Neque porro quisquam est qui dolorem ipsum.',
    image: '/src/assets/images/tracker-1.png'
  },
  {
    title: 'Multiple Payment',
    text: 'Neque porro quisquam est qui dolorem ipsum.',
    image: '/src/assets/images/card-1.png'
  },
  {
    title: 'Ride For Everyone',
    text: 'Neque porro quisquam est qui dolorem ipsum.',
    image: '/src/assets/images/people-1.png'
  },
  {
    title: 'Safety First',
    text: 'Neque porro quisquam est qui dolorem ipsum.',
    image: '/src/assets/images/shield-1.png'
  }
]
</script>

<template>
  <div class="text-center px-4 md:px-10 lg:px-20">
    <!-- Heading -->
    <h1 data-aos="zoom-in-up" class="text-3xl sm:text-4xl lg:text-[50px] font-semibold leading-tight">
      Features Designed For <span class="text-[#FFC700]">Smarter Travel</span>
    </h1>

    <!-- Description -->
    <p data-aos="zoom-in-up" class="text-sm sm:text-base text-[#706E79] mt-2">
      With our cab service, you’ll never have to worry about delays or hidden costs.
      <br class="hidden sm:block" />
      We prioritize your comfort and safety, offering well-maintained vehicles and trained drivers you can trust.
    </p>

    <!-- Feature Cards -->
    <div data-aos="fade-down" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="p-6 flex flex-col items-center justify-center shadow-[0px_4px_45.7px_0px_#99999940] border border-[#E6E6E6] rounded-tr-[50px] rounded-bl-[50px] w-[100%] max-w-[300px] h-[340px]"
      >
        <div
          class="bg-[url('/src/assets/images/service-bg.png')] relative bg-center bg-no-repeat h-[200px] w-[200px]"
          :class="index === 1 ? 'bg-[url(/src/assets/images/balck-bg.png)]' : ''"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px]"
          />
        </div>
        <h1 class="font-bold mt-4 text-lg">{{ service.title }}</h1>
        <p class="text-[#706E79] text-sm mt-1">{{ service.text }}</p>
      </div>
    </div>

    <!-- Button -->
    <Button data-aos="slide-right" class="mt-10 rounded-full px-8 py-6 w-full sm:w-auto text-sm sm:text-base">
      BOOK YOUR RIDE NOW !
    </Button>
  </div>
</template>
