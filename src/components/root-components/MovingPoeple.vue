<script setup>
import Button from '../ui/button/Button.vue';
</script>

<template>
  <div class="bg-[#272631] flex flex-col lg:flex-row gap-12 mt-4 text-white w-full rounded-md">
    <!-- LEFT -->
    <div class="w-full lg:w-3/5 p-6 md:p-10 relative">
      <!-- IMAGES -->
      <div data-aos="fade-up" class="relative hidden lg:block lg:h-[1px]">
        <img
          src="/src/assets/images/road.png"
          alt="road"
          class="absolute top-[-80px] md:top-[-120px] lg:top-[-184px] left-[100px] md:left-[150px] lg:left-[200px]"
          width="300"
          />
        <img
          src="/src/assets/images/taxi.png"
          alt="taxi"
          class="absolute top-[-90px] md:top-[-130px] lg:top-[-190px] left-[90px] md:left-[130px] lg:left-[170px] mt-10"
          width="300"
        />
      </div>

      <!-- TEXT CONTENT -->
      <div data-aos="slide-right" class="mt-[22px]">
        <h1 class="text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight">
          Moving People, Creating Journey, Shaping
          <Button
            class="bg-transparent -rotate-12 border border-[#FFC700] text-[#FFC700] rounded-full w-28 md:w-32 mt-2">
            Memories
          </Button>
        </h1>
        <p class="text-base md:text-lg lg:text-[23px] font-normal mt-4">
          With professional drivers, well-maintained vehicles, and 24/7 availability, we’re here to make every journey smooth, stress-free, and memorable.
        </p>

        <!-- TAG BUTTONS -->
        <div class="flex flex-col sm:flex-row flex-wrap gap-2 mt-4 items-start sm:items-center">
          <Button class="rounded-full p-4 bg-[#353341] flex items-center gap-2">
            <img src="/src/assets/images/small-car.png" alt="car" width="24" height="24" />
            Lorem Ipsum dollar
          </Button>
          <Button class="rounded-full p-4 bg-[#353341] flex items-center gap-2">
            <img src="/src/assets/images/truck.png" alt="truck" width="24" height="24" />
            Dummy Text
          </Button>
          <Button class="rounded-full p-4 bg-[#353341] flex items-center gap-2">
            <img src="/src/assets/images/small-car.png" alt="car" width="24" height="24" />
            Lorem Ipsum
          </Button>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <Button class="bg-[#FFC700] text-black rounded-full p-5 w-full sm:w-auto">MORE ABOUT US</Button>
          <Button class="bg-transparent text-white border border-[#FFC700] rounded-full p-5 w-full sm:w-auto">
            BOOK YOUR RIDE
          </Button>
        </div>
      </div>
    </div>

    <!-- RIGHT -->
      <!-- <div class="w-2/5 bg-[url('/src/assets/images/bg-phone.png')] bg-no-repeat bg-center bg-cover h-[200px] relative">
        <div class="pr-10">
            <img src="/src/assets/images/protector.png" alt="protector" class="absolute bottom-0 right-0" />

            <img src="/src/assets/images/phone.png" alt="phone" class="relative right-10 bottom-40" />
        </div>
    </div> -->
  </div>
</template>
