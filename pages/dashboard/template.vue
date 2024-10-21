<template>
    <div
      class="w-full flex lg:justify-start justify-center h-full bg-gray-50 dark:bg-slate-900"
    >
      <adminSidebar class="w-1/6 h-screen left-0 top-0 lg:block hidden" />
      <AdminNavbarBottom class="lg:hidden block" />
      <div
        class="w-5/6 lg:ml-10 text-center flex items-center justify-center h-full"
      >
        <div
          class="lg:w-full w-full h-full lg:h-screen flex flex-col items-center bg-gray-50 dark:bg-slate-900"
        >
          <div class="text-3xl mt-12 flex items-center flex-col brico-800">
            <h1 class="text-4xl brico-800 my-2">
              Choose your
              <span class="underline underline-offset-4 decoration-pink-800"
                >templates</span
              >
            </h1>
            <p class="text-2xl brico-200 w-2/3 text-center">
              Choose the template you need to take the control of your art
              available only for
              <span class="underline underline-offset-4 decoration-blue-500"
                >free plans</span
              >
              for now
            </p>
          </div>
  
          <div
            class="lg:w-full w-full lg:flex-row flex-col justify-around items-center flex mt-12"
          >
            <div class="h-full rounded-lg lg:w-1/3 p-4 w-full flex items-center justify-center">
              <div class="p-4 flex items-center justify-center flex-col">
                <div
                  class="lg:w-96 w-5/6 lg:h-96 h-auto flex flex-col items-center justify-center rounded-t-md mt-2"
                  id="templateChoose"
                >
                  <img
                    src="/assets/images/template_first.png"
                    :class="['w-full my-4 shadow-green-500 rounded-md shadow-lg', choosen_template === 'simple_template' ? 'shadow-green-500 shadow-lg' : 'shadow-none']"

                    id="templateExample"
                  />
                </div>
                <div class="flex w-full justify-around">
                  <button
                    v-if="choosen_template !== 'simple_template'"
                    class="bg-gray-50 py-2 text-gray-950 px-3 h-full mt-5 rounded-md"
                    @click="choosen_template = 'simple_template'"
                  >
                    Choose this template
                  </button>
                  <div
                    v-if="choosen_template === 'simple_template'"
                    class="bg-gray-950 py-2 text-gray-50 px-3 h-full flex items-center mt-5 rounded-md"
                  >
                    <Icon name="fluent:checkbox-checked-16-filled" class="text-green-400 size-6" />
                    <span class="ml-2">Template choosed</span>
                  </div>
                  <Nuxt-Link
                    to="/photolio/mhdev"
                    class="bg-gray-950 text-gray-50 py-2 flex items-center w-2/5 justify-around mt-5 rounded-md"
                  >
                    <span>Take a look</span>
                    <Icon name="icon-park-outline:arrow-up" class="rotate-45" />
                  </Nuxt-Link>
                </div>
              </div>
            </div>
  
            <div class="h-full rounded-lg lg:w-1/3 p-4 w-full flex items-center justify-center">
              <div class="p-4 flex items-center justify-center flex-col">
                <div
                  class="lg:w-96 w-5/6 lg:h-96 h-auto  flex flex-col items-center justify-center rounded-t-md mt-2"
                  id="templateChoose"
                >
                  <img
                    src="/assets/images/template_second.png"
                    :class="['w-full my-4 shadow-green-500 rounded-md shadow-lg', choosen_template === 'premium_template' ? 'shadow-green-500 shadow-lg' : 'shadow-none']"
                    id="templateExample"
                  />
                </div>
                <div class="flex w-full justify-around">
                  <button
                    v-if="choosen_template !== 'premium_template'"
                    class="bg-gray-50 py-2 text-gray-950 px-3 h-full mt-5 rounded-md"
                    @click="choosen_template = 'premium_template'"
                  >
                    Choose this template
                  </button>
                  <div
                    v-if="choosen_template === 'premium_template'"
                    class="bg-gray-950 py-2 text-gray-50 px-3 h-full flex items-center mt-5 rounded-md"
                  >
                    <Icon name="fluent:checkbox-checked-16-filled" class="text-green-400 size-6" />
                    <span class="ml-2">Template choosed</span>
                  </div>
                  <Nuxt-Link
                    to="/photolio/mhdev"
                    class="bg-gray-950 text-gray-50 py-2 flex items-center w-2/5 justify-around mt-5 rounded-md"
                  >
                    <span>Take a look</span>
                    <Icon name="icon-park-outline:arrow-up" class="rotate-45" />
                  </Nuxt-Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { fetchData } from '@/utils/userUtils';
  import { ref, watch } from 'vue';
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const users = ref([]);
  const choosen_template = ref("");  
  const current_plan = ref("");
  
  await fetchData(client, user, users);
  
  choosen_template.value = users.value[0]?.choosen_template || "";
  
  watch(choosen_template, (newVal) => {
    console.log("New template chosen:", newVal);
  });
  </script>
  
  <style lang="css" scoped>
  #templateChoose {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  #templateExample {
    transform: rotateX(30deg) rotateZ(0deg) rotateY(0deg);
    transform-style: preserve-3d;
  }
  </style>
  