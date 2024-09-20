<template>
    <div
    class="h-80 w-full bg-gray-100 flex justify-between dark:bg-slate-800 dark:shadow-[0px_0px_10px_0px_#f7fafc] shadow-[0px_0px_10px_0px_#1a202c] mb-6 mr-6 rounded-xl"
  >
    <div
      class="text-slate-900 w-1/2 text-start flex dark:text-gray-50 flex-col p-4"
      v-if="users[0]?.pseudo"
    >
      <h1 class="text-3xl brico-800 underline-offset-8 underline">
        👋 Hey {{ users[0]?.pseudo }} !
      </h1>
      <span class="text-2xl brico-200 mt-8"
        >Located in : {{ users[0]?.country }}</span
      >
      <!-- Pourquoi pas mettre des metiers ou genre des pays ect ect ptites infos quoi-->
      <span class="text-2xl brico-200 mt-1"
        >Working as a : {{ users[0]?.work }}</span
      >
    </div>
    <div v-else>
      <h1 class="text-3xl brico-800 p-4">👋 Hey!</h1>
    </div>
    <div class="h-full rounded-xl w-1/2">
      <img src="../assets/images/lugubre.png" class="h-full w-full p-4" />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>