<template>
  <div class="w-full flex justify-start h-full bg-gray-50 dark:bg-slate-900">
    <adminSidebar class="w-1/6 h-screen left-0 top-0 lg:block hidden" />
    <AdminNavbarBottom class="lg:hidden block" />
    <div class="w-5/6 ml-10 text-center h-full">
      <div
        class="w-full h-screen flex flex-col items-center bg-gray-50 dark:bg-slate-900"
      >
        <div class="text-3xl mt-12 brico-800">
          <h1 class="text-4xl brico-800">Ours differents plans</h1>
          <p class="text-2xl brico-200 text-center">
            Choose the plan you need take the control of your art
          </p>
        </div>
        <div class="mt-12 flex justify-around w-full">
          <div class="w-full h-96 border-dashed border rounded-xl">
            <div
              v-if="!users[0]?.current_plan"
              class="p-6 w-full text-start h-full"
            >
              <h1 class="text-4xl brico-800">
                Your Current Plan is
                <span
                  class="underline underline-offset-4 decoration-blue-500"
                  >{{ users[0]?.current_plan }}</span
                >
                !
              </h1>
            </div>
            <div
              v-else
              class="p-6 w-full z-50 shadow-[0px_0px_10px_0px_#1a202c] object-cover dark:shadow-[0px_0px_10px_0px_#f7fafc] rounded-xl text-start h-full relative"
            >
              <img
                src="/assets/images/kaitoExample.png"
                class="rotate-12 w-32 -z-50 absolute lg:-top-10 top-5 right-5 lg:right-0"
              />
              <h1 class="text-4xl brico-800">
                You don't have
                <span class="underline underline-offset-4 decoration-red-500"
                  >any plan</span
                >
                yet !
              </h1>
              <div
                class="h-full w-full flex z-50 items-center flex-row justify-center"
              >
                <button
                  class="bg-green brico-200 bg-gray-50 text-slate-950 rounded-xl text-xl py-2 px-3"
                >
                  Activate your
                  <span
                    class="underline underline-offset-4 decoration-blue-500 text-center"
                  >
                    free
                    <br /> </span
                  >plan now !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();
const users = ref([]);
const current_plan = ref("");

import { fetchData } from "../../utils/userUtils";

fetchData(client, user, users, current_plan);
</script>
