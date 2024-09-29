<template>
    <div>
      <h1>Portfolio de {{ user?.pseudo }}</h1> 
      <p>{{ user?.biography }}</p>
      <div>
        <div v-for="photo in photos" :key="photo.id">
          <img :src="photo.url" :alt="photo.description" />
          <p>{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
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
  
    const { data: photosData, error: photosError } = await client
      .from("pictures")
      .select("*")
      .eq("user_id", user.value?.id); 
  
    if (photosError) {
      console.error(photosError);
      return;
    }
  
    photos.value = photosData as Photo[]; 
  });
  </script>