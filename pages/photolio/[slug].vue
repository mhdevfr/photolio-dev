<template>
  <TemplateDarkBtn class="lg:hidden" />
  <div class="flex-col flex justify-center items-center">
    <TemplateHero :users="user" :pictures="images" />
  </div>
</template>

<script setup lang="ts">
import { fetchImages } from '@/utils/imageUtils';
interface User {
  id: string;
  pseudo: string;
  biography: string;
}

interface Photo {
  id: string;
  user_id: string;
  url: string;
  description: string;
  created_at: string;
}

const client = useSupabaseClient();
const route = useRoute();
const slug = route.params.slug as string;
const user = ref<User | null>(null);
const photos = ref<Photo[]>([]);
const images = ref<{ id: string; url: string }[]>([]);
const loading = ref(false);
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
  fetchImages(user, images, loading, client);
});



</script>
