<template>
  <Container class="h-lvh border-r border-l border-solid border-color-border">
    <div v-if="status === 'pending'">Loading...</div>
    <div
      v-else-if="posts && Array.isArray(posts)"
      v-for="(item, index) in posts"
      :key="item[index]"
    >
      <BlogPreview
        :title="posts[index][1]"
        :description="posts[index][2]"
        :likes="Number(posts[index][5])"
        :img="posts[index][8]"
        :tags="posts[index][3]"
        @click="router.push(`posts/${posts[index][0]}`)"
      />
    </div>
    <div v-else>No posts available.</div>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { status, data } = await useFetch('/api/getPosts');
const posts = ref(data.value);
const router = useRouter();
</script>
