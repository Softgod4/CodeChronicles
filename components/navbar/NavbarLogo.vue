<template>
  <NuxtLink class="flex justify-center items-center" id="logo" to="/">
    <NuxtImg
      src="/image/navbar/logo2.png"
      alt="avatar-github"
      class="w-12 h-12 rounded-[30%]"
      id="logoBumb"
    />
    <p class="ml-3 text-white font-semibold sm:text-2xl text-[18px]">
      {{ name }}
    </p>
    <span
      class="px-2 py-1 border border-solid rounded-md border-color-border text-[#7E7E81] ml-4"
      >{{ version }}</span
    >
  </NuxtLink>
</template>

<script setup lang="ts">
    defineProps({
        name: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: false,
            default: "v 1.0.0",
        }
    })
</script>