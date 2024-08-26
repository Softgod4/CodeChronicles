<template>
  <section class="pt-[80px] pb-[80px] bg-[#141414] select-text z-20">
    <Container class="flex md:flex-row flex-col justify-around items-center w-full md:pl-0 pl-4 md:pr-0 pr-4">
      <div class="flex flex-col items-start justify-start md:w-1/3 w-full h-full md:mb-0 mb-14">
        <img src="/image/navbar/logo2.png" alt="" class="w-20 h-20" />
        <article class="mb-8">
          <h3 class="md:text-[38px] lg:text-[42px] text-[34px] text-white mb-2">
            Самая популярная статья
          </h3>
          <p class="text-[#98989A] text-[18px] font-extralight">
            Статья, которая набрала наибольшее количество лайков и комментариев
          </p>
        </article>
        <ButtonMain text="Читать статью" class="md:w-1/2 w-full bg-[#1A1A1A]" />
      </div>

      <div
        class="banner flex flex-col justify-center items-center p-2 rounded-md gradient border-2 border-solid border-[#262626] relative"
      >
        <img
          src="/image/last-article.webp"
          alt="article"
          class="md:w-[420px] w-full md:h-[420px] h-full rounded"
        />
        <article
          class="absolute bottom-0 p-4 bg-[#1e1e1e]/95 backdrop-blur-md border-t border-solid border-[#262626] w-full"
        >
          <p class="text-[#98989A] text-[16px] font-light mb-2">
            Системное администрирование
          </p>
          <h4 class="text-white font-semibold text-[20px]">
            Учимся делать свой собственный впн, используя X-UI на личном сервере
          </h4>
          <div
            class="mt-6 mb-2 grid grid-rows-1 grid-col-4 grid-flow-col gap-2 justify-start"
          >
            <ArticleTag text="DevOps" backgroundColor="#CD5B45" />
            <ArticleTag text="VPN" backgroundColor="#89acf0" />
            <ArticleTag text="Linux" backgroundColor="#40ff40" />
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.gradient {
  background: rgb(30, 30, 30);
  background: linear-gradient(deg(90%), #1a1a1a 30%, #111, #262626);
}
</style>

<script lang="ts" scoped setup>
import ArticleTag from './ArticleTag.vue';
import ButtonMain from './buttons/ButtonMain.vue';
</script>
