<template>
  <nav class="flex items-center justify-between py-6 px-4 md:px-4 lg:px-4">
    
    <h1 class="text-3xl font-bold text-gray-100">Kaito.</h1>

    
    <button 
      @click="toggleMenu" 
      class="text-gray-100 text-3xl md:hidden focus:outline-none"
    >
      <Icon name="mdi:menu" />
    </button>

   
    <ul class="hidden md:flex space-x-10 text-lg">
      <li>
        <NuxtLink to="/" class="text-gray-100 hover:text-gray-300">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/gallery" class="text-gray-100 hover:text-gray-300">Gallery</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="text-gray-100 hover:text-gray-300">Contact</NuxtLink>
      </li>
    </ul>

    
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-white/15 backdrop-blur-[6px] flex flex-col items-center justify-center space-y-10 text-3xl text-grey-100 z-50 transition-all duration-300 ease-in-out"
    >
      <button 
        @click="toggleMenu" 
        class="absolute top-6 right-6 text-4xl text-gray-100 focus:outline-none"
      >
        <Icon name="mdi:close" />
      </button>

      <NuxtLink 
        @click="toggleMenu" 
        to="/" 
        class="hover:text-gray-300 transition"
      >
        Home
      </NuxtLink>
      <NuxtLink 
        @click="toggleMenu" 
        to="/gallery" 
        class="hover:text-gray-300 transition"
      >
        Gallery
      </NuxtLink>
      <NuxtLink 
        @click="toggleMenu" 
        to="/contact" 
        class="hover:text-gray-300 transition"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';


const isMenuOpen = ref(false);


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};


const isDesktop = ref(window.innerWidth >= 768);

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
  if (isDesktop.value) isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

ul {
  transition: all 0.3s ease-in-out;
}


.fixed {
  transition: backdrop-filter 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
</style>
