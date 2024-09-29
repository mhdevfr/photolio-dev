<template>
  <div
    v-if="user"
    class="h-full w-full flex items-end justify-center bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-gray-50"
  >
    <adminSidebar class="w-1/6 h-screen fixed left-0 top-0 lg:block hidden" />
    <AdminNavbarBottom class="lg:hidden block" />
    <div class="lg:w-5/6 w-full flex lg:flex-row flex-col items-center lg:pl-20 justify-center">
      <div class="lg:hidden flex items-center justify-center flex-col ">
        <LogoPhotolio class="text-4xl mt-12"/>
        <p class="brico-200 text-2xl lg:hidden block p-10">Ajoutez les photos que vous désirez 
          <span class="border-b border-b-2 border-yellow-400">rapidement</span>
          , et en conservant leurs 
          <span class="border-b border-b-2 border-blue-400">qualités</span>
           !</p>
      </div>
      <div
        class="h-full w-full dark:bg-slate-950 bg-gray-50 lg:pl-20 lg:py-20  lg:grid lg:grid-cols-3 lg:gap-5"
      >
        <UploadComponent @upload="fetchImages" />
        <USkeleton
          v-if="loading"
          v-for="index in 9"
          :key="index"
          class="h-96 p-6 lg:p-0 rounded-lg"
        />
        <div
          v-if="!loading"
          v-for="image in images"
          v-motion-fade-visible
          :key="image.id"
          class="h-96 lg:p-0 p-6 bg-gray-50 my-5 dark:bg-slate-950 rounded-lg"
        >
          <img
            :src="image.url"
            alt="Uploaded Image"
            class="h-full w-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div
        v-if="!loading && images.length === 0"
        class="flex flex-col items-center lg:flex-row w-full h-full justify-center"
      >
        <p class="text-4xl brico-800 text-center">Aucune image disponible</p>
      </div>
    </div>
  </div>
  <div
    v-if="!loading && images.length === 0"
    class="flex items-center w-full h-full justify-center"
  >
    <p class="text-4xl brico-800 text-center">Aucune image disponible</p>
  </div>
</template>

<script setup lang="ts">
import { fetchImages } from "@/utils/imageUtils";

interface Image {
  id: string;
  url: string;
}

const images = ref<Image[]>([]);
const loading = ref(false);
const toast = ref(null);
const user = useSupabaseUser();
const supabase = useSupabaseClient();

onMounted(() => {
  fetchImages(user, images, loading, toast, supabase);
});
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap");

.brico-800 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.brico-200 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
</style>
