<template>
  <section class="mt-32 mx-auto max-w-screen-xl pb-4 px-4">
    <div class="space-y-6 flex-1">
      <h1
        class="text-neutral-900 dark:text-gray-50 font-bold text-5xl md:text-6xl lg:text-8xl lg:text-center"
      >
        {{ users?.pseudo }}'s portfolio
      </h1>
      <p
        class="text-neutral-500 dark:text-gray-300 max-w-xl text-lg leading-snug md:text-2xl lg:text-center lg:max-w-3xl lg:mx-auto"
      >
        {{ users?.work || "No work description available" }}
      </p>

      <div
        class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 lg:justify-center"
      >
        <templateHeroBtn></templateHeroBtn>
        <templateHeroBtn2></templateHeroBtn2>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 mt-8 lg:mt-32 lg:grid-cols-2 lg:gap-6">
      <div
        v-for="(picture, index) in displayedPictures"
        :key="picture.id"
        class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group z-20"
      >
        <USkeleton v-if="loading" class="h-96 rounded-xl" />
        <img
          v-else
          :src="picture.url || '../assets/images/default-photo.jpg'"
          class="w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out rounded-xl"
          alt="User's photo"
        />
        <div
          class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
        >
          <div
            class="p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out"
          >
            <div class="font-bold">{{ picture.title || "Untitled" }}</div>
            <div class="opacity-60 text-sm">
              {{ picture.description || "No description available" }}
            </div>
          </div>
        </div>
        <div
          class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
        >
          <TemplateHoverArrow />
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center mt-4">
      <h1 class="text-neutral-900 dark:text-gray-50 font-bold text-3xl">
        Recent works
      </h1>
      <NuxtLink
        :to="`/photolio/${users?.pseudo}/all`"
        class="text-neutral-500 dark:text-gray-50 hover:text-neutral-900 text-2xl font-semibold underline flex items-center"
      >
        View all
        <TemplateArrow />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-6">
      <img
        src="../assets/images/street.jpg"
        class="w-full h-[280px] mx-auto rounded-xl"
      />
    </div>

    <div class="space-y-6 flex-1 flex items-center lg:flex mt-4">
      <div class="w-3/5">
        <h1 class="text-neutral-900 dark:text-gray-50 font-bold text-4xl">
          About me
        </h1>
        <h1 class="brico-800 text-2xl mt-8">
          I'm from {{ users?.country }}
          <Icon
            :name="`twemoji:flag-${users?.country?.toLowerCase()}`"
            class="ml-2"
          />
        </h1>

        <p
          class="text-neutral-500 dark:text-gray-400 max-w-xl text-lg leading-relaxed"
        >
          {{ users?.biography || "No biography available" }}
        </p>
      </div>
      <div class="w-2/5 h-full">
        <img
          v-if="users?.avatar"
          :src="users?.avatar"
          class="w-full lg:w-40 h-40 rounded-full mx-auto"
          alt="User's avatar"
        />
        <img
          src="../assets/images/marquee2.png"
          class="w-full lg:w-40 h-auto rounded-full mx-auto"
          v-else
        />
      </div>
    </div>
  </section>
  <TemplateFooter :users="users" />
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


const loading = ref(true);
const props = defineProps({
  users: Object as PropType<User>,
  pictures: Array as PropType<Picture[]>,
});

const displayedPictures = computed(() => {
  return props.pictures.slice(0, 4);
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
