<template>
  <footer class="relative overflow-hidden">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex justify-center text-black">
        <h1 class="text-5xl text-gray-100 font-bold">Kaito Yamato</h1>
      </div>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <NuxtLink to="/" class="text-gray-100 transition hover:text-gray-200">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery" class="text-gray-100 transition hover:text-gray-200">Gallery</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-gray-100 transition hover:text-gray-200">About me</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-gray-100 transition hover:text-gray-200">Contact</NuxtLink>
        </li>
      </ul>
    </div>


    <div 
      class="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] 
             bg-gradient-to-t from-white/50 to-transparent 
             rounded-full blur-3xl overflow-hidden">
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
