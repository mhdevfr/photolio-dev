<template>
  <section class="mt-32 mx-auto max-w-screen-xl pb-4 px-4">
    <div class="space-y-6 flex-1">
      <h1 class="text-neutral-900 font-bold text-5xl md:text-6xl lg:text-8xl lg:text-center">
        {{ users[0]?.pseudo }}
      </h1>
      <p
        class="text-neutral-500 max-w-xl text-lg leading-snug md:text-2xl lg:text-center lg:max-w-3xl lg:mx-auto"
      >
        {{ users?.biography }}
      </p>
      <div
        class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 lg:justify-center"
      >
        <templateHeroBtn></templateHeroBtn>
        <templateHeroBtn2></templateHeroBtn2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-8 lg:mt-32">
      <img src="../assets/images/marquee4.png" class="w-full mx-auto" />
      <img src="../assets/images/marquee2.png" class="w-full mx-auto" />
      <img src="../assets/images/marquee.png" class="w-full mx-auto" />
      <img src="../assets/images/marquee3.png" class="w-full mx-auto" />
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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-6">
      <img src="../assets/images/street.jpg" class="w-full h-[280px] mx-auto rounded-xl" />
    </div>

    <div class="space-y-6 flex-1 mt-4">
      <h1 class="text-neutral-900 font-bold text-4xl">
        About me
      </h1>
      <p class="text-neutral-500 max-w-xl text-lg leading-relaxed">
        {{ user?.biography }}
      </p>
    </div>
  </section>
  <TemplateFooter/>
</template>

<script setup lang="ts">
const props = defineProps({
  users: Object as PropType<User>,
  photos: Array as PropType<Photo[]>,
});
</script>