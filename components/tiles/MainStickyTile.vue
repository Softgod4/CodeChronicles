<template>
  <article
    class="flex flex-col justify-center items-center py-[50px] border-t border-solid border-[#262626] w-full"
  >
    <div class="flex flex-col justify-start items-start">
      <p
        class="stats text-white text-[40px] font-medium text-start flex justify-start items-start"
      >
        {{ stats }} <span class="text-[#FFD11A]">+</span>
      </p>
      <p class="text-[#98989A] text-[14px] font-light text-start">
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
    y: '-120%',
    duration: 0.5,
    ease: 'back.inOut',
    stagger: 0.5
  }, {
    y: '0%',
    stagger: 0
  });
});
</script>
