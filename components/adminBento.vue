<template>
  <div class="w-5/6 h-full flex flex-col justify-center">
    <div class="flex items-center justify-center p-0">
      <div
        class="h-80 w-full bg-gray-100 flex justify-between dark:bg-slate-800 dark:shadow-[0px_0px_10px_0px_#f7fafc] shadow-[0px_0px_10px_0px_#1a202c] mb-6 mr-6 rounded-xl"
      >
        <div
          class="text-slate-900 w-1/2 text-start flex dark:text-gray-50 flex-col p-4"
          v-if="users[0]?.pseudo"
        >
          <h1 class="text-3xl brico-800 underline-offset-8 underline">
            👋 Hey {{ users[0]?.pseudo }} !
          </h1>
          <span class="text-2xl brico-200 mt-8"
            >Located in : {{ users[0]?.country }}</span
          >
          <!-- Pourquoi pas mettre des metiers ou genre des pays ect ect ptites infos quoi-->
          <span class="text-2xl brico-200 mt-1"
            >Working as : {{ users[0]?.work }}</span
          >
        </div>
        <div v-else>
          <h1 class="text-3xl brico-800 p-4">👋 Hey!</h1>
        </div>
        <div class="h-full rounded-xl w-1/2">
          <img src="../assets/images/lugubre.png" class="h-full w-full p-4" />
        </div>
      </div>

      <div
        class="w-3/4 flex flex-col h-80 bg-gray-100 dark:shadow-[0px_0px_10px_0px_#f7fafc] dark:bg-slate-800 shadow-[0px_0px_10px_0px_#1a202c] mb-6 rounded-xl"
      >
        <div class="h-full flex flex-col justify-around">
          <h1
            class="text-3xl h-1/5 flex justify-start items-center rounded-xl dark:text-gray-50 p-4"
          >
            <span class="brico-800 underline-offset-8 underline"
              >About you</span
            >
          </h1>

          <div
            class="m-4 text-xl h-3/5 bg-transparent dark:text-gray-50 text-slate-900 brico-200"
          >
            <p
              class="dark:text-gray-50 opacity-75 text-slate-900 brico-200 mb-2 text-sm"
              v-if="updateBio"
            >
              Max Length 150 charts
            </p>
            <UTextarea
              v-if="updateBio"
              placeholder="Write your biography here"
              v-model="biographyContent"
              maxlength="150"
              :disabled="!updateBio"
              class="w-full h-full bg-transparent opacity-75 dark:text-gray-50 text-slate-900 brico-200"
            />
            <p class="" v-if="!updateBio">
              {{ users[0]?.biography }}
            </p>
          </div>

          <div class="ml-4 h-1/5">
            <button
              v-if="!updateBio"
              class="flex items-center dark:hover:bg-green-500 hover:bg-green-500 justify-center px-16 py-2 dark:bg-slate-900 dark:text-gray-50 text-slate-900 bg-gray-200 rounded-xl text-pretty text-sm"
              @click="updateBiography"
            >
              Change your biography
            </button>
            <button
              v-if="updateBio"
              class="flex items-center dark:hover:bg-green-500 hover:bg-green-500 justify-center px-16 py-2 dark:bg-slate-900 dark:text-gray-50 text-slate-900 bg-gray-200 rounded-xl text-pretty text-sm"
              @click="update"
            >
              Apply your changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
    class="w-full h-80 bg-gray-100 z-10 relative rounded-xl dark:bg-slate-800 shadow-[0px_0px_10px_0px_#1a202c] dark:shadow-[0px_0px_10px_0px_#f7fafc] overflow-hidden"
  >
    <div class="flex">
      <div
        class="text-3xl w-1/2 brico-800 text-slate-900 dark:text-gray-50 flex p-4 flex-col m-4"
      >
        <span class="text-4xl">Explore our plans</span>
        <span class="text-3xl">Make your choice</span>
        <span class="text-2xl">Take the advantages</span>
        <Nuxt-Link
          to="/"
          class="text-sm text-center mt-2 w-1/3 py-3 rounded-lg dark:bg-black bg-gray-200"
        >
          Discover our plans
        </Nuxt-Link>
      </div>
      <div class="w-1/2 h-full relative">
        <img
          src="/assets/images/kaitoExample.png"
          class="rotate-12 w-full -z-10 absolute -top-10 right-0"
        />
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
interface User {
  id: number;
  pseudo: string;
  profil_picture?: string;
  biography: string;
}
const toast = useToast();
const client = useSupabaseClient();
const user = useSupabaseUser();
const users = ref<User[]>([]);
const updateBio = ref<boolean>(false);
const biographyContent = ref<string>("");

function updateBiography() {
  updateBio.value = !updateBio.value;
}

async function update() {
  const { data, error } = await client
    .from("users")
    .update({ biography: biographyContent.value })
    .eq("id", user.value?.id);

  toast.add({
    title: "Biography updated",
  });

  if (data) {
    users.value[0].biography = biographyContent.value;
    updateBio.value = false;
    await fetchData();
  } else {
    toast.add({
      title: "Error",
      description: error?.message,
    });
  }
}

async function fetchData() {
  const { data, error } = await client
    .from("users")
    .select("id, pseudo, profil_picture, biography, country, work")
    .eq("id", user.value?.id);

  if (data) {
    users.value = data as User[];
    biographyContent.value = users.value[0].biography;
  } else {
    console.error(error);
  }
}

fetchData();
</script>

<style lang="css" scoped></style>
