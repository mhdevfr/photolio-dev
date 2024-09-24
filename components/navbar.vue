<template>
  <div class="absolute top-0 w-full h-20 flex items-center justify-center">
    <div class="w-1/6 m-8 brico-800">
      <LogoPhotolio class="text-2xl"></LogoPhotolio>
    </div>
    <div class="w-5/6 justify-center items-center m-8 brico-200">
      <ul class="flex justify-end">
        <li>
          <nuxt-link
            to="/"
            class="px-10 py-2 underline-offset-4 underline decoration-sky-500"
            >Home</nuxt-link
          >
          <nuxt-link to="/plans" class="px-10 py-2">Plans</nuxt-link>
          <nuxt-link to="/contact" class="px-10 py-2">Contact</nuxt-link>
          <nuxt-link
            v-if="user"
            :to="`/dashboard/${user.id}`"
            class="px-10 py-2"
          >
            Dashboard
          </nuxt-link>
          <nuxt-link
            to="/login"
            class="px-4 mx-4 py-2 bg-gray-100 text-black rounded-md"
            v-if="!user"
            >Login
            </nuxt-link>
            <button
              class="px-4 mx-4 py-2 bg-red-400 text-gray-100 rounded-md"
              v-if="user"
              @click="signOut"
              >Logout
            </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();
const toast = useToast();
const signOut = async () => {
  const { error } = await client.auth.signOut();
  navigateTo("/");
  if(error){
    toast.add({
      title: "Error",
      description: error.message,
    });
  }
};
</script>

<style scoped lang="css"></style>
