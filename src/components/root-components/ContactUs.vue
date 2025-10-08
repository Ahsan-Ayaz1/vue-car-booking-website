<script setup lang="ts">
import { reactive } from 'vue'

const props = withDefaults(defineProps<{
  carImage?: string
  badgeSvg?: string
}>(), {
  carImage:
    'https://images.unsplash.com/photo-1549921296-3b4a5627d0d6?q=80&w=1600&auto=format&fit=crop', // placeholder yellow car; replace with your asset
  badgeSvg:
    '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" class=\"h-16 w-16\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#FBBF24\"/><path d=\"M40 24l-8-5-8 5v10l8 5 8-5V24z\" fill=\"#111827\"/></svg>',
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  carModel: '',
  message: '',
})

function submit() {
  // emit or call API
  // Example: emit('submit', { ...form })
  alert(`Submitted: ${JSON.stringify(form, null, 2)}`)
}
</script>
<template>
  <section class="relative overflow-hidden rounded-b-[32px] py-12 sm:py-16">
    <div data-aos="fade-up-left" class="text-center">
         <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 text-center ">
          Do You Want To <span class="text-amber-500">Earn With Us</span>
        </h2>
        <p class="mt-4 text-slate-600 leading-relaxed text-center ">
          With our cab service, you'll never have to worry about delays or hidden costs. We prioritize your comfort and safety, offering well-maintained vehicles and trained drivers you can trust.
        </p>
    </div>
    <!-- Two column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <!-- Left: Form -->
      <div class="px-4 sm:px-6 lg:px-12">
        <h3 class="mt-8 text-2xl font-semibold text-slate-900">
          Join Calling Cab BT For Free
        </h3>

        <form class="mt-6 space-y-5" @submit.prevent="submit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700">Name</label>
              <input
                v-model="form.name"
                type="text"
                class="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                class="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Phone Number</label>
              <input
                v-model="form.phone"
                type="tel"
                class="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="+1 555 000 000"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Car Model</label>
              <input
                v-model="form.carModel"
                type="text"
                class="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="Toyota Corolla"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700">Your Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              placeholder="Tell us about yourself"
            />
          </div>

          <button
            type="submit"
            class="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            BECOME A DRIVER
          </button>
        </form>
      </div>

      <!-- Right: Car visual -->
      <div data-aos="fade-left" class="relative hidden lg:block">
        <img
          src="/src/assets/images/half-Taxi-1.png"
          alt="Yellow car"
          class="w-full object-cover"
        />
        <div class="absolute left-20 top-40">
            <img src="/src/assets/images/iconTaxi.png" alt="" height="200" width="190">
        </div>
      </div>
    </div>
  </section>
</template>
