<template>
  <section
    class="w-full gradient border-solid border-t-dark-bg relative py-[40px] md:pl-0 pl-4 md:pr-0 pr-4 border-b border-t border-solid border-color-border shadow-md"
  >
    <Container class="flex md:flex-row flex-col justify-between md:items-center items-start w-full">
      <article @mouseenter="() => toggleEffect()" @mouseleave="() => toggleEffect()">
        <span class="bg-[#333333] py-[6px] px-[10px] rounded text-white"
          >Здесь постоянно что-то новое</span
        >
        <h3
          class="md:text-[38px] lg:text-[42px] sm:text-[34px] text-[28px] font-medium text-white mt-[16px]"
        >
          Отслеживайте новые статьи!
        </h3>
        <p class="font-extralight text-[#7E7E81] sm:text-[34px] text-[18px] opacity-1">
          стараюсь писать их как можно чаще<span class="animation opacity-0">, честно!</span>
        </p>
      </article>
      <ButtonMain text="Смотреть все статьи" class="md:mt-0 mt-[20px]" to="/blog" />
    </Container>
  </section>
</template>

<script setup lang="ts" scoped>
import ButtonMain from './buttons/ButtonMain.vue';
import gsap from 'gsap';

const effect = useState<boolean>('effect', () => false);
const toggleEffect = () => {
  effect.value = !effect.value;
};

watch(effect, (oldValue, newValue) => {
  if (newValue) {
    gsap.to('.animation', {
      opacity: 0
    });
  } else {
    gsap.to('.animation', {
      opacity: 1
    });
  }
});
</script>

<style scoped lang="scss">
.gradient {
  background: rgb(30, 30, 30);
  background: -moz-linear-gradient(80deg, rgba(30, 30, 30, 1) 0%, rgba(38, 38, 38, 1) 100%);
  background: -webkit-linear-gradient(80deg, rgba(30, 30, 30, 1) 0%, rgba(38, 38, 38, 1) 100%);
  background: linear-gradient(80deg, rgba(30, 30, 30, 1) 0%, rgba(38, 38, 38, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e1e1e",endColorstr="#262626",GradientType=1);
}
</style>

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
