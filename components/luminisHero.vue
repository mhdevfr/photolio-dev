<template>
  <div
    id="my-hero"
    class="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] 
           md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[300px]
           bg-gradient-to-br from-white/40 to-transparent 
           rounded-full blur-3xl overflow-hidden"></div>

  <div class="relative container mx-auto flex flex-col">
    <LuminisNavbar :users="users" />

    <div
      class="my-auto px-4 mb-8 mt-24 md:mt-36 lg:mt-24 w-full grid-cols-1 text-gray-50 md:flex md:gap-5 lg:grid lg:grid-cols-2"
    >
      <div
        class="col-span-1 flex flex-col space-y-6 md:w-3/5 lg:w-full lg:justify-center lg:text-left"
      >
        <div class="lg:justify-start">
          <available />
        </div>

        <h1
          class="text-5xl font-extrabold leading-tight text-dark-grey-900 lg:text-7xl"
        >
          {{ users?.pseudo }}
        </h1>

        <p
          class="text-base font-regular leading-7 text-dark-grey-600 lg:text-xl xl:w-3/4"
        >
          {{ users?.biography }}
        </p>

        <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 items-stretch">
          <button
            class="w-full md:w-auto rounded-xl bg-gray-200 px-8 py-5 text-xl font-medium text-black transition"
          >
            My photos
          </button>
          <button
            class="w-full md:w-auto rounded-xl border border-slate-50/40 px-8 py-5 text-xl font-medium text-dark-grey-900"
          >
            Contact me
          </button>
        </div>
      </div>

      <div
      class="flex items-center justify-end lg:justify-end w-full"
    >
      <ProfilPicturePseudo class="w-auto" :users="users" />
    </div>
    </div>

    <div>
      <LuminisPhoto :users="users" :pictures="pictures" />
    </div>

    <div>
      <LuminisContact />
    </div>

    <div>
      <LuminisFooter />
    </div>
  </div>
</template>

<style lang="css" scoped>
#my-hero {
  filter: blur(30px);
  -webkit-filter: blur(30px);
  will-change: transform, filter;
}

</style>
<script setup lang="ts">
const profilePictureUrl = ref<string | null>(null);
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

</script>
