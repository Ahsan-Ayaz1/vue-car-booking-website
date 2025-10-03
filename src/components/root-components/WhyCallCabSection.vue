<script setup>
const services = [
    {
        title: '24/7 Availability',
        text: 'Ride anytime, anywhere with round-the-clock service.',
        image: 'car-front.png'
    },
    {
        title: 'Safe & Reliable',
        text: 'Verified drivers and well-maintained vehicles for peace of mind.',
        image: 'verified.png'
    },
    {
        title: 'Affordable Pricing',
        text: 'Ride anytime, anywhere with round-the-clock service.',
        image: 'price.png'
    },
]
</script>

<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
      <!-- Left Image Section -->
      <div class="col-span-1 lg:col-span-2 flex justify-center items-center">
        <div class="relative w-full max-w-[500px]">
          <img src="/src/assets/images/customer-1.png" alt="" class="w-full h-auto" />
          <img src="/src/assets/images/location-with-background.png" class="absolute left-0 top-12 sm:top-16 w-1/4 sm:w-1/4" alt="">
          <img src="/src/assets/images/car-with-background.png" class="absolute right-0 top-12 sm:top-16 w-1/4 sm:w-1/4" alt="">
        </div>
      </div>

      <!-- Right Text Section -->
      <div class="col-span-1 lg:col-span-2">
        <div class="text-[#272530] px-4 lg:px-0">
          <h1 class="text-3xl sm:text-4xl lg:text-[50px] font-bold leading-tight">
            Why Our Cabs Are the <span class="text-[#FFC700] lg:mt-4 lg:inline-block">Right Choice.</span>
          </h1>
          <p class="mt-4 text-base sm:text-lg">
            With our cab service, you’ll never have to worry about delays or hidden costs. We prioritize your comfort and safety, offering well-maintained vehicles and trained drivers you can trust.
          </p>
        </div>

        <!-- Services List -->
        <div class="my-6 px-4 lg:px-0">
          <template v-for="(service, index) in services" :key="index">
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center border-y py-4">
              <div class="relative w-[60px] h-[60px] shrink-0">
                <img src="/src/assets/images/rectangle.png" alt="" class="w-full h-full object-cover">
                <img
                  :src="`/src/assets/images/${service.image}`"
                  alt=""
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div>
                <h1 class="text-lg sm:text-xl md:text-2xl font-bold">{{ service.title }}</h1>
                <p class="text-sm sm:text-base">{{ service.text }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
