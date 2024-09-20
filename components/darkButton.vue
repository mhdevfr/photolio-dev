<template>
  <UButton
    :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
    color="gray"
    class="rounded-md dark:text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 hover:text-white text-gray-800 brico-800 text-center flex items-center justify-center p-3 mr-3 w-full"
    variant="ghost"
    aria-label="Theme"
    @click="isDark = !isDark"
    v-motion-fade-visible
  >
    DarkMode
  </UButton>
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
