<template>
  <div
    class="flex flex-col justify-start justify-self-center items-start border border-solid border-color-border w-auto shadow hover:shadow-md bg-dark-bg"
  >
    <img :src="img" alt="article" class="w-full h-auto border-b-2 border-solid border-color-border" />
    <article class="p-2 flex flex-col justify-between items-start">
      <span>
        <p class="text-white font-semibold text-[20px]">{{ title }}</p>
        <h4 class="text-light-text text-[16px] font-light mb-2">
          {{ description }}
        </h4>
      </span>
      <p>softgod.ru</p>
    </article>
  </div>
</template>

<script scoped lang="ts" setup>
import Tags from '../Tags.vue';
import ButtonMain from '../buttons/ButtonMain.vue';

defineProps({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>
