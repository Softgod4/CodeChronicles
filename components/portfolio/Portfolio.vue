<template>
  <section class="bg-dark-bg select-text z-20">
    <Container
      class="flex md:flex-row flex-col justify-around items-start w-full md:pl-0 pl-4 md:pr-0 pr-4"
    >
      <div
        class="flex flex-col items-start justify-start md:w-1/2 w-full h-full md:mb-0 border-r border-solid border-color-border pt-[80px] pb-[80px]"
      >
        <NuxtImg src="/image/navbar/logo2.png" alt="" class="w-20 h-20" />
        <article class="mb-8">
          <h3 class="md:text-[38px] lg:text-[42px] text-[34px] text-white mb-2">
            Самая популярная статья
          </h3>
          <p class="text-light-text text-[18px] font-extralight">
            Статья, которая набрала наибольшее количество лайков и комментариев
          </p>
        </article>
        <ButtonMain text="Читать статью" class="md:w-1/2 w-full bg-[#1A1A1A]" />
      </div>

      <div
        class="grid grid-cols-2 grid-rows-2 gap-12 justify-center items-center pt-[80px] pb-[80px] w-1/2"
      >
        <PortfolioShowcase
          img="/image/screenshots/screenshot1.png"
          title="Пример названия статьи"
          description="Долгое большое"
        />
        <PortfolioShowcase
          img="/image/screenshots/screenshot2.png"
          title="Пример названия статьи"
          description="Долгое большое"
        />
        <PortfolioShowcase
          img="/image/screenshots/screenshot3.png"
          title="Пример названия статьи"
          description="Долгое большое"
        />
      </div>
    </Container>
  </section>
</template>

<script lang="ts" scoped setup>
import ButtonMain from '../buttons/ButtonMain.vue';
import PortfolioShowcase from './PortfolioShowcase.vue';
</script>

<style scoped lang="scss">
.gradient {
  background: rgb(30, 30, 30);
  background: linear-gradient(deg(90%), #1a1a1a 30%, #111, #262626);
}
</style>
