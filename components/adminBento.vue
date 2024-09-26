<template>
  <div
    class="w-5/6 lg:h-screen h-full flex flex-col-reverse lg:flex-col lg:items-start items-center lg:m-0 m-10 justify-center"
  >
    <div class="flex items-center lg:flex-row flex-col justify-center">
      <div
        class="h-5/6 w-full lg:items-start items-center bg-gray-100 flex lg:flex-row flex-col justify-around dark:bg-slate-800 dark:shadow-[0px_0px_10px_0px_#f7fafc] shadow-[0px_0px_10px_0px_#1a202c] lg:mr-8 rounded-xl lg:p-10"
      >
        <div
          class="text-slate-900 lg:w-1/2 w-full text-start flex dark:text-gray-50 flex-col p-4"
          v-if="users[0]?.pseudo"
        >
          <h1 class="text-3xl brico-800 underline-offset-8 underline">
            👋 Hey {{ users[0]?.pseudo }} !
          </h1>
          <span class="text-2xl brico-200 mt-8"
            >Located in : {{ users[0]?.country }}</span
          >
          <span class="text-2xl brico-200 mt-1"
            >Work : {{ users[0]?.work }}</span
          >
          <span class="text-2xl brico-200 mt-1"
            >Current plan : {{ users[0]?.current_plan }}</span
          >
        </div>
        <div
          v-if="!users[0]?.pseudo"
          class="text-slate-900 lg:w-1/2 w-4/5 text-start lg:mt-0 mt-12 flex dark:text-gray-50 flex-col"
        >
          <h1 class="text-3xl brico-800 mb-8">👋 Hey !</h1>
          <div class="lg:w-full h-full flex flex-col justify-center">
            <input
              type="text"
              class="py-1 px-2 rounded-lg bg-transparent outline-none"
              placeholder="Enter your pseudo"
              v-model="newPseudo"
            />
            <input
              :maxlength="20"
              type="text"
              class="py-1 px-2 rounded-lg bg-transparent outline-none mt-2"
              placeholder="Enter your work"
              v-model="newWork"
            />
            <select
              v-model="newCountry"
              :options="countries"
              class="py-1 px-2 rounded-lg outline-none mt-2"
            >
              <option v-for="country in countries" :value="country">
                {{ country }}
              </option>
            </select>
            <Button
              @click="addDetails"
              class="text-sm text-center mt-2 px-3 brico-800 py-3 rounded-lg dark:bg-slate-900 dark:hover:bg-gray-50 hover:dark:text-slate-950 bg-gray-200"
            >
              Add your informations
            </Button>
          </div>
        </div>

        <div class="h-full rounded-xl flex justify-center lg:w-1/2 w-full">
          <uploadProfilePicture/>

        </div>
      </div>

      <div
        class="w-full my-12 flex flex-col h-5/6 bg-gray-100 dark:shadow-[0px_0px_10px_0px_#f7fafc] dark:bg-slate-800 shadow-[0px_0px_10px_0px_#1a202c] rounded-xl"
      >
        <div class="h-full flex flex-col justify-around p-10">
          <h1
            class="text-3xl flex justify-start items-center rounded-xl dark:text-gray-50"
          >
            <span class="brico-800 underline-offset-8 underline mb-2"
              >About you</span
            >
          </h1>

          <div class="text-xl h-3/5 dark:text-gray-50 text-slate-900 brico-200">
            <p
              class="dark:text-gray-50 opacity-75 text-slate-900 brico-200 mb-2 text-sm"
              v-if="updateBio"
            >
              Max Length 150 charts
            </p>
            <UTextarea
              v-if="updateBio"
              placeholder="Update your biography here"
              v-model="biographyContent"
              maxlength="140"
              :disabled="!updateBio"
              class="w-full h-full bg-transparent opacity-75 dark:text-gray-50 text-slate-900 brico-200"
            />
            <p v-if="!updateBio" class="my-2">
              {{ users[0]?.biography }}
            </p>
          </div>

          <div class="h-1/5" v-if="users[0]?.biography">
            <button
              v-if="!updateBio"
              class="flex items-center brico-800 dark:hover:bg-green-500 mt-3 hover:bg-green-500 justify-center px-4 py-3 dark:bg-slate-900 dark:text-gray-50 text-slate-900 bg-gray-200 rounded-lg text-pretty text-sm"
              @click="updateBiography"
            >
              Change your biography
            </button>
            <UButton
              v-if="updateBio"
              class="flex items-center dark:hover:bg-green-500 hover:bg-green-500 justify-center px-4 py-3 dark:bg-slate-900 dark:text-gray-50 text-slate-900 bg-gray-200 rounded-xl text-pretty text-sm"
              @click="update"
              :loading="loading"
            >
              Apply your changes
            </UButton>
          </div>
          <div
            v-if="!users[0]?.biography"
            class="flex items-start h-full flex-col justify-start"
          >
            <UTextarea
              placeholder="Write your biography here"
              v-model="newBiography"
              maxlength="140"
              class="w-full h-full bg-transparent opacity-75 dark:text-gray-50 text-slate-900 brico-200 my-2"
            />
            <button
              class="flex items-center brico-800 dark:hover:bg-green-500 px-2 py-3 hover:bg-green-500 justify-center dark:bg-slate-900 dark:text-gray-50 text-slate-900 bg-gray-200 rounded-lg text-pretty text-sm"
              @click="addBiography"
            >
              Add your biography
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!users[0]?.current_plan"
      class="w-full h-full p-4 bg-gray-100 z-50 mb-12 lg:relative rounded-xl dark:bg-slate-800 shadow-[0px_0px_10px_0px_#1a202c] dark:shadow-[0px_0px_10px_0px_#f7fafc] overflow-hidden lg:p-14"
    >
      <div class="flex">
        <div
          class="text-3xl lg:w-1/2 w-5/6 brico-800 text-slate-900 dark:text-gray-50 flex lg:p-4 flex-col lg:m-4"
        >
          <span class="lg:text-4xl text-2xl">Explore our plans</span>
          <span class="lg:text-3xl text-xl">Make your choices</span>
          <span class="lg:text-2xl text-lg">Take the advantages</span>
          <Nuxt-Link
            to="/"
            class="text-sm text-center mt-2 lg:w-1/3 w-full py-3 px-2 rounded-lg dark:bg-slate-900 dark:hover:bg-gray-50 hover:dark:text-slate-950 bg-gray-200"
          >
            Discover our plans
          </Nuxt-Link>
        </div>
        <div class="w-1/2 h-full relative">
          <img
            src="/assets/images/kaitoExample.png"
            class="rotate-12 lg:w-full -z-10 absolute lg:-top-10 top-5 right-5 lg:right-0"
          />
        </div>
      </div>
    </div>
    <div
      v-if="users[0]?.current_plan"
      class="lg:relative w-full h-full mb-12 bg-gray-100 lg:z-40 rounded-xl flex lg:justify-center lg:items-center dark:bg-slate-800 shadow-[0px_0px_10px_0px_#1a202c] dark:shadow-[0px_0px_10px_0px_#f7fafc] overflow-hidden group"
    >
      <Nuxt-Link
        to="/"
        class="relative z-40 lg:py-3 lg:px-4 overflow-hidden flex items-center justify-center shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 dark:bg-gray-50 dark:text-slate-950 text-gray-50 bg-slate-900 rounded-lg text-pretty text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      >
        <span class="z-50 lg:block hidden">Explore your photolio</span>
      </Nuxt-Link>

      <div
        class="lg:absolute lg:w-5/6 w-full lg:h-5/6 h-full bottom-0 rounded-t-lg flex flex-col bg-gray-50 dark:bg-slate-900"
      >
        <div
          class="h-9 w-full bg-gray-200 dark:bg-slate-700 rounded-t-lg flex items-center justify-start p-4"
        >
          <span class="lg:w-5 lg:h-5 size-3 rounded-full bg-red-400"></span>
          <span
            class="lg:w-5 lg:h-5 size-3 rounded-full mx-2 bg-yellow-400"
          ></span>
          <span class="lg:w-5 lg:h-5 size-3 rounded-full bg-green-400"></span>
        </div>
        <div class="flex w-full flex-col lg:mt-0 mt-8 lg:flex-row items-center">
          <div class="flex w-full lg:flex-row flex-col lg:m-10 m-0">
            <div class="lg:w-1/4 w-full h-full flex justify-center">
              <img
                src="../assets/images/lugubre.png"
                class="w-[200px] h-[200px] rounded-full"
              />
            </div>
            <div class="flex flex-col lg:w-3/5 w-full lg:mt-0 mt-8 items-center justify-center">
              <span class="text-5xl brico-800 lg:w-full w-5/6 lg:text-start text-center"
                >👋 {{ users[0]?.pseudo }}
                <span class="text-2xl brico-800">.{{ users[0]?.country }}</span>
              </span>
              <p class="mt-6 w-4/5 text-start brico-200">{{ users[0]?.biography }}</p>
            </div>
            <div class="flex lg:flex-col lg:w-1/12 w-full items-center justify-end lg:mr-0 lg:my-0 my-4 h-full">
              <Icon name="mdi:email" size="32"></Icon>
              <Icon name="mdi:pinterest" size="32" class="my-2"></Icon>
              <Icon name="mdi:linkedin" size="32" class="lg:mr-0 mr-4"></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
