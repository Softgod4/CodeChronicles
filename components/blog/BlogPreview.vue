<template>
  <article
    class="flex flex-row justify-between items-center p-4 h-48 w-auto cursor-pointer bg-dark-bg rounded border border-solid border-color-border"
  >
    <NuxtLink class="flex flex-col justify-center items-start w-2/3">
      <div class="flex flex-row justify-start items-center">
        <div class="" v-if="tags && Array.isArray(tags)" v-for="(item, index) in tags" :key="index">
          <BlogTag :text="item" />
        </div>
      </div>
      <h3 class="text-white text-3xl mt-4">{{ title }}</h3>
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
    <div class="flex flex-col justify-center items-center max-w-64 w-full h-48 p-4">
      <NuxtImg :src="img" class="w-full h-full rounded-xl object-cover" />
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  scale: 1;
  transition: all 0.5s;
  &:hover {
    scale: 1.01;
  }
}

</style>

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
