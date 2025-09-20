<script setup>
import { watch } from 'vue'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const props = defineProps({
    label: {
        type: String,
    default: ''
},
  options: {
    type: Array,
    default: () => []
},
placeholder: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
}
})
const emit = defineEmits(['change'])
const selectedType = defineModel('selected-option')

watch(selectedType, (newValue) => {
  if (newValue !== undefined && newValue !== null) {
    emit('change', newValue)
  }
})
</script>

<template>
  <div>
    <Label v-if="label" for="assessment-title" class="mb-1">{{ label }}</Label>
    <Select v-model="selectedType" :disabled="disabled">
      <SelectTrigger
        :class="cn(
          'w-full truncate',
          props.class,
        )"
      >
        <SelectValue :placeholder="placeholder" class="truncate" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel class="truncate max-w-full">{{ placeholder || label }}</SelectLabel>
          <SelectItem
            v-for="item in options"
            :key="item.id"
            :value="item.id"
            class="truncate max-w-full"
          >
            <span class="block truncate max-w-full">{{ item.name || item.title }}</span>
          </SelectItem>
        </SelectGroup>
        <slot name="add-button" />
      </SelectContent>
    </Select>
  </div>
</template>
