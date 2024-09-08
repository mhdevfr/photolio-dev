<script setup lang="ts">

const items = [
  {
    label: "Drop your picture",
    icon: "i-heroicons-information-circle",
  },
  {
    label: "Make a quick description",
    icon: "i-heroicons-arrow-down-tray",
  },
  {
    label: "Options",
    icon: "i-heroicons-eye-dropper",
  },
];

const selectedIndex = ref(0);
</script>

<template>
  <!-- Tabs -->
  <UTabs v-model:selected="selectedIndex" :items="items" class="w-full">
    <template #default="{ item, index, selected }">
      <span
        class="truncate"
        :class="[selected && 'text-primary-500 dark:text-primary-400']"
        >{{ index + 1 }}. {{ item.label }}</span
      >
    </template>
  </UTabs>
  <div class="mt-6">
    <AdminTab1Component v-if="selectedIndex === 0" />
    <AdminTab2Component v-if="selectedIndex === 1" />
    <AdminTab3Component v-if="selectedIndex === 2" />
  </div>
</template>