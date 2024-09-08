<template>
  <Container class="border-r border-l border-solid border-color-border">
    <BlogApiReference/>
    <!-- Статьи -->
    <div class="grid grid-cols-2 w-full gap-4 bg-banner-bg p-6">
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
          @click="router.push(`article/${posts[index][0]}`)"
        />
      </div>
      <div v-else class="text-white text-2xl mt-4 text-center">No posts available.</div>
    </div>
  </Container>
</template>

<style scoped lang="scss">
@import '/assets/css/_mixins.scss';
@import '../assets/css/colors';

code {
  font-family: MyFancyCustomFont, monospace;
  font-size: inherit;
  background-color: $black-desc;
  border-radius: 0.25rem;
  padding: 4px;
}

main {
  background: url('/image/portfolio/background.png');
  @include background();
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.blogPreview', {
    duration: 0.4,
    opacity: 0,
    filter: 'blur(5px)'
  })
})

const { status, data } = await useFetch('/api/posts');
const posts = ref(data.value);
const router = useRouter();
</script>
