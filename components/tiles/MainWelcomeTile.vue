<template>
  <article
    class="flex flex-col justify-center items-center sm:py-[50px] py-[30px] border-t border-solid border-color-border w-full"
  >
    <div class="flex flex-col md:justify-start justify-center md:items-start items-center">
      <p
        class="stats text-white sm:text-[40px] text-[34px] font-medium text-start flex justify-start items-start"
      >
        {{ stats }} <span class="text-[#FFD11A]">+</span>
      </p>
      <p class="text-light-text sm:text-[14px] text-[14px] font-light text-start">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts" scoped>
import gsap from 'gsap';

defineProps({
  stats: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

onMounted(() => {
  gsap.fromTo('.stats', {
    y: '-40%',
    duration: 4,
    ease: 'elastic.inOut',
    stagger: 0.5,
    opacity: 0
  }, {
    opacity: 1,
    y: '0%',
    stagger: 0.7
  });
});
</script>
