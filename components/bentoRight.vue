<template>
    <h1
      class="text-[200px] font-semibold mt-6 text-center bg-gradient-to-r from-blue-400 via-violet-400 to-orange-200 text-transparent bg-clip-text bg-300% animate-gradient"
    >
      <CountUp :end="120" :duration="2" />
    </h1>
  </template>
  
  <script setup>
  import { CountUp } from 'vue3-countup'
  </script>