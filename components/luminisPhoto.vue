<template>
  <div class="my-16 mt-64">
    <h1 class="text-5xl font-semibold text-gray-100 mb-4">My gallery</h1>
    <p class="text-gray-300 text-xl mb-6">
      Here are some photos I took recently :
    </p>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" 
    v-for="picture in pictures"
    :key="picture.id"
    >
      <div
        class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group"
      >
        <div
          class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
        >
          <div>
            <div
              class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out"
            >
              <div class="font-bold">Photo 1</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img
          class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          :src="picture?.url"
          alt="Featured Photo 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: string;
  pseudo: string;
  work?: string;
  country?: string;
  biography?: string;
  avatar?: string;
}

interface Picture {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const loading = ref(true);
const props = defineProps({
  users: Object as PropType<User>,
  pictures: Array as PropType<Picture[]>,
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

console.log("image", props.users);
</script>
