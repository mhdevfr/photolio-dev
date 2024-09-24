<template>
  <div
    v-if="user"
    class="h-full w-full flex items-end justify-center bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-gray-50"
  >
    <adminSidebar class="w-1/6 h-screen fixed left-0 top-0" />
    <div class="w-5/6 flex items-center pl-20 justify-center">
      <div
        class="h-full w-full bg-slate-950 pl-20 py-20 grid grid-cols-3 gap-5"
      >
      <UploadComponent/>
        <USkeleton
          v-if="loading"
          v-for="index in 6"
          :key="index"
          class="h-96 rounded-lg"
        />
        <div
          v-else
          v-for="image in images"
          :key="image.id"
          class="h-96 bg-gray-50 rounded-lg"
          :style="{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const loading = ref(true);
const images = ref([]);

async function fetchImages() {
  const { data, error } = await client.from("pictures").select("*");
  if (error) {
    console.error(error);
    return;
  }
  images.value = data;
  loading.value = false;
}
fetchImages();
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
