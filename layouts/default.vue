<script setup lang="ts">
import Navbar from '~/components/navbar/Navbar.vue';
import TopBanner from '~/components/TopBanner.vue';
import Footer from '~/components/Footer.vue';
</script>

<template>
  <div>
    <TopBanner />
    <Navbar />
    <NuxtPage />
    <Footer/>
  </div>
</template>