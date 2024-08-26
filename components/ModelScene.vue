<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene: model } = await useGLTF("/models/moon.glb");
</script>

<template>
  <primitive :object="model" />
</template>