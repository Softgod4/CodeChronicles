<template>
  <button
    class="bg-[#141414] text-[#98989A] text-[18px] flex justify-between items-center border border-[#262626] rounded-xl px-[24px] py-[18px] font-light transition-all"
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
