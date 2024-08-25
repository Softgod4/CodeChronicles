<template>
	<TresCanvas window-size class="z-0">
		<TresMesh ref="model">
			<Suspense>
				<ModelScene scale="2" />
			</Suspense>
		</TresMesh>
		<TresDirectionalLight
			color="#F78B3D"
			:position="[1, 2, 1]"
			:intensity="2"
		/>
		<TresAmbientLight :intensity="5" />
	</TresCanvas>
</template>

<script setup lang="ts">
	import { TresCanvas } from "@tresjs/core";
	import ModelScene from "../components/ModelScene.vue";
	import TresPerspectiveCamera from "@tresjs/core";
	import gsap from "gsap";

	gsap.registerPlugin();

	let model = shallowRef(null);

	watchEffect(() => {
		if (model.value) {
			gsap.from(model.value.position, {
				y: 1,
				x: -2,
				duration: 4,
			});
			gsap.to(model.value.rotation, {
				y: 2 * Math.PI,
				repeat: -1,
				duration: 15,
				ease: "none",
			});
		}
	});
</script>
