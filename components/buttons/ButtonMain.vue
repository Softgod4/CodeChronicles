<template>
  <button
    class="btn bg-[#141414] text-[#98989A] text-[18px] flex justify-between items-center border border-[#262626] rounded-xl px-[24px] py-[18px] font-light transition-all"
  >
    {{ text }}
    <img
      src="/image/viewAllButton.svg"
      alt="view all"
      class="w-[24px] h-[24px] ml-[10px]"
    />
  </button>
</template>

<script setup lang="ts">

defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

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