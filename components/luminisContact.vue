<template>
  <section>
    <div class="container px-6 py-12 mx-auto">
      <div id="my-contact">
        <h1
          class="mt-2 text-3xl font-semibold text-gray-100 md:text-4xl lg:text-5xl"
        >
          Contact me
        </h1>

        <p class="mt-3 md:text-lg lg:text-xl text-gray-400">
          A question or a request ? Send me a message.
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        <div
          class="p-4 rounded-lg md:p-6 bg-gray-600/30 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <span
            class="inline-block p-3 text-gray-500 rounded-lg bg-gray-200/10 border border-gray-200/10"
          >
            <Icon
              name="majesticons:mail"
              width="24"
              height="24"
              style="color: white"
            />
          </span>

          <h2
            class="mt-4 md:text-lg lg:text-2xl text-base font-medium text-gray-200"
          >
            Wanna work together ?
          </h2>
          <p class="mt-2 text-sm md:text-sm underline lg:text-lg text-gray-300">
            {{ users.email }}
          </p>
        </div>

        <div
          class="p-4 rounded-lg md:p-6 bg-gray-600/30 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <span
            class="inline-block p-3 rounded-lg bg-gray-200/10 border border-gray-200/10"
          >
            <Icon
              name="mdi:location"
              width="24"
              height="24"
              style="color: white"
            />
          </span>

          <h2
            class="mt-4 text-base md:text-lg lg:text-2xl font-medium text-gray-200"
          >
            I'm based in {{ users.country }}
          </h2>
          <p class="mt-2 text-sm md:text-sm lg:text-lg underline text-gray-300">
            {{ users.work }}
          </p>
        </div>

        <div
          class="p-4 rounded-lg md:p-6 bg-gray-600/30 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <span
            class="inline-block p-3 rounded-lg bg-gray-200/10 border border-gray-200/10"
          >
            <Icon
              name="ic:baseline-phone"
              width="24"
              height="24"
              style="color: white"
            />
          </span>

          <h2
            class="mt-4 text-base md:text-lg lg:text-2xl font-medium text-gray-200"
          >
            Call me
          </h2>
          <p class="mt-2 text-sm md:text-sm lg:text-lg underline text-gray-300">
            {{ users.phone }}
          </p>
        </div>
      </div>
      <LuminisSocial class="mt-4" />
    </div>
  </section>
</template>
<script setup lang="ts">
interface User {
  id: string;
  pseudo: string;
  work?: string;
  country?: string;
  biography?: string;
  avatar?: string;
  email?: string;
}

const props = defineProps({
  users: Object as PropType<User>,
});



</script>
