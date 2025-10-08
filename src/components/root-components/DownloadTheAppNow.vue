<script setup>
import Button from '../ui/button/Button.vue';
</script>

<template>
  <section
    class="grid grid-cols-1 lg:grid-cols-6 w-full bg-[#FFC700] rounded-lg p-6 sm:p-8 lg:h-[400px] relative"
  >

    <img  data-aos="slide-right" src="/src/assets/images/small-taxi.png" class="absolute top-[-119px] right-[100px] w-[420px] h-[130px] hidden lg:block" />
    <!-- Left Image Column -->
    <div class="lg:col-span-2 relative flex justify-center items-end h-[450px] lg:h-[450px]">
      <img
        src="/src/assets/images/bg-download.png"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <img
        src="/src/assets/images/big-mobile.png"
        alt=""
        class="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] bottom-[30px]"
      />
    </div>

    <!-- Right Text Column -->
    <div  class="lg:col-span-4 flex flex-col justify-center z-10 mt-6 lg:mt-0">
      <h1 data-aos="fade-up-right" class="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white leading-tight">
        Download <br /><span class="text-[#272530] lg:mt-4 lg:inline-block">The App Now</span>
      </h1>
      <p data-aos="fade-up-right" class="text-base sm:text-lg mt-4 text-[#272530]">
        With our cab service, you’ll never have to <br class="hidden sm:block" />
        worry about delays or hidden costs.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-2 mt-6 flex-wrap">
        <Button
          class="bg-[#272530] py-7 px-6 hover:bg-[#272530] text-white rounded-full w-full sm:w-auto"
        >
          <div class="flex gap-2 items-center">
            <img src="/src/assets/images/ios.png" class="size-5" alt="" />
            <div class="flex flex-col text-left">
              <p class="opacity-65 text-sm leading-tight">Download on the</p>
              <p>App Store</p>
            </div>
          </div>
        </Button>

        <Button
          class="bg-[#272530] py-7 px-6 hover:bg-[#272530] text-white rounded-full w-full sm:w-auto"
        >
          <div class="flex gap-2 items-center">
            <img src="/src/assets/images/android.png" class="size-5" alt="" />
            <div class="flex flex-col text-left">
              <p class="opacity-65 text-sm leading-tight">Download on the</p>
              <p>Google Play</p>
            </div>
          </div>
        </Button>
      </div>
    </div>
    <div class="absolute -top-[50px] right-4 hidden lg:block">
      <img src="/src/assets/images/download side pic.png" class=""/>
    </div>
  </section>
</template>
