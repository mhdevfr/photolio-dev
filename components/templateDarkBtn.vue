<template>
  <div class="w-full flex items-center justify-center mt-10"> 
    <button
      @click="!isDark"
      class="flex items-center absolute p-4 justify-around brico-200 text-3xl px-4 py-3 bg-gray-50 shadow-lg text-slate-900 dark:bg-gray-900 dark:text-gray-50 rounded-lg"
    >
      Set {{ isDark ? "Light" : "Dark" }}
      <Icon name="line-md:moon-filled" class="size-8" style="color: #151514" />
    </button>
  </div>
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
