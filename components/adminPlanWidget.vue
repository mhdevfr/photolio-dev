<template>
  <nuxt-link to="/">
    <div
      class="card bg-slate-600 w-96 h-96 flex items-center justify-around flex-col rounded-lg shadow-lg"
    >
      <h2 class="text-3xl brico-800 font-bold flex items-center">{{ title }}</h2>
      <p class="text-lg brico-200 w-3/4">{{ content }}</p>
      <button class="py-2 px-3 bg-green-400 rounded-full hover:opacity-75 transition-all">Get more infos</button>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  content: String,
  intit: String,
});
</script>
