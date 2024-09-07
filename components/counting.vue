<template>
    <h1
      class="text-[200px] font-semibold mt-6 text-center bg-gradient-to-r from-blue-400 via-violet-400 to-orange-200 text-transparent bg-clip-text bg-300% animate-gradient"
      ref="countElement"
    >
      {{ currentCount }}
    </h1>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentCount = ref(0);
  const endVal = 120;
  const duration = 2000; 
  const countElement = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 }); 
  
    if (countElement.value) {
      observer.observe(countElement.value);
    }
  });
  
  function startCounting() {
    let start = 0;
    const increment = endVal / (duration / 100);
  
    const counterInterval = setInterval(() => {
      if (currentCount.value < endVal) {
        currentCount.value = Math.min(currentCount.value + increment, endVal);
      } else {
        clearInterval(counterInterval);
      }
    }, 100);
  }
  </script>
  