<template>
    <div class="h-full flex itesm-center justify-center w-full">
        <h1 class="text-xl brico-800">
            Admin Show Network
        </h1>
    </div>
</template>
<script setup lang="ts">
const users = ref({});
defineProps({
    user: Object,
})
</script>
