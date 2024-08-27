<template>
  <div
    class="py-[30px] px-[24px] h-[90px] bg-transparent hover:bg-banner-bg/95 backdrop-blur-md transition-all rounded-md mx-[24px] xl:mx-[8px] text-light-text hover:text-white shadow hover:shadow-md text-[18px] font-medium border-2 border-solid border-banner-bg select-none relative text-nowrap"
  >
    <span
      class="absolute top-[-25px] left-[-25px] w-[55px] h-[55px] bg-button-bg shadow border border-solid border-color-border z-10 p-4 rounded-full flex justify-center items-center scale-100"
    >
      <NuxtImg :src="image" alt="logo" />
    </span>
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
div {
  span {
    transition: transform 0.3s ease-in-out;
  }
}
div:hover > span {
  transform: scale(1.05);
}
</style>
