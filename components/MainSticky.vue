<template>
  <LoadModel />
  <section class="w-full h-full">
    <Container class="flex items-end">
      <div
        class="sticky left-0 top-0 xl:w-1/2 w-full bg-[#141414]/95 border border-t-[#141414] border-solid border-[#262626] h-auto flex justify-between items-center z-30 flex-col backdrop-blur-md transition-colors border-b-[0px]"
      >
        <article class="p-6 text-white mt-20">
          <p class="text-lg font-normal mb-4 text-[#666666]">
            Добро пожаловать, это блог инженера.
          </p>
          <h1 class="md:text-[60px] text-[48px] font-medium mb-6">
            Добро пожаловать в CodeChronicles
          </h1>
          <p class="text-extralight text-[#7E7E81] text-[16px]">
            меня зовут Александр Софтов, здесь яделюсь опытом и знаниями не только о
            фронтенд разработке, но и о всём, что связано с IT. Статьи о деплое,
            бэкенде, VPN и многом другом помогут вам разобраться в мире
            технологий. Присоединяйтесь!
          </p>
        </article>

        <div class="flex justify-between items-center w-full">
          <MainStickyTile
            stats="1"
            description="Статья написана"
            class="border-r"
          />
          <MainStickyTile stats="0" description="Лайков поставлено" />
          <MainStickyTile stats="0" description="Просмотров" class="border-l" />
        </div>
      </div>
      <div
        class="last-article relative bottom-0 left-0 ml-[40px] mb-[40px] xl:flex hidden flex flex-col justify-center items-start"
      >
        <p class="text-[#98989A] text-[16px] mb-[14px]">
          Обязательно ознакомьтесь с последней статьей!
        </p>
        <ButtonMain text="Последняя статья" class="h-[62px]" />
      </div>
    </Container>
  </section>
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
import MainStickyTile from './tiles/MainStickyTile.vue';
</script>
