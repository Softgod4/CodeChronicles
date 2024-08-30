<template>
  <span
    class="px-3 py-[5px] select-none w-full text-center bg-banner-bg/95 backdrop-blur-md transition-all rounded-md text-light-text text-light mr-4 text-nowrap"
  >
    # {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>
