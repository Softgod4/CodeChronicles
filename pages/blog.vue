<template>
  <Container class="border-r border-l border-solid border-color-border grid grid-cols-2 w-full gap-4 bg-banner-bg p-6">
    <div v-if="status === 'pending'" class="text-white text-2xl mt-4 text-center">Loading...</div>
    <div
      v-else-if="posts && Array.isArray(posts)"
      v-for="(item, index) in posts"
      :key="item[index]"
      class="blogPreview"
    >
      <BlogPreview
        :title="posts[index][1]"
        :description="posts[index][2]"
        :likes="Number(posts[index][5])"
        :img="posts[index][6]"
        :tags="posts[index][3]"
        @click="router.push(`posts/${posts[index][0]}`)"
      />
    </div>
    <div v-else class="text-white text-2xl mt-4 text-center">No posts available.</div>
  </Container>
</template>

<style scoped lang="scss">
@import "/assets/css/_mixins.scss";
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { status, data } = await useFetch('/api/getPosts');
const posts = ref(data.value);
const router = useRouter();
</script>
