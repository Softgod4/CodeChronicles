<template>
  <main
    class="text-white flex flex-col lg:flex-row justify-around items-center w-full p-8 bg-banner-bg border-b-2 border-solid border-color-border"
  >
    <div class="w-1/2 text-start">
      <h2 class="md:text-[60px] text-[32px] sm:text-[38px] font-medium mb-6 leading-tight relative">
        Раздел статей 🗓️
      </h2>
      <article class="text-api relative">
        <p class="text-extralight text-[#7E7E81] text-[16px]">
          В этом разделе вы найдете статьи на различные темы, от технических гайдов до личных
          заметок. Все материалы доступны для чтения на этой странице.
        </p>

        <p class="text-extralight text-[#7E7E81] text-[16px] mt-4">
          Сайт позволяет использовать API для добавления новых статей. Правильно, справа показаны
          эндпоинты для API, которые помогут вам интегрировать наш контент в свой проект или
          приложение.
        </p>

        <p class="text-extralight text-[#7E7E81] text-[16px] mt-4">
          Я стремлюсь обеспечить удобство использования API для всех разработчиков. Если у вас есть
          вопросы или нужна помощь, пожалуйста, свяжитесь со мной.
        </p>
      </article>
    </div>

    <div
      class="bg-dark-bg/90 ease-out duration-300 p-6 rounded-md shadow-xl border-2 border-solid border-color-border hover:border-banner-bg hover:shadow-2xl backdrop-blur-sm"
    >
      <h3 class="text-2xl font-bold text-white">API Запросы</h3>

      <p class="text-extralight text-[#7E7E81] text-[18px] mb-6">
        список API-запросов для работы с сайтом:
      </p>

      <div class="mb-4">
        <p class="text-extralight text-white text-[18px] mb-2">1. Получение всех статей:</p>
        <Shiki code="GET http://localhost:3000/api/posts" />
      </div>

      <div class="mb-4">
        <p class="text-extralight text-white text-[18px] mb-2">2. Получение статьи по ID:</p>
        <Shiki code="GET http://localhost:3000/api/posts/{id}" />
      </div>

      <div class="mb-4">
        <p class="text-extralight text-white text-[18px] mb-2">3. Создание новой статьи:</p>
        <Shiki lang="json" code='{"title": "Новая статья", "content": "Текст новой статьи..."}' />
      </div>

      <div class="mb-4">
        <p class="text-extralight text-white text-[18px] mb-2">
          4. Обновление существующей статьи:
        </p>
        <Shiki
          lang="json"
          code='{"title": "Обновленная статья", "content": "Обновленный текст статьи..."}'
        />
      </div>
    </div>
  </main>
</template>

<script scoped setup lang="ts">
import gsap from 'gsap';

const animProperties = {
  ease: 'power1.inOut',
  duration: 0.5,
  stagger: {
    each: 0.5
  }
};

onMounted(() => {
  gsap.from('h2', {
    opacity: 0,
    top: '-50px',
    ...animProperties
  });
  gsap.from('.text-api', {
    opacity: 0,
    left: '-50px',
    ...animProperties
  });
});
</script>
