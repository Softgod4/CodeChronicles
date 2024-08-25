<template>
  <section
    class="w-full gradient border-solid border-t-[#141414] relative py-[60px] md:pl-0 pl-4"
  >
    <Container
      class="flex md:flex-row flex-col justify-between md:items-center items-start w-full"
    >
      <article
        @mouseover="() => toggleEffect()"
        @mouseout="() => toggleEffect()"
      >
        <span class="bg-[#333333] py-[6px] px-[10px] rounded text-white"
          >Также можете найти статьи по темам</span
        >
        <h3 class="md:text-[52px] text-[34px] font-medium text-white mt-[16px]">
          Отслеживайте новые статьи!<br />
          <span class="animation">стараюсь писать их как можно чаще</span>
        </h3>
      </article>
      <ButtonMain text="Смотреть все статьи" class="md:mt-0 mt-[30px]" />
    </Container>
  </section>
</template>

<style scoped lang="scss">
.gradient {
  background: rgb(30, 30, 30);
  background: linear-gradient(deg(90%), #1a1a1a 30%, #111, #262626);
}
</style>

<script setup lang="ts" scoped>
import ButtonMain from './buttons/ButtonMain.vue';
import gsap from 'gsap';

const effect = useState<boolean>('effect', () => false);
const toggleEffect = () => {
  effect.value = !effect.value;
};

onUpdated(() => {
  if (effect.value === false) {
    gsap.to('.animation', {
      opacity: 0
    })
  }
})
</script>

<!-- <template>
  <section>
    <Container>
      <div class="flex justify-between items-center w-full">
        <article
          class="flex flex-col justify-center items-start py-[50px] px-[19.5px] border-t border-l border-solid border-[#262626] w-full"
        >
          <img
            src="/image/features/Icon1.svg"
            alt="icon1"
            class="w-[50px] h-[50px]"
          />
          <div class="flex justify-between items-center w-full">
            <article>
              <h2 class="text-white">Latest News Updates</h2>
              <p class="text-[#7E7E81]">Stay Current</p>
            </article>
            <button>
              <img src="/image/features/Button.svg" alt="button" />
            </button>
          </div>
          <p class="text-[#98989A]">Over 1,000 articles published monthly</p>
        </article>

        <article
          class="flex flex-col justify-center items-start py-[50px] px-[20px] border-t border-solid border-[#262626] w-full"
        >
          <img
            src="/image/features/Icon1.svg"
            alt="icon1"
            class="w-[50px] h-[50px]"
          />
          <div class="flex justify-between items-center w-full">
            <article>
              <h2 class="text-white">Latest News Updates</h2>
              <p class="text-[#7E7E81]">Stay Current</p>
            </article>
            <button>
              <img src="/image/features/Button.svg" alt="button" />
            </button>
          </div>
          <p class="text-[#98989A]">Over 1,000 articles published monthly</p>
        </article>

        <article
          class="flex flex-col justify-center items-start py-[50px] px-[20px] border-t border-solid border-[#262626] w-full"
        >
          <img
            src="/image/features/Icon1.svg"
            alt="icon1"
            class="w-[50px] h-[50px]"
          />
          <div class="flex justify-between items-center w-full">
            <article>
              <h2 class="text-white">Latest News Updates</h2>
              <p class="text-[#7E7E81]">Stay Current</p>
            </article>
            <button>
              <img src="/image/features/Button.svg" alt="button" />
            </button>
          </div>
          <p class="text-[#98989A]">Over 1,000 articles published monthly</p>
        </article>
      </div>
    </Container>
  </section>
</template> -->
