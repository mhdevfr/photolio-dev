<template>
  <TemplateHero :user="user" :photos="photos" />
</template>

<script setup lang="ts">
import { fetchData } from "../../utils/userUtils";
import { fetchImages } from "../../utils/imageUtils";
const route = useRoute();
const slug = route.params.slug as string;
const photos = ref<Photo[]>([]);
const current_plan = ref("");
const client = useSupabaseClient();
const user = useSupabaseUser();
const users = ref<User[]>([]);
const images = ref<Image[]>([]);
const loading = ref(false);
fetchData(client, user, users, current_plan);
fetchImages(user, images, loading, client);
onMounted(async () => {
  const { data: userData, error: userError } = await client
    .from("users")
    .select("*")
    .eq("pseudo", slug)
    .single<User>();

  if (userError) {
    console.error(userError);
    return;
  }

  user.value = userData;
  photos.value = images.value;  
});
</script>
