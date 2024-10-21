<template>
  <div
    class="relative flex flex-col items-center w-40 h-full overflow-hidden text-slate-900 bg-gray-100 dark:bg-gray-800 dark:text-slate-100"
  >
    <nuxt-link to="/" class="flex items-center justify-center w-full mt-3">
      <LogoPhotolio class="text-2xl"></LogoPhotolio>
    </nuxt-link>
    
    <div class="w-full px-2 flex-grow">
      <div
        class="flex flex-col items-center justify-center w-full mt-3 border-t border-gray-700 dark:border-gray-500"
      >
        <nuxt-link
          :to="`/dashboard/${userSlug}`"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700 hover:text-white dark:hover:bg-indigo-500"
        >
          <Icon name="iconamoon:home" />
          <span class="ml-2 text-sm font-medium brico-800">Home</span>
        </nuxt-link>
        <NuxtLink
          :to="`/dashboard/pictures`"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700 hover:text-white dark:hover:bg-indigo-500"
        >
          <Icon name="et:pictures" />
          <span class="ml-2 text-sm font-medium">Pictures</span>
        </NuxtLink>

        <NuxtLink
          :to="`/dashboard/plan`"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700 hover:text-white dark:hover:bg-indigo-500"
        >
          <Icon name="ri:contract-fill" />
          <span class="ml-2 text-sm font-medium brico-800">Plan</span>
        </NuxtLink>
      </div>
      <div
        class="flex flex-col items-center w-full mt-2 border-t border-gray-700 dark:border-gray-500"
      >
        <NuxtLink
          :to="`/dashboard/template`"
          class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:text-white hover:bg-indigo-700 dark:hover:bg-indigo-500"
        >
          <Icon name="icon-park-solid:page-template" />
          <span class="ml-2 text-sm font-medium brico-800">Template</span>
        </NuxtLink>
        <darkButton />
      </div>
    </div>

    <button
      class="absolute bottom-0 flex items-center justify-center w-full h-16 bg-red-400 hover:bg-indigo-700 hover:text-white dark:bg-red-400 dark:hover:bg-indigo-500"
      @click="signOut"
    >
      <Icon name="material-symbols:account-box" />
      <span class="ml-2 text-sm font-medium brico-800">Logout</span>
    </button>
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
