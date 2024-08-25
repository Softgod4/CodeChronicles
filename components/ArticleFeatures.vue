<script setup lang="ts">
import ViewBlogsButton from './buttons/ViewBlogsButton.vue';
</script>

<template>
  <section
    class="w-full gradient border-solid border-t-[#141414] relative py-[80px]"
  >
    <Container class="flex flex justify-between items-center w-full">
      <article>
        <span class="bg-[#333333] py-[6px] px-[10px] rounded text-white"
          >A Knowledge Treasure Trove</span
        >
        <h3 class="text-[58px] font-medium text-white mt-[16px]">
          Explore FutureTech's In-Depth Blog Posts
        </h3>
      </article>
      <ViewBlogsButton text="View all post"/>
    </Container>
  </section>
</template>

<style scoped>
.gradient {
  background: rgb(30, 30, 30);
  background: linear-gradient(deg(90%), #1a1a1a 30%, #111, #262626);
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
