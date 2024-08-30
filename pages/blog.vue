<template>
  <Container class="h-lvh border-r border-l border-solid border-color-border">
    <BlogPreview preview="/test/macbook.jpg" title="Я создал Телеграм бота (FYTT), который ищет Телеграм каналы всех ваших подписок на ютубе. DELUXE-версия статьи" description="Я создал телеграм бота (FYTT), который ищет телеграм каналы всех ваших подписок на ютубе⁠⁠. (Бот на telegraf.js, авторизация через google api, парс ссылок с описания ютуб каналов с помощью https://yt.lemnoslife.com/). +статистика." />
    <pre>

    </pre>
  </Container>
</template>

<script setup lang="ts">
const data = await useFetch('/api/getPosts');
</script>