<template>
  <section class="bg-dark-bg select-text z-20">
    <Container
      class="flex lg:flex-row flex-col justify-between items-center w-full md:pl-0 pl-4 md:pr-0 pr-4"
    >
      <div
        class="flex flex-col items-start justify-start lg:w-1/3 w-full h-full lg:mb-0 pt-[80px] pb-[80px] lg:mr-16 mr-0"
      >
        <NuxtImg src="/image/navbar/logo2.png" alt="bunny" class="w-20 h-20" />
        <article class="mb-8">
          <h3 class="md:text-[38px] lg:text-[42px] text-[34px] text-white mb-2 leading-tight">
            Другие мои проекты!
          </h3>
          <p class="text-light-text text-[18px] font-extralight">
            Также ознакомьтесь с другими моими проектами. Здесь представлены различные работы, которые могут быть интересны для вас.
          </p>
        </article>
        <ButtonMain text="Мой GitHub" class="md:w-1/2 w-full bg-[#1A1A1A]" to="https://github.com/Softgod4" />
      </div>

      <div class="w-px h-full bg-color-border"></div>

      <div class="lg:w-2/3 w-full h-full grid sm:grid-cols-2 grid-cols sm:grid-rows-2 grid-rows-4 gap-6">
        <PortfolioShowcase
          stars="1"
          title="TwistSpace"
          description="☁️⚡ Twist Space is a powerful yet lightweight web application designed to display and manipulate 3D models in .glb format. Whether you're working on desktop or mobile, the app provides a seamless experience for viewing and interacting with 3D content."
          href="https://github.com/Softgod4/TwistSpace"
        />
        <PortfolioShowcase
          stars="1"
          title="Rust-wasm"
          description="🗓️ The Rust-WASM Todo List is a simple web application demonstrating the integration of Rust and WebAssembly (WASM) to manage tasks. Built with Rust for high performance and safety, this project showcases how to leverage Rust in web development, moving beyond traditional JavaScript implementations."
          href="https://github.com/Softgod4/Rust-wasm"
        />
        <PortfolioShowcase
          stars="1"
          title="Ryo Yamada Bot"
          description="Ryo Yamada Bot is a Telegram bot designed to provide a variety of functionalities, including sending both NSFW (Not Safe for Work) and SFW (Safe for Work) images, replying to messages, and continuously updating its functionality."
          href="https://github.com/Softgod4/Ryo-Yamada-bot"
        />
        <PortfolioShowcase
          stars="1"
          title="frontend-consalting"
          description="repository for a web engineer vacancy, using React, GSAP, Zustand, Scss, and more. One of my big project"
          href="https://github.com/Softgod4/frontend-consalting"
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
@import "/assets/css/_mixins.scss";
  section {
    background: url('/image/portfolio/background.png');
    @include background();
  }
</style>
