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
          v-else
          v-for="image in images"
          v-motion-fade-visible
          :key="image.id"
          class="h-96 bg-gray-50 dark:bg-slate-950 rounded-lg"
        >
          <img
            :src="image.url"
            alt="Uploaded Image"
            class="h-full w-full object-cover rounded-lg"
          />
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

const handleImageUpload = async (filePath) => {
  try {
    const { data: publicURLData, error: urlError } = await supabase.storage
      .from("pictures")
      .getPublicUrl(filePath);

    if (urlError) {
      console.error("Erreur lors de la récupération de l'URL publique:", urlError.message);
      return;
    }

    if (!publicURLData || !publicURLData.publicUrl) {
      console.error("L'URL publique est indéfinie.");
      return;
    }

    console.log("URL publique récupérée:", publicURLData.publicUrl);

    const { data: insertData, error: insertError } = await supabase
      .from("pictures")
      .upsert([
        {
          id: user.value.id,
          url: publicURLData.publicUrl,
          description: "Description de l'image",
          created_at: new Date(),
        },
      ]);

    if (insertError) {
      console.error("Erreur lors de l'insertion dans la table:", insertError.message);
    } else {
      console.log("Image ajoutée à la table `pictures` avec succès:", insertData);
      fetchImages();
    }
  } catch (error) {
    console.error("Erreur générale lors du traitement de l'image:", error.message);
  }
};


const fetchImages = async () => {
  try {
    const { data, error } = await supabase
      .from("pictures")
      .select("*")
      .eq("id", user.value.id);

    if (error) {
      console.error("Erreur lors de la récupération des images: ", error.message);
      return;
    }

    images.value = data.map((image) => ({
      id: image.id,
      url: image.url,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des images: ", error.message);
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
