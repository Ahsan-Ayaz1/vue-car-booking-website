<script setup>
import Button from '../ui/button/Button.vue';

const services = [
    {
        title: 'Liver GPS Tracking',
        text: 'Neque porro quisquam est qui dolorem ipsum.',
        image: '/src/assets/images/tracker.png'

    },
    {
        title: 'Multiple Payment',
        text: 'Neque porro quisquam est qui dolorem ipsum.',
        image: '/src/assets/images/card.png'
    },
    {
        title: 'Ride For Everyone',
        text: 'Neque porro quisquam est qui dolorem ipsum.',
        image: '/src/assets/images/people.png'
    },
    {
        title: 'Safety First',
        text: 'Neque porro quisquam est qui dolorem ipsum.',
        image: '/src/assets/images/shield.png'
    },
]
</script>
<template>
    <div class="text-center">
        <h1 class="text-[50px] font-semibold">Features Designed For <span class="text-[#FFC700]">Smarter Travel</span>
        </h1>
        <p class="text-md  ">With our cab service, you’ll never have to worry about delays or hidden costs. We
            prioritize your <br> comfort and safety, offering well-maintained vehicles and trained drivers you can
            trust.</p>
        <div
            class="flex justify-between items-center gap-6 mt-6 ">
            <div v-for="(service, index) in services" :key="index" class=" p-6 flex flex-col items-center justify-center shadow-[0px_4px_45.7px_0px_#99999940] border border-[#E6E6E6] rounded-tr-[50px] rounded-bl-[50px] w-[300px] h-[340px] ">
                <div
                    class="bg-[url('/src/assets/images/service-bg.png')] relative bg-center bg-no-repeat h-[200px] w-[200px]"
                    :class="index === 1 ? 'bg-[url(/src/assets/images/balck-bg.png)]' : ''"
                    >
                    
                    <img :src="service.image" :alt="service.title"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </div>
                <h1 class="font-bold">{{ service.title }}</h1>
                <p class="text-[#706E79]">{{ service.text }}</p>
            </div>
     
        </div>
        <Button class="mt-8 rounded-full p-6 w-[200px]">BOOK YOUR RIDE NOW !</Button>
    </div>
</template>
