<template>
  <div id="my-gallery" class="my-16 mt-18 md:mt-32 lg:mt-64 container mx-auto px-4">
    <h1 class="text-5xl font-semibold text-gray-100 mb-4">
      My Gallery
    </h1>
    <p class="text-gray-300 text-xl mb-6">
      Here are some photos I took recently:
    </p>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="picture in pictures"
        :key="picture.id"
        class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group"
      >
        <div
          class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
        >
          <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div class="font-bold">{{ picture.title || 'Untitled Photo' }}</div>
            <div class="opacity-60 text-sm">
              {{ picture.description || 'No description available.' }}
            </div>
          </div>
        </div>
        <img
          class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          :src="picture.url"
          :alt="picture.title || 'Photo from the gallery'"
        />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
interface User {
  id: string;
  pseudo: string;
  work?: string;
  country?: string;
  biography?: string;
  avatar?: string;
}

interface Picture {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const props = defineProps({
  users: Object as PropType<User>,
  pictures: Array as PropType<Picture[]>,
});
</script>

<style scoped>
@media (min-width: 768px) {
  img {
    max-height: 300px;
  }
}
</style>
