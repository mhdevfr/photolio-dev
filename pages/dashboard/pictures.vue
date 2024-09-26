<template>
  <div
    v-if="user"
    class="h-full w-full flex items-end justify-center bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-gray-50"
  >
    <adminSidebar class="w-1/6 h-screen fixed left-0 top-0" />
    <div class="w-5/6 flex items-center pl-20 justify-center">
      <div
        class="h-full w-full dark:bg-slate-950 bg-gray-50 pl-20 py-20 grid grid-cols-3 gap-5"
      >
        <UploadComponent @upload="handleImageUpload" />
        <USkeleton
          v-if="loading"
          v-for="index in 9"
          :key="index"
          class="h-96 rounded-lg"
        />
        <div
          v-if="!loading"
          v-for="image in images"
          v-motion-fade-visible
          :key="image.id"
          class="h-96 bg-gray-50 dark:bg-slate-950 rounded-lg"
        >
          <img
            :src="image.url"
            alt="Uploaded Image"
            class="h-full w-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div v-if="!loading && images.length === 0" class="flex items-center w-full h-full justify-center">
          <p class="text-4xl brico-800 text-center">Aucune image disponible</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const loading = ref(true);
const images = ref([]);
const supabase = useSupabaseClient();

const fetchImages = async () => {
  if (!user.value) return;
  loading.value = true;
  try {
    const { data, error } = await supabase.storage
      .from("pictures")
      .list(`${user.value.id}/photos`, {
        limit: 10,
        offset: 0,
      });

    if (error) {
      console.error(
        "Erreur lors de la récupération des images: ",
        error.message
      );
      return;
    }

    images.value = await Promise.all(
      data.map(async (file) => {
        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from("pictures")
            .createSignedUrl(`${user.value.id}/photos/${file.name}`, 60 * 60); 

        if (signedUrlError) {
          toast.add({
            title: "Erreur lors de la récupération des images",
            description: signedUrlError.message,
          });
          return null;
        }

        return {
          id: file.name,
          url: signedUrlData.signedUrl,
        };
      })
    );

    images.value = images.value.filter((img) => img !== null); 
  } catch (error) {
    toast.add({
      title: "Erreur lors de la récupération des images",
      description: error.message,
    });
  } finally {
    loading.value = false;
  }
};

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
