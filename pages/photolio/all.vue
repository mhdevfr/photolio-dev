<template>
  <div v-if="user?.current_plan">
    <TemplateDarkBtn class="lg:hidden" />
    <div class="flex-col flex justify-center items-center">
      <TemplateAll :users="user" :pictures="images" />
    </div>
  </div>
  <div v-else>
    <h1>Cet utilisateur n'a pas de plan</h1>
  </div>
</template>
<script setup lang="ts">
import { fetchImages } from "@/utils/imageUtils";
import { fetchData } from "@/utils/userUtils";

interface User {
  id: string;
  pseudo: string;
  biography: string;
  current_plan: string; 
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
const users = ref<User[]>([]);
const user = ref<User | null>(null);
const images = ref<{ id: string; url: string }[]>([]);
const loading = ref(false);

onMounted(async () => {
  const { data: userData, error: userError } = await client
    .from("users")
    .select("*")
    .eq("pseudo", slug)
    .single<User>();

  if (userError) {
    console.error("Erreur utilisateur : ", userError);
    return;
  }

  user.value = userData;

  fetchImages(user, images, loading, client);
  fetchData(client, user, users);
});
</script>
