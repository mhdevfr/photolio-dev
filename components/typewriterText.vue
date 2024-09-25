<template>
  <div>
    <div
      ref="typewriter"
      class="text-3xl md:text-5xl lg:text-6xl font-semibold p-6 text-slate-950 brico-800"
    ></div>
  </div>
</template>

<script setup lang="ts">
import Typewriter from "typewriter-effect/dist/core";
const typewriter = ref(null);
onMounted(() => {
  const typewriterInstance = new Typewriter(typewriter.value, {
    loop: true,
    delay: 75,
  });
  typewriterInstance
    .typeString("Create your own portfolio...")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Fully customizable...")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Fully responsive...")
    .pauseFor(1500)
    .deleteAll()
    .typeString("in 120 seconds...")
    .pauseFor(1500)
    .start();
});
</script>
