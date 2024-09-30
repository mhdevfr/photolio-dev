<template>
  <TemplateDarkBtn />
  <div class="flex-col flex justify-center items-center">
    <TemplateHero :users="users" :photos="photos" />
  </div>
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
</script>
