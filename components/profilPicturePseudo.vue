<script setup lang="ts">
const props = defineProps(["path"]);
const { path } = toRefs(props);
const toast = useToast();
const emit = defineEmits(["update:path", "upload"]);
const supabase = useSupabaseClient();
const uploading = ref(false);
const files = ref();
const user = useSupabaseUser();
const userId = ref<string | null>(null); 
const images = ref([]);
const slug = useRoute().params.slug as string;  

const getUserId = async () => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("pseudo", slug)
      .single();

    if (error) {
      throw error;
    }

    userId.value = data?.id || null;
  } catch (error) {

  }
};

const fetchProfilPicture = async () => {
  if (!userId.value) return; 
  try {
    const { data, error } = await supabase.storage
      .from("pictures")
      .list(`${userId.value}/profil_picture`, {
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
            .createSignedUrl(`${userId.value}/profil_picture/${file.name}`, 60 * 60);

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

onMounted(async () => {
  await getUserId();  
  if (userId.value) {
    await fetchProfilPicture();
    console.log(images.value);
  }
});

</script>

<template>
  <div v-if="images.length > 0">
    <img
      :src="images[0].url"
      class="rounded-full md:w-[300px] md:h-[300px] h-[150px] w-[150px] lg:w-[450px] lg:h-[450px]"
    />
  </div>
  <div v-else>
    <img
      src="https://via.placeholder.com/150"
      alt="profil picture"
      class="rounded-full w-[150px] z-20 h-[150px]"
    />
  </div>
</template>
