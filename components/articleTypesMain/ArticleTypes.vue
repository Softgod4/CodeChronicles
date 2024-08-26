<script setup lang="ts">
import ArticleType from './ArticleType.vue';
</script>

<template>
  <section class="bg-dark-bg w-full py-[52px] border-t border-b-2 border-solid border-t-color-border border-b-[#333333] overflow-x-auto	">
    <Container class="flex justify-between items-center">
        <ArticleType text="Обучающие статьи" image="/icons/framer.svg"/>
        <ArticleType text="Обзоры технологий" image="/icons/nuxt.svg"/>
        <ArticleType text="Разбор ошибок и проблем" image="/icons/react.png"/>
        <ArticleType text="Советы и трюки" image="/icons/sass.png"/>
        <ArticleType text="Новости и тренды" image="/icons/svelte.png"/>
        <ArticleType text="Обзоры проектов" image="/icons/vite.png"/>
    </Container>
  </section>
</template>
