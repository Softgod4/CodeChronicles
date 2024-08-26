<template>
  <li
    class="mx-[2px] text-[#7E7E81] font-light py-[8px] px-[24px] border border-solid border-transparent transition-all bg-transparent hover:text-white hover:bg-dark-bg hover:border-[#333333] cursor-pointer rounded-lg"
  >
    <a href="#">{{ text }}</a>
  </li>
</template>

<script lang="ts" setup>
defineProps({
    text: {
      type: String,
      required: true
    }
});
</script>