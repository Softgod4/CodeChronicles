<template>
  <span class="rounded-xl px-4 py-2 select-none" :style="{ backgroundColor }">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
});
</script>
