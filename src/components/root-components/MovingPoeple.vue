<script setup>
import Button from '../ui/button/Button.vue';


</script>

<template>
    <div class="bg-[#272631] grid grid-cols-4 gap-12 mt-4 text-white  w-full rounded-md p-10 ">
        <div class="col-span-2">
            <!-- IMAGES -->
            <div class="relative">
                <img src="/src/assets/images/road.png" alt="road" class="absolute top-[-184px] left-[200px]"
                    width="400">
                <img src="/src/assets/images/taxi.png" alt="taxi" class="absolute top-[-190px] left-[170px] mt-20"
                    width="400">
            </div>
            <div class="mt-[100px] " >
                <h1 class="text-[50px] font-bold leading-tight">Moving People, Creating Journey, Shaping
                    <Button 
                    class="bg-transparent  -rotate-12 border border-[#FFC700]   text-[#FFC700] rounded-full w-32">
                    Memories
                </Button>
                </h1>
                <p class="text-[23px] font-normal mt-2">With professional drivers, well-maintained vehicles, and 24/7 availability, we’re here to make every journey smooth, stress-free, and memorable.</p>
                
                <div class="flex  gap-2 mt-4 items-center">
                    <Button class="rounded-full p-5 bg-[#353341]"><img src="/src/assets/images/small-car.png" alt="car" width="30" height="30">Lorem Ipsum dollar</Button>
                    <Button class="rounded-full p-5 bg-[#353341]"><img src="/src/assets/images/truck.png" alt="car" width="30" height="30"></img>Dummy Text</Button>
                    <Button class="rounded-full p-5 bg-[#353341]" ><img src="/src/assets/images/small-car.png" alt="car" width="30" height="30"></img>Lorem Ipsum</Button>
                </div>
                <div class="flex items-center gap-2 mt-4">
                    <Button class= "bg-[#FFC700] text-black rounded-full p-6 ">MORE ABOUT US</Button>
                    <Button class="bg-transparent text-white border border-[#FFC700] rounded-full p-6">BOOK YOUR RIDE</Button>
                </div>
            </div>

        </div>
        <div class="col-span-2">right</div>
    </div>

</template>
