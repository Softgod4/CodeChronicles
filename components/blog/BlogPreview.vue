<template>
  <div
    class="border-b border-solid border-color-border flex flex-row justify-between items-center p-4"
  >
    <NuxtLink class="flex flex-col justify-center items-start w-2/3 cursor-pointer">
      <div class="flex flex-row justify-start items-center">
        <div class="" v-if="tags && Array.isArray(tags)" v-for="(item, index) in tags" :key="index">
          <BlogTag :text="item" />
        </div>
      </div>
      <h2 class="text-white text-3xl mt-4">{{ title }}</h2>
      <p class="text-extralight text-light-text text-[16px] mt-2 text-ellipsis overflow-hidden">
        {{ description }}
      </p>
      <div class="flex justify-start items-center mt-6">
        <button class="flex justify-center items-start">
          <NuxtImg src="/test/like.svg" class="w-6 h-6" />
          <span class="ml-2 text-lg text-light-text">{{ likes }}</span>
        </button>
      </div>
    </NuxtLink>
    <div class="flex flex-col justify-center items-center">
      <NuxtImg :src="img" class="max-w-64 w-full h-auto rounded-xl" />
    </div>
  </div>
</template>

<script setup scoped lang="ts">
import BlogTag from '../BlogTag.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false,
    default: 0
  },
  img: {
    type: String,
    required: true
  },
  tags: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => ['tag', 'tag2']
  }
});
</script>