const client = useSupabaseClient();
const user = useSupabaseUser();
const users = ref<User[]>([]);
const updateBio = ref<boolean>(false);
const biographyContent = ref<string>("");
const loading = ref<boolean>(false);
const countries = ref<countries[]>([]);
const country = ref(countries.value[0] || null);
const newPseudo = ref<string>("");
const newWork = ref<string>("");
const newCountry = ref<string>("");
const newBiography = ref<string>("");

interface countries {
  continent: string;
  country_name: string;
  iso_code: string;
}

interface User {
  id: string;
  pseudo: string;
  profil_picture: string;
  biography: string;
  country: string;
  work: string;
  current_plan: string;
}

async function addDetails(pseudo: string, work: string, country: string) {
  if (!user.value || !user.value.id) {
    toast.add({
      title: "Error",
      description: "User ID not found.",
    });
    return;
  }

  const { data, error } = await client.from("users").upsert({
    id: user.value.id,
    pseudo: newPseudo.value,
    work: newWork.value,
    country: newCountry.value,
  });

  if (error) {
    toast.add({
      title: "Error",
      description: error.message,
    });
  } else {
    toast.add({
      title: "Informations added",
    });
    await fetchData();
  }
}

async function addBiography() {
  if (!user.value || !user.value.id) {
    toast.add({
      title: "Error",
      description: "User ID not found.",
    });
    return;
  }

  const { data, error } = await client
    .from("users")
    .upsert({
      biography: newBiography.value,
    })
    .eq("id", user.value.id);

  if (error) {
    toast.add({
      title: "Error",
      description: error.message,
    });
  } else {
    toast.add({
      title: "Biography added",
    });
    await fetchData();
  }
}

