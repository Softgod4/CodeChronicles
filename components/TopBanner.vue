<template>
  <div
    class="relative top-0 flex justify-center items-center w-full z-40 h-12 border-b-2 border-t-2 border-solid border-color-border"
  >
    <a class="flex justify-center items-center py-5" href="https:/t.me">
      <p class="text-light-text xl:text-sm text-xs">
        Подпишитесь на мой телеграмм для отслеживания последних статей или новостей!
      </p>
      <img
        src="/image/arrow/arrow-topbanner.svg"
        alt="arrow-top-banner"
        class="ml-2 w-6 h-6"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/css/_mixins.scss';
  div {
    background-image: url('/image/topBanner/background.png');
    @include background();
  }
</style>