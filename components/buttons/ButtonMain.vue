<template>
  <NuxtLink
    class="btn bg-dark-bg text-light-text text-[18px] flex justify-between items-center border border-color-border rounded-xl px-[24px] py-[18px] font-light transition-all shadow-md cursor-pointer"
    :to="to"
  >
    {{ text }}
    <NuxtImg src="/image/viewAllButton.svg" alt="view all" class="w-[24px] h-[24px] ml-[10px]" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.btn {
  img {
    transition: all 0.5s;
  }
}
.btn:hover {
  border-color: rgb(30, 30, 30);
  color: #b8b8b8;
  img {
    transform: rotate(90deg);
  }
}
</style>

<script setup scoped lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: false,
    default: '/'
  }
});
</script>
