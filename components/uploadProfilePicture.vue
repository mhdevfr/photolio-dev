<script setup lang="ts">
const props = defineProps(["path"]);
const { path } = toRefs(props);
const toast = useToast();
const emit = defineEmits(["update:path", "upload"]);
const supabase = useSupabaseClient();
const uploading = ref(false);
const files = ref();
const user = useSupabaseUser();
const userId = user?.value?.id;
const images = ref([]);



const addProfilPicture = async (evt) => {
  console.log("Event:", evt); 
  files.value = evt.target.files;
  console.log("Selected files:", files.value); 

  try {
    uploading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${userId}/profil_picture/${fileName}`;
    
    const { error: uploadError } = await supabase.storage
      .from("pictures")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    emit("update:path", filePath);
    emit("upload");

    toast.add({
      title: "Success",
      description: "Image uploaded successfully",
    });

    await fetchProfilPicture();
  } catch (error) {
    toast.add({
      title: "Error uploading image",
      description: error.message,
    });
  } finally {
    uploading.value = false;
  }
};


const fetchProfilPicture = async () => {
  if (!user.value) return;
  try {
    const { data, error } = await supabase.storage
      .from("pictures")
      .list(`${userId}/profil_picture`, {
        limit: 1, 
        offset: 0,
      });
    if (error) {
      throw error;
    }
    images.value = await Promise.all(
      data.map(async (file) => {
        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from("pictures")
            .createSignedUrl(`${userId}/profil_picture/${file.name}`, 60 * 60);
        if (signedUrlError) {
          console.error(signedUrlError.message);
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
  }
};
fetchProfilPicture();
</script>
<template>
  <div class="flex flex-col lg:ml-8 lg:mt-0 mt-10 items-center justify-around">
    <div v-if="images.length > 0">
      <img
        :src="images[0].url"
        class="rounded-full w-[150px] h-[150px]"
      />
    </div>
    <div v-else>
      <img
        src="https://via.placeholder.com/150"
        alt="profil picture"
        class="rounded-full w-[150px] z-20 h-[150px]"
      />
    </div>
    <input
      ref="fileInput"
      type="file"
      class="mt-8 py-2 px-2 w-full flex-col rounded-md"
      @change="addProfilPicture"
    />
  </div>
</template>