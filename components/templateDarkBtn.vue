<template>
  <button
    color="gray"
    class="mt-2 dark:text-white text-gray-800 brico-800 text-start flex items-start justify-start p-3 w-full"
    variant="ghost"
    aria-label="Theme"
    @click="isDark = !isDark"
    v-motion-fade-visible
  >
    <Icon :name="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
      class="animate-pulse"
      size="24"
    />

  

    <span class="ml-2 text-sm font-medium brico-800">{{
      isDark ? "Light" : "Dark"
    }}</span>
  </button>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
