<template>
  <div class="w-1/2 flex justify-start">
    <button
      @click="isOpen = !isOpen"
      size="sm"
      class="text-gray-200 dark:bg-slate-800 outline-none px-4 py-2 flex justify-between items-center rounded-md"
    >
      <div class="flex justify-around items-center">
        <Icon name="heroicons-outline:search" class="mr-2" size="24" />
        Search
      </div>

      <div class="flex items-center ml-3 justify-end gap-0.5">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
      </div>
    </button>
    <UModal v-model="isOpen" v-motion-visible>
      <div class="p-4">
        <Placeholder class="h-48" />
        <div class="p-4">
          <h1 class="brico-800">Explore all photolios to get inspiration !</h1>
          <div class="w-full my-2 justify-between flex">
            <UInput
              size="lg"
              class="w-3/4"
              placeholder="Search for photolios"
              v-model="searchQuery"
            />
            <button
              class="px-3 flex items-center ml-2 text-sm dark:bg-black dark:text-gray-50 hover:opacity-75 bg-gray-100 text-gray-950 rounded-lg py-1"
              @click="sortAlphabetPhotolios"
            >
              Sort A-Z
              <Icon
                :name="
                  isSortedAscending
                    ? 'heroicons-outline:sort-ascending'
                    : 'heroicons-outline:sort-descending'
                "
                class="ml-2"
                size="16"
              />
            </button>
          </div>

          <div class="max-h-64 overflow-y-auto mt-4" v-auto-animate ref="parent">
            <div
              v-for="user in filteredUsers"
              v-auto-animate
              :key="user.id"
              class="mt-2"
            >
              <Nuxt-Link
                :to="`/photolio/${user.pseudo}/`"
                class="text-lg font-semibold flex items-center text-neutral-900 dark:text-gray-50 hover:text-gray-700"
              >
              <Icon name="fa-solid:file-alt" class="mr-2"  style="white" />

                {{ user.pseudo }} photolio's
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts();
const isOpen = ref(false);
const users = ref<any[]>([]);
const searchQuery = ref("");
const toast = useToast();
const client = useSupabaseClient();
const isSortedAscending = ref(true);
const [parent] = useAutoAnimate()

async function fetchAllPhotolios() {
  const { data, error } = await client
    .from("users")
    .select("pseudo, current_plan")
    .not("current_plan", "is", null);

  if (data) {
    users.value = data;
  } else {
    toast.add({
      title: "Error",
      description: error.message,
    });
  }
}

function sortAlphabetPhotolios() {
  users.value.sort((a, b) => {
    const pseudoA = a.pseudo.toLowerCase();
    const pseudoB = b.pseudo.toLowerCase();
    if (isSortedAscending.value) {
      return pseudoA > pseudoB ? 1 : -1;
    } else {
      return pseudoA < pseudoB ? 1 : -1;
    }
  });
  isSortedAscending.value = !isSortedAscending.value;
}

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    user.pseudo.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

defineShortcuts({
  meta_K: () => {
    isOpen.value = !isOpen.value;
  },
});

onMounted(() => {
  fetchAllPhotolios();
});
</script>
