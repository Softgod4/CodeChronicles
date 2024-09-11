<template>
  <div v-if="status === 'pending'" class="text-white text-2xl mt-4 text-center">Loading...</div>
  <section v-else-if="post && Array.isArray(post)">
    <Container class="border-r border-l border-solid border-color-border p-4 text-white">
      <article
        class="font-medium mb-2 flex md:flex-row flex-col-reverse justify-between md:items-center items-start"
      >
        <div class="md:w-1/2 w-full post-preview relative">
          <h1 class="md:text-[40px] text-[32px] sm:text-[38px] mb-2 leading-none">
            {{ post[0][1] }}
          </h1>
          <p class="text-extralight text-[#7E7E81] text-[16px] mb-4">{{ post[0][2] }}</p>
          <div class="flex items-center mb-6">
            <div
              v-if="post[0][3] && Array.isArray(post[0][3])"
              v-for="(item, index) in post[0][3]"
              :key="index"
            >
              <BlogTag :text="item" />
            </div>
          </div>
          <button class="like-btn flex justify-center items-start mt-4" @click="handleCheckLike()">
            <NuxtImg src="/test/like.svg" class="w-6 h-6" />
            <span class="ml-2 text-lg text-light-text">{{ post[0][5] }}</span>
          </button>
        </div>
        <div
          class="flex flex-col justify-center items-center md:max-w-64 w-full md:h-48 h-full p-4"
        >
          <NuxtImg :src="post[0][6]" class="w-full h-full rounded-xl object-cover" />
        </div>
      </article>
      <div class="w-full h-[1px] bg-color-border"></div>
      <p class="text-2xl p-4 min-h-lvh">{{ post[0][4] }}</p>
      <div class="flex w-full justify-start items-center text-light-text">
        <p class="mr-4">Создан: {{ post[0][7] }}</p>
        <span class="h-4 w-[1px] bg-color-border"></span>
        <p class="mx-4">Обновлен: {{ post[0][8] }}</p>
        <span class="h-4 w-[1px] bg-color-border"></span>
        <p class="ml-4">Количество лайков: {{ post[0][5] }}</p>
      </div>
    </Container>
  </section>
  <div v-else class="text-white text-2xl mt-4 text-center h-lvh">
    Упс... Статья не найдена.<br />
    Попробуйте вернуться на главную
  </div>
</template>

<script scoped setup lang="ts">
import gsap from 'gsap';

const route = useRoute();
const id: string | string[] = route.params.id;
const { status, data } = await useFetch(`/api/posts/${id}`);
const isPostLiked = useState<boolean>('effect', () => false);
const handleCheckLike = () => {
  isPostLiked.value = !isPostLiked.value;
};

const post = ref(data.value);

const setLike = async () => {
  const { status, data } = await useFetch(`/api/like/${id}`);
  if (status.value === 'success') {
    if (post.value && Array.isArray(post.value) && post.value.length > 0) post.value[0][5]++;
  }
  gsap.to('.like-btn', {
    duration: 0.4,
    scale: 1.1,
    rotate: 4,
    ease: 'back.inOut'
  });
};

const setDislike = async () => {
  const { status, data } = await useFetch(`/api/dislike/${id}`);
  if (status.value === 'success') {
    if (post.value && Array.isArray(post.value) && post.value.length > 0) post.value[0][5]--;
  }
  gsap.to('.like-btn', {
    duration: 0.5,
    scale: 1,
    rotate: 0,
    ease: 'back.inOut'
  });
};

watch(isPostLiked, (newValue, oldValue) => {
  if (newValue) {
    setLike();
  } else {
    setDislike();
  }
});

const animProperties = {
  ease: 'power1.inOut',
  stagger: {
    each: 0.5
  }
};

onMounted(() => {
  gsap.from('.post-preview', {
    filter: 'blur(5px)',
    opacity: 0,
    right: -50,
    ...animProperties
  });
});
</script>
