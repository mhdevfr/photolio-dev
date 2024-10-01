<template>
  <div
    class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100/30 rounded-full shadow-lg p-4 w-10/12 max-w-2xl flex justify-around items-center z-50 lg:hidden md:hidden"
  >
    <nuxt-link
      v-if="user"
      :to="`/dashboard/${user.id}`"
      class="text-gray-100 hover:text-gray-300"
    >
      Dashboard
    </nuxt-link>
    <nuxt-link
      :to="`/dashboard/pictures`"
      class="text-gray-100 hover:text-gray-300"
    >
      Pictures
    </nuxt-link>
    <nuxt-link
      :to="`/dashboard/plan`"
      class="text-gray-100 hover:text-gray-300"
    >
    Plan
    </nuxt-link>
    <nuxt-link
      v-if="!user"
      to="/login"
      class="text-gray-100 hover:text-gray-300"
    >
      Login
    </nuxt-link>
    <button v-if="user" @click="signOut" class="text-red-500">Logout</button>
  </div>
</template>

<script lang="ts" setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const userSlug = user?.value?.id;
const toast = useToast();

const signOut = async () => {
  const { error } = await client.auth.signOut();
  navigateTo("/");
  if (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error.message,
    });
  }
};
</script>
