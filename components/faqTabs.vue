<template>
  <div class="flex flex-col mt-16 sm:mt-20 lg:mt-32">
    <div class="w-full text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-7xl brico-800 mb-8 sm:mb-10 lg:mb-12">F.A.Q</h1>
    </div>
    <div
      class="accordion-example w-full flex items-center justify-center brico-200 text-slate-950"
    >
      <ul class="accordion flex justify-center flex-col w-full items-center">
        <li
          class="accordion-item py-2 sm:w-4/5 lg:w-3/4 w-3/4 mx-4 sm:mx-8"
          v-for="q in faq"
          :key="q.id"
          v-auto-animate
        >
          <div
            class="question justify-between cursor-pointer flex items-center p-3 sm:p-4 text-lg sm:text-2xl bg-white rounded-md shadow hover:bg-gray-100 transition"
            @click="current = current === q.id ? false : q.id"
          >
            <div>
              <span class="font-semibold text-base sm:text-lg">Q</span>
              <span class="ml-2 text-sm sm:text-lg">{{ q.question }}</span>
            </div>

            <div>
              <Icon
                :name="current === q.id ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="ml-auto"
              />
            </div>
          </div>
          <p
            v-if="q.id === current"
            v-html="q.answer"
            class="w-full p-3 sm:p-4 text-base sm:text-xl text-gray-50"
          />
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
const faq = ref([
  {
    id: "Who",
    question: "Who made this website ?",
    answer: `This website was made by Milan and Enzo, two young developpers since 2023, and they are still working on it.
    we are always looking for new ideas to improve our website, so don't hesitate to contact us.
    `,
  },
  {
    id: "license",
    question: "Is it free ?",
    answer: `It sure is! Photolio is open source and licensed under the MIT license.
      You can use it for personal or commercial projects, and you can modify it however you like.`,
  },
  {
    id: "who",
    question: "Can we upload nice photos ?",
    answer: `Of course! You can upload any photos you like except illegal stuff and as long as they are your own.
      We recommend uploading high-quality images to get the best results.`,
  },
]);

const current = ref(faq.value[0].id - 1);
</script>

<style scoped lang="css">
</style>
