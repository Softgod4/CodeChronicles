<template>
  <BlogContent>
    <h1>page {{ id }}</h1>
  </BlogContent>
</template>

<script setup lang="ts">
const route = useRoute();
const id: string | string[] = route.params.id;
</script>
