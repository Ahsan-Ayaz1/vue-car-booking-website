<script setup>
import Button from '../ui/button/Button.vue';


</script>

<template>
<section class="grid grid-cols-6 w-full bg-[#FFC700] rounded-lg h-[400px] p-4">
    <div class="col-span-2 relative">
        <img src="/src/assets/images/bg-download.png" alt="" class="absolute opacity-20">
        <img src="/src/assets/images/big-mobile.png" alt="" class="absolute">
    </div>
    <div class="col-span-4 ">
        <h1 class="text-[50px] font-bold text-white">Download <br><span class="text-[#272530]">The App Now</span></h1>
        <p class="text-[18px]">With our cab service, you’ll never have to <br> worry about delays or hidden costs.</p>
        <Button class="bg-[#272530] mt-8 p-6 hover:bg-[#272530] text-white rounded-full"> download </Button>
        <Button class="bg-[#272530] mt-8 p-6 hover:bg-[#272530] text-white rounded-full"> Download</Button>
    </div>
</section>

</template>

