<template>
  <BlogContent>
    <div v-if="status === 'pending'" class="text-white text-2xl mt-4 text-center">Loading...</div>
    <article
      class="md:text-[60px] text-[32px] sm:text-[38px] font-medium mb-6 leading-tight text-white"
      v-else-if="post && Array.isArray(post)"
    >
      <h1>{{ post[0][1] }}</h1>
      <p>{{ post[0][2] }}</p>
      <p>{{ post[0][3] }}</p>
      <p>{{ post[0][4] }}</p>
      <p>{{ post[0][5] }}</p>
      <p>{{ post[0][6] }}</p>
      <p>{{ post[0][7] }}</p>
      <p>{{ post[0][8] }}</p>
    </article>
    <div v-else class="text-white text-2xl mt-4 text-center">No information available.</div>
  </BlogContent>
</template>

<script setup lang="ts">
const route = useRoute();
const id: string | string[] = route.params.id;
const { status, data } = await useFetch(`/api/posts/${id}`);

console.log(data.value);
const post = ref(data.value);
</script>
