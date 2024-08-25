<template>
  <nav
    class="sticky top-0 w-full bg-[#1A1A1A] text-white py-[8px] z-50 border-b border-solid border-[#262626] flex justify-center items-center"
    id="navbar"
  >
    <div
      class="container w-full flex justify-between items-center xl:px-[162px] px-[12px]"
    >
      <a class="flex justify-center items-center" id="logo" href="#">
        <img
          src="/image/navbar/logo2.png"
          alt="avatar-github"
          class="w-12 h-12 rounded-[30%]"
          id="logoBumb"
        />
        <p class="ml-3 text-white font-semibold text-2xl">CodeChronicles</p>
        <span
          class="px-2 py-1 border border-solid rounded-md border-[#262626] text-[#7E7E81] ml-4"
          >v 1.0.0</span
        >
      </a>

      <ul class="xl:flex hidden justify-between items-center text-[18px]">
        <li
          class="mx-[2px] text-[#7E7E81] font-light py-[8px] px-[24px] border border-solid border-transparent transition-all bg-transparent hover:text-white hover:bg-[#141414] hover:border-[#333333] cursor-pointer rounded-lg"
        >
          <a href="#">Главная</a>
        </li>
        <li
          class="mx-[2px] text-[#7E7E81] font-light py-[8px] px-[24px] border border-solid border-transparent transition-all bg-transparent hover:text-white hover:bg-[#141414] hover:border-[#333333] cursor-pointer rounded-lg"
        >
          <a href="#">Новости</a>
        </li>
        <li
          class="mx-[2px] text-[#7E7E81] font-light py-[8px] px-[24px] border border-solid border-transparent transition-all bg-transparent hover:text-white hover:bg-[#141414] hover:border-[#333333] cursor-pointer rounded-lg"
        >
          <a href="#">Продукты</a>
        </li>
        <li
          class="mx-[2px] text-[#7E7E81] font-light py-[8px] px-[24px] border border-solid border-transparent transition-all bg-transparent hover:text-white hover:bg-[#141414] hover:border-[#333333] cursor-pointer rounded-lg"
        >
          <a href="#">Ресурсы</a>
        </li>

        <span class="bg-[#262626] w-[1px] h-6 mx-4"></span>

        <li class="px-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/image/navbar/github.svg"
              alt="GitHub"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li class="px-4">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <img
              src="/image/navbar/discord.svg"
              alt="Discord"
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import gsap from "gsap";

export default {
  mounted() {
    const logoElement = document.getElementById("logo");

    const animProperties = {
      ease: "power1.inOut",
      duration: 0.2,
      stagger: {
        each: 0.25,
      },
    };

    if (logoElement) {
      const animation = gsap.to("#logoBumb", {
        paused: true,
        scale: 1.3,
        rotate: 8,
        ...animProperties
      });

      logoElement.addEventListener("mouseenter", () => animation.play());
      logoElement.addEventListener("mouseleave", () => animation.reverse());
    }
  },
};
</script>
