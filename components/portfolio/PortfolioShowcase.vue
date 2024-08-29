<template>
  <div
    class="flex flex-col justify-start items-start p-4 w-full border border-solid border-[#30363d] rounded-md bg-dark-bg shadow hover:shadom-lg"
  >
    <div class="w-full flex-1">
      <article class="w-full flex justify-between items-center">
        <div class="flex-1 flex justify-start items-center">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="mr-2"
            fill="#8d96a0"
          >
            <path
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
            ></path>
          </svg>
          <a :href="href" class="text-[#4493f8] font-semibold text-[14px] border-b border-solid border-transparent hover:border-[#4493f8] transition-all">{{ title }}</a>
          <span
            class="ml-2 text-[#8d96a0] font-medium border border-solid border-[#30363d] py-[.12em] px-[.5em] rounded-xl"
            >Public</span
          >
        </div>
        <div class="flex-initial">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            fill="#8d96a0"
          >
            <path
              d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            ></path>
          </svg>
        </div>
      </article>
      <p class="mt-[8px] w-full text-[#8d96a0] text-ellipsis overflow-hidden">
        {{ description }}
      </p>
    </div>
    <div class="w-full flex justify-start items-center mt-2 flex-initial">
      <div class="mr-2 relative bg-[#3178c6] rounded-full w-[12px] h-[12px]"></div>
      <span class="text-[#8d96a0] text-[12px]">Typescript</span>
      <a href="github" class="text-[#8d96a0] flex justify-start items-center ml-4">
        <svg
          aria-label="star"
          role="img"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          fill="#8d96a0"
          class="mr-1 cursor-pointer"
        >
          <path
            d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
          ></path>
        </svg>
        {{ stars }}
      </a>
    </div>
  </div>
</template>

<script scoped lang="ts" setup>
defineProps({
  stars: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
});
</script>
