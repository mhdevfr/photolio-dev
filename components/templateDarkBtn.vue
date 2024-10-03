<template>
  <button
    color="gray"
    class="dark:text-white text-gray-800 brico-800 text-start flex items-center justify-start p-3 w-full"
    variant="ghost"
    aria-label="Theme"
    @click="isDark = !isDark"
    v-motion-fade-visible
  >
    <Icon
      :name="isDark ? 'game-icons:striped-sun' : 'i-heroicons-moon-20-solid'"
      class=""
      size="32"
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
