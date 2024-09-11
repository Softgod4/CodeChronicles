<template>
  <Container class="relative">
    <LoadModel />
    <section class="w-full h-full absolute top-0">
      <div
        class="h-full left-0 top-0 xl:w-1/2 w-full bg-dark-bg/95 border border-t-dark-bg border-solid border-color-border flex justify-between items-center z-30 flex-col backdrop-blur-md transition-colors border-b-[0px]"
      >
        <article class="p-6 text-white md:mt-12 mt-2">
          <p class="text-lg font-semibold mb-4 text-[#666666]">
            Добро пожаловать, это блог инженера.
          </p>
          <h1 class="md:text-[60px] text-[32px] sm:text-[38px] font-medium mb-6 leading-tight">
            Добро пожаловать в CodeChronicles
          </h1>
          <p class="text-extralight text-[#7E7E81] text-[16px]">
            Меня зовут Александр Софтов, здесь я делюсь опытом и знаниями не только о фронтенд
            разработке, но и о всём, что связано с IT. Статьи о деплое, бэкенде, VPN и многом другом
            помогут вам разобраться в мире технологий. Присоединяйтесь!
          </p>
        </article>

        <div class="flex flex-row justify-between items-center w-full">
          <MainWelcomeTile stats="1" description="Статей" class="border-r" />
          <MainWelcomeTile stats="0" description="Лайков" />
          <MainWelcomeTile stats="0" description="Просмотров" class="border-l" />
        </div>
      </div>
    </section>
  </Container>
</template>

<style scoped lang="scss">
.last-article {
  p {
    color: #141414;
    transition: all 0.5s;
  }

  &:hover {
    p {
      color: gray;
      opacity: 1;
    }
  }
}
</style>

<script setup lang="ts">
import ButtonMain from './buttons/ButtonMain.vue';
import MainWelcomeTile from './tiles/MainWelcomeTile.vue';
import LoadModel from './3D/LoadModel.vue';

onNuxtReady(async () => {
  const { status, data } = await useFetch(`/api/posts`);
  if (data.value && Array.isArray(data.value) && data.value.length > 0) {
    console.log(data.value[0][0]);
    console.log(data.value);
  }
});
</script>
