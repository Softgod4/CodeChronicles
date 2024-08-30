<template>
  <Container class="h-lvh border-r border-l border-solid border-color-border">
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="posts && Array.isArray(posts)">
      <BlogPreview
        preview="/test/macbook.jpg"
        :title="posts[0]"
        :description="posts[1]"
        :likes="Number(posts[2])"
        :bookmarks="Number(posts[3])"
      />
    </div>
    <div v-else>No posts available.</div>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { status, data } = await useFetch('/api/getPosts');
const posts = ref(data.value);
</script>
