<template>
    <section class="mt-32 mx-auto max-w-screen-xl pb-4 px-4 items-center">
      <div class="space-y-6 flex-1">
        <h1 class="text-neutral-900 font-bold text-5xl">
          Kaito Yamato
        </h1>
        <p class="text-neutral-500 max-w-xl text-lg leading-relaxed">
          Hi I’m Kaito I’m a japanese photographer, I’ve work for most of the populars news papers editor as a photographer since 25 beautiful years.
        </p>
        <div class="space-y-2">
          <templateHeroBtn></templateHeroBtn>
          <templateHeroBtn2></templateHeroBtn2>
        </div>
      </div>
      
      <div class="flex-1 text-center mt-8 space-y-4">
        <img src="../assets/images/marquee4.png" class="w-full mx-auto" />
        <img src="../assets/images/marquee2.png" class="w-full mx-auto" />
        <img src="../assets/images/marquee.png" class="w-full mx-auto" />
      </div>
  
     
      <div class="flex justify-between items-center mt-4">
        <h1 class="text-neutral-900 font-bold text-3xl">
          Recents work
        </h1>
        <NuxtLink to="#" class="text-neutral-500 hover:text-neutral-900 text-2xl font-semibold underline flex items-center">
          View all
          <TemplateArrow></TemplateArrow>
        </NuxtLink>
      </div>
  
      <div class="flex-1 text-center mt-6 space-y-4">
        <img src="../assets/images/street.jpg" class="w-full h-[280px] mx-auto rounded-xl" />
      </div>
  
      <div class="space-y-6 flex-1 mt-4">
        <h1 class="text-neutral-900 font-bold text-4xl">
          About me
        </h1>
        <p class="text-neutral-500 max-w-xl text-lg leading-relaxed">
          Hi I’m Kaito I’m a japanese photographer, I’ve work for most of the populars news papers editor as a photographer since 25 beautiful years.
        </p>
      </div>
    </section>
  </template>
  
  
  <script setup lang="ts"></script>