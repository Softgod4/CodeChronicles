<template>
  <nav
    class="sticky top-0 w-full bg-[#1A1A1A] text-white py-[8px] z-50 border-b border-solid border-color-border flex justify-center items-center"
    id="navbar"
  >
    <Container
      class="w-full flex justify-between items-center xl:px-[162px] px-[12px]"
    >
      <NavbarLogo name="CodeChronicles" version="v 1.0.0" />

      <ul class="xl:flex hidden justify-between items-center text-[18px]">
        <NavbarLink text="Главная" />
        <NavbarLink text="Новости" />
        <NavbarLink text="Продукты" />
        <NavbarLink text="Ресурсы" />

        <span class="bg-color-border w-[1px] h-6 mx-4"></span>

        <li class="px-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <NuxtImg
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
            <NuxtImg
              src="/image/navbar/discord.svg"
              alt="Discord"
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>
    </Container>
  </nav>
</template>

<script lang="ts">
import gsap from 'gsap';

export default {
  mounted() {
    const logoElement = document.getElementById('logo');

    const animProperties = {
      ease: 'power1.inOut',
      duration: 0.2,
      stagger: {
        each: 0.25
      }
    };

    if (logoElement) {
      const animation = gsap.to('#logoBumb', {
        paused: true,
        scale: 1.3,
        rotate: 8,
        ...animProperties
      });

      logoElement.addEventListener('mouseenter', () => animation.play());
      logoElement.addEventListener('mouseleave', () => animation.reverse());
    }
  }
};
</script>
