<template>
  <TresCanvas class="z-0 !h-[600px] select-none">
    <TresMesh ref="model">
      <Suspense>
        <ModelScene scale="3" position-x="0.2" position-y="-0.2"/>
      </Suspense>
    </TresMesh>
    <TresDirectionalLight
      color="#F78B3D"
      :position="[1, 2, 1]"
      :intensity="2"
    />
    <TresAmbientLight :intensity="4" />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import ModelScene from './ModelScene.vue';
import gsap from 'gsap';

gsap.registerPlugin();

let model = shallowRef(null);

watchEffect(() => {
  if (model.value) {
    gsap.to(model.value.rotation, {
      y: 2 * Math.PI,
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }
});
</script>
