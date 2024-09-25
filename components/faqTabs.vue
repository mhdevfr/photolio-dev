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
    id: "wW",
    question: "Who made this website ?",
    answer: `We needed a way to animate DOM elements without adding to the
    virtual DOM in Vue and React. And it turned out our solution was gonna work
    great for lots of other use cases as well.`,
  },
  {
    id: "license",
    question: "Is it free ?",
    answer: `It sure is! AutoAnimate is MIT licensed, which basically means you
    are free to take it and do whatever you want with it. If you find it useful
    consider <a href="https://github.com/sponsors/formkit">supporting our open source efforts</a>.`,
  },
  {
    id: "who",
    question: "Can we upload nice photos ?",
    answer: `AutoAnimate is a team effort 💪 . Most of the code was written by
      <a href='https://twitter.com/jpschroeder'>Justin Schroeder</a>,
      <a href='https://twitter.com/0xBOYD'>Andrew Boyd</a> played a key
      role on the docs, and the rest of the <a href='https://formkit.com'>FormKit</a>
      team held down the fort.`,
  },
]);

const current = ref(faq.value[0].id - 1);
</script>

<style scoped lang="css">
</style>
