<template>
  <div class="absolute top-0 w-full h-20 flex items-center justify-between px-4 sm:px-8 lg:px-10">
    <div class="w-1/3 sm:w-1/6 m-4 sm:m-8 brico-800">
      <LogoPhotolio class="text-xl sm:text-2xl"></LogoPhotolio>
    </div>
    <div class="w-2/3 sm:w-5/6 justify-center items-center m-4 sm:m-8 brico-200">
      <ul
        class="hidden sm:flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 lg:space-x-10 sm:space-x-6"
      >
        <li>
          <nuxt-link
            to="/"
            class="px-4 sm:px-10 py-2 underline-offset-4 underline decoration-sky-500"
            >Home</nuxt-link
          >
          <nuxt-link to="/plans" class="px-4 sm:px-10 py-2">Plans</nuxt-link>
          <nuxt-link to="/contact" class="px-4 sm:px-10 py-2">Contact</nuxt-link>
          <nuxt-link
            v-if="user"
            :to="`/dashboard/${user.id}`"
            class="px-4 sm:px-10 py-2"
          >
            Dashboard
          </nuxt-link>
          <nuxt-link
            to="/login"
            class="px-4 mx-4 py-2 bg-gray-100 text-black rounded-md"
            v-if="!user"
            >Login</nuxt-link
          >
          <button
            class="px-4 mx-4 py-2 bg-red-400 text-gray-100 rounded-md"
            v-if="user"
            @click="signOut"
            >Logout</button>
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
