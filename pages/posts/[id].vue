<template>
  <h1>page {{ id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute();
const id: string | string[] = route.params.id;
</script>
