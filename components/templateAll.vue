<template>
  <div class="">
    <div v-for="image in images" class="w-96 h-96">

    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  user: Object,
  images: Array,
});
</script>
