<script setup lang="ts">
import { computed } from 'vue'

type LinkItem = { label: string; href: string; target?: '_self' | '_blank' }
type Section = { title: string; items: LinkItem[] }

const props = withDefaults(defineProps<{
  sections?: Section[]
}>(), {
  sections: () => ([
    {
      title: 'Hisob',
      items: [
        { label: 'Hisob yaratish', href: '#' },
        { label: 'Tizimga kirish', href: '#' },
        { label: 'iOS ilovasi', href: '#' },
        { label: 'Android ilovasi', href: '#' },
      ]
    },
    {
      title: 'Hisob',
      items: [
        { label: 'Hisob yaratish', href: '#' },
        { label: 'Tizimga kirish', href: '#' },
        { label: 'iOS ilovasi', href: '#' },
        { label: 'Android ilovasi', href: '#' },
      ]
    }
  ]),
  
})

const year = computed(() => new Date().getFullYear())


</script>

<template>
  <footer
    class="w-full bg-[#2a2831]"
    role="contentinfo"
  >
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-slate-100"
    >
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand + description + stores -->
        <div class="col-span-1">
          <div class="flex items-center gap-3">
            
            <div class="flex items-center gap-2">
                <img src="/src/assets/images/footer-logo.png" alt="logo" width="200">
            </div>
          </div>

          <p class="mt-5 text-slate-300/90 leading-relaxed">
            Simplifying city travel with rides you can trust, anytime you need them.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <img src="/src/assets/images/storesIcon.png" alt="">
          </div>
        </div>

        <!-- Sections -->
        <div v-for="(section, sIdx) in sections" :key="sIdx" class="col-span-1">
          <h3 class="text-lg font-semibold text-white">{{ section.title }}</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="(item, iIdx) in section.items" :key="iIdx">
              <a
                class="text-slate-300 hover:text-white transition-colors"
                :href="item.href"
                :target="item.target || '_self'"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-white">Ijtimoiy Tarmoqlar</h3>
          <div class="mt-4 flex items-center gap-5">
              <img src="/src/assets/images/twitter.png" alt="">
              <img src="/src/assets/images/instagram.png" alt="">
              <img src="/src/assets/images/facebook.png" alt="">
          </div>
        </div>
      </div>

      <div  class="mt-10 border-t pt-6 text-center text-slate-400 border-[color:var(--tw-border-opacity)] border-[#3a3842]" />
      <p class="mt-4 text-center text-slate-400">
        Copyright © {{ year }}. All rights reserved.
      </p>
    </div>

  </footer>
</template>