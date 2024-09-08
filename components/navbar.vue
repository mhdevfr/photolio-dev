<template>
  <div class="absolute top-0 w-full h-20 flex items-center justify-center">
    <div class="w-1/6 m-8 brico-800">
      <nuxt-link to="/">
        <h1 class="text-3xl flex items-center">
          Photofoli
          <Icon
            name="material-symbols:camera"
            class="animate-spin-slow"
            size="24"
            color="yellow"
          />
        </h1>
      </nuxt-link>
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
            to="/login"
            class="px-4 mx-4 py-2 bg-gray-100 text-black rounded-md"
            v-if="!user"
            >Login
            </nuxt-link>
            <button
              class="px-4 mx-4 py-2 bg-red-200 text-gray-100 rounded-md"
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

const signOut = async () => {
  const { error } = await client.auth.signOut();
  navigateTo("/");
  if (error) console.log("SignOut Error:", error);
};
</script>

<style scoped lang="css"></style>
