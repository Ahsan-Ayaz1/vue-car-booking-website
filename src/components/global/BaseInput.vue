<script setup lang="ts">
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Define props
defineProps<{
  id: string
  type?: string
  placeholder?: string
  label?: string
}>()
</script>

<template>
  <div class="grid w-full items-center gap-1.5">
    <Label 
        v-if="label" 
        :for="id"
    >
        {{ label }}
    </Label>
    <Input
      :id="id"
      :type="type || 'text'"
      :placeholder="placeholder"
    />
  </div>
</template>
