<script setup lang="ts">
const items = [
  {
    title: "Free 🥳",
    content:
      "Perfect for beginners looking to showcase their work with a simple and effective portfolio",
    link: "/#plans",
    intit: "Get Started",
  },
  {
    title: "Hobby 📸",
    content:
      "Ideal for passionate photographers who want to take their hobby to the next level",
    link: "/#plans",
    intit: "Get Started",
  },
  {
    title: "Premium ✨",
    content:
      "Better if you are a photographer that want to skyrocket your customers number",
    link: "/#plans",
    intit: "Get Started",
  },
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-12',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-12',
    }"
    arrows
    class="w-96 h-96 bg-gray-50 dark:bg-slate-900 rounded-xl"
  >
    <AdminPlanWidget :title="item.title" :content="item.content" />
  </UCarousel>
</template>
