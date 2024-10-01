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
              v-if="users[0]?.current_plan"
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
              <div class="w-full mt-12">
                <span
                  class="py-3 px-2 rounded-lg flex shadow-md items-center justify-around dark:shadow-gray-50 shadow-gray-950 dark:bg-gray-50 text-xl dark:text-slate-950 bg-slate-950 text-gray-50 brico-200"
                >
                  <span class="flex items-center w-1/3">
                    <Icon
                      name="heroicons-outline:status-online"
                      class="animate-pulse size-8 mr-2 text-green-500"
                    />
                    Online
                  </span>
                  <nuxt-link class="w-1/3" :to="`/photolio/${users[0]?.pseudo}`"
                    >{{ users[0]?.pseudo }}'s photolio</nuxt-link
                  >
                </span>
              </div>
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
                class="h-full w-full flex z-10 items-center flex-row justify-center brico-800"
              >
                <button
                  @click="
                    plan = 'free';
                    activatePlan();
                  "
                  class="absolute z-40 lg:py-3 lg:px-4 overflow-hidden flex items-center justify-center shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 dark:bg-gray-50 dark:text-slate-950 text-gray-50 bg-slate-900 rounded-xl text-pretty text-sm transition-opacity duration-300"
                >
                  <span class="z-50 text-4xl"> Activate your </span>
                  <span
                    class="underline text-4xl underline-offset-4 z-50 decoration-blue-500 mx-2"
                    >free</span
                  >
                  <span class="z-50 text-4xl">plan now!</span>
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
import { fetchData } from "@/utils/userUtils";
import { updatePlan } from "@/utils/planUtils";
const toast = useToast();
const client = useSupabaseClient();
const user = useSupabaseUser();
const users = ref([]);
const current_plan = ref("");
const plan = ref("");

const activatePlan = async () => {
  try {
    await updatePlan(user, plan.value, client, users);
    await fetchData(client, user, users, current_plan);
  } catch (error) {
    toast.add({
      title: "Error",
      description: error.message,
    });
  } finally {
    plan.value = "";
    toast.add({
      title: "Success",
      description: "Free Plan activated",
    });
  }
};

onMounted(async () => {
  await fetchData(client, user, users, current_plan);
});
</script>
