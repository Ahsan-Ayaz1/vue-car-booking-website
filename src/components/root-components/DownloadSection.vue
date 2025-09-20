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
        <div class="grid grid-cols-4 gap-12 mt-4 text-white">
            <div class="col-span-2">
                <h1 class="text-[50px] font-bold">Download Our Mobile <br> <span class="text-[#FFC700]">Application Now !</span></h1>
                <p class="mt-2 text-xl">Book rides in seconds, track your driver in real time, and enjoy safe, reliable travel anytime, anywhere.</p>
                <div class="flex  mt-4">
                    <div class="flex flex-col border-r pr-16">
                        <span>5 Million <span class="text-[#FFC700]">+</span></span>
                        <span>Worldwide Download</span>
                    </div>
                    <div class="flex flex-col border-r pr-16 pl-8">
                        <span>200 <span class="text-[#FFC700]">+</span></span>
                        <span>Countries</span>
                    </div>
                    <div class="flex flex-col px-8">
                        <span>8000<span class="text-[#FFC700]">+</span></span>
                        <span>Taxi Drivers</span>
                    </div>
                </div>
            </div>
            <template v-for="(item, index) in mobileInformations" :key="index">
                <div class="relative col-span-1 py-6 px-4 bg-[#353341] rounded-3xl p-2">
                    <div>
                        <h1 class="text-3xl font-bold">{{ item.title }}</h1>
                        <p class="text-[#FFFFFF] text-lg">{{ item.version }}</p>
                        <Button class="bg-[#FFC700] mt-6 p-6 hover:bg-[#FFC700] text-black rounded-full">
                            Download App
                        </Button>
                    </div>
                    <div class="bg-white w-[70px] mt-8">
                        <img src="/src/assets/images/qr-code.png" alt="">
                    </div>
                    <div class="absolute right-[-0.5rem] bottom-[-0.5rem] bg-[#272530] text-white rounded-full px-6 py-5">
                        <img :src="`/src/assets/images/${item.image}`" alt="">
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