async function getCountries() {
  const { data, error } = await client.from("countries").select("country_name");
  if (data) {
    countries.value = data.map((country: any) => country.country_name);
    country.value = countries.value[0];
  } else {
    toast.add({
      title: "Error",
      description: error.message,
    });
  }
}

function updateBiography() {
  updateBio.value = !updateBio.value;
}

async function update() {
  if (!user.value) {
    toast.add({
      title: "Error",
      description: "User not found",
    });
    return;
  }

  loading.value = true;

  try {
    const { data, error } = await client
      .from("users")
      .update({ biography: biographyContent.value })
      .eq("id", user.value.id);

    if (error) {
      throw error;
    }

    toast.add({
      title: "Biography updated",
    });

    await fetchData();
  } catch (error) {
    toast.add({
      title: "Error",
      description: error.message,
    });
  } finally {
    loading.value = false;
    refreshNuxtData(profile.value);
  }
}

async function fetchData() {
  const { data, error } = await client
    .from("users")
    .select(
      "id, pseudo, profil_picture, biography, country, work, current_plan"
    )
    .eq("id", user.value?.id);

  if (data) {
    users.value = data as User[];
    biographyContent.value = users.value[0].biography;
  } else {
    console.error(error);
  }
}

fetchData();
getCountries();
</script>
<style lang="css" scoped></style>
