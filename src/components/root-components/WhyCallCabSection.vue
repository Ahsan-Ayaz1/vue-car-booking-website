<script setup>
const services = [
    {
        title: '24/7 Availability',
        text: 'Ride anytime, anywhere with roundthe clock service.',
        image: 'car-front.png'
    },
    {
        title: 'Safe & Reliable',
        text: 'Verified drivers and well-maintained vehicles for peace of mind.',
        image: 'verified.png'
    },
    {
        title: 'Affordable Pricing',
        text: 'Ride anytime, anywhere with round the clock service.',
        image: 'price.png'
    },
]
</script>
<template>
    <div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="col-span-2">
                <div class="w-[500px] flex justify-center items-center">
                    <div class="relative">
                        <img src="/src/assets/images/customer.png" alt="" />
                        <img src="/src/assets/images/location-with-background.png" class="absolute left-0 top-16" alt="">
                        <img src="/src/assets/images/car-with-background.png" class="absolute right-0 top-16" alt="">
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="text-[#272530]">
                    <h1 class="text-[50px] font-bold">Why Our Cabs Are the <span class="text-[#FFC700]">Right Choice.</span></h1>
                    <p>With our cab service, you’ll never have to worry about delays or hidden costs. We prioritize your comfort and safety, offering well-maintained vehicles and trained drivers you can trust.</p>
                </div>
                <div class="my-6">
                    <template v-for="(service, index) in services" :key="index">
                        <div class="flex gap-6 items-center border-y py-4">
                            <div class="relative w-fit">
                                <img src="/src/assets/images/rectangle.png" alt="">
                                <img :src="`/src/assets/images/${service.image}`" alt="" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold">{{ service.title }}</h1>
                                <p>{{ service.text }}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
