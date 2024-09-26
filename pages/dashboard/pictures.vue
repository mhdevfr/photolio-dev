<template>
  <div
    v-if="user"
    class="h-full w-full flex items-end justify-center bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-gray-50"
  >
    <adminSidebar class="w-1/6 h-screen fixed left-0 top-0 lg:block hidden" />
    <AdminNavbarBottom class="lg:hidden block" />
    <div class="lg:w-5/6 w-full flex lg:flex-row flex-col items-center lg:pl-20 justify-center">
      <LogoPhotolio class="lg:hidden block mt-8 text-3xl"/>
      <p class="brico-200 text-2xl lg:hidden block p-10">Ajoutez les photos que vous désirez 
        <span class="border-b border-b-2 border-yellow-400">rapidement</span>
        , et en conservant leurs 
        <span class="border-b border-b-2 border-blue-400">qualités</span>
         !</p>
      <div class="h-full lg:grid lg:gap-5 w-full dark:bg-slate-950 bg-gray-50 pb-20 lg:py-20">
        <div class="grid gap-5 lg:grid-cols-3">
          <div class="w-full">
            <UploadComponent @upload="handleImageUpload"  />
          </div>
          <USkeleton
            v-if="loading"
            v-for="index in 9"
            :key="index"
            class="h-96 rounded-lg"
          />
          <div v-if="!loading" class="grid grid-cols-1 gap-5">           
             <div
              v-for="image in images"
              :key="image.id"
              v-motion-fade-visible
              class="h-96 dark:bg-slate-950 bg-gray-50 rounded-lg"
            >
              <img
                :src="image.url"
                alt="Uploaded Image"
                class="h-full w-full object-cover lg:p-0 p-4 rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
  
          <div v-if="!loading && images.length === 0" class="flex flex-col items-center lg:flex-row w-full h-full justify-center">
            <p class="text-4xl brico-800 text-center">Aucune image disponible</p>
          </div>
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
