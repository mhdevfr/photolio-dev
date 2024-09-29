<template>
  <section class="mt-32 mx-auto max-w-screen-xl pb-4 px-4">
    
    <div class="space-y-6 flex-1">
      <h1 class="text-neutral-900 font-bold text-5xl md:text-6xl lg:text-8xl lg:text-center">
        {{ user?.pseudo }}
      </h1>
      <p class="text-neutral-500 max-w-xl text-lg leading-snug md:text-2xl lg:text-center lg:max-w-3xl lg:mx-auto">
        Hi I’m Kaito I’m a japanese photographer, I’ve worked for most of the popular newspapers as a photographer for 25 beautiful years.
      </p>
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 lg:justify-center">
        <templateHeroBtn></templateHeroBtn>
        <templateHeroBtn2></templateHeroBtn2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 lg:mt-32">
      
     
      <div class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group z-20">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div class="p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div class="font-bold">Dusk's Phantom</div>
            <div class="opacity-60 text-sm">
              As the sun sets, the ninja emerges from the twilight, bathed in the golden light of the evening.
            </div>
          </div>
        </div>
        <img src="../assets/images/marquee4.png" class="w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out rounded-xl" />
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <TemplateHoverArrow />
        </div>
      </div>
      
      
      <div class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group z-20">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div class="p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div class="font-bold">Serenity and Steel</div>
            <div class="opacity-60 text-sm">
              A perfect balance of tranquility and danger, the ninja stands in serene contemplation by a riverbank.
            </div>
          </div>
        </div>
        <img src="../assets/images/marquee2.png" class="w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out rounded-xl" />
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <TemplateHoverArrow />
        </div>
      </div>

      
      <div class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group z-20">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div class="p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div class="font-bold">Bamboo Forest</div>
            <div class="opacity-60 text-sm">
              Amidst towering bamboo stalks, the ninja moves with stealth and grace. Her presence is almost undetectable.
            </div>
          </div>
        </div>
        <img src="../assets/images/marquee.png" class="w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out rounded-xl" />   
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <TemplateHoverArrow />
        </div>
      </div>

      
      <div class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group z-20">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div class="p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div class="font-bold">Silent Guardian</div>
            <div class="opacity-60 text-sm">
              In the heart of the Mekong Delta, a Vietnamese ninja stands poised, her figure blending into the lush, misty landscape.
            </div>
          </div>
        </div>
        <img src="../assets/images/marquee3.png" class="w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out rounded-xl" />
        
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <TemplateHoverArrow />
        </div>

        <div class="absolute top 2 left-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <p>2023</p>
        </div>
      </div>

    </div>
  </section>
</template>



  
<script setup lang="ts">
const props = defineProps({
  user: Object as PropType<User>,
  photos: Array as PropType<Photo[]>,
});
</script>

  