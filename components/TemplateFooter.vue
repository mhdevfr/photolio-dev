<template>
  <footer>
    <div
      class="mx-auto max-w-screen-lg px-4 pb-6 pt-8 sm:px-6 lg:max-w-screen-xl lg:px-6 lg:pb-12 lg:pt-16"
    >
      <div
        class="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start lg:text-left"
      >
        <h2
          class="text-4xl font-bold text-gray-900 dark:text-gray-50 lg:text-5xl"
        >
          Let's Collaborate
        </h2>

        <div class="mt-8 lg:mt-0 lg:flex lg:flex-col lg:items-end lg:ml-8">
          <NuxtLink
            to="mailto:milan.herbe@gmail.com"
            class="inline-flex items-center space-x-2 rounded-full border-4 shadow-[9px_9px_0px_#000] transition-all hover:skew-x-2 hover:-translate-y-2 border-neutral-900 px-10 py-3 text-xl font-bold text-neutral-900 dark:text-gray-50 lg:text-3xl lg:px-12 lg:py-4"
          >
            <span>Hire me</span>
            <Icon
              name="ph:arrow-up-right-bold"
              width="38"
              height="38"
              style="color: black"
            />
          </NuxtLink>

          <div class="mt-6 inline-flex items-center space-x-2">
            <div
              class="relative flex items-center justify-center h-5 w-5 rounded-full bg-[#BFFFBF] lg:h-6 lg:w-6 "
            >
              <div class="h-2 w-2 rounded-full bg-[#00FF00] animate-ping"></div>
            </div>
            <span
              class="text-lg font-regular text-neutral-900 lg:text-xl dark:text-gray-50"
              >Available for work</span
            >
          </div>
        </div>
      </div>

      <div class="mt-8 space-y-4 lg:space-y-0 lg:space-x-6 lg:mt-0">
        <NuxtLink
          to="#"
          class="inline-flex items-center space-x-2 text-lg font-semibold text-neutral-900 dark:text-gray-50 hover:text-gray-700 underline lg:text-xl"
        >
          <span>Dribble</span>
          <Icon
            name="mynaui:arrow-up-right"
            width="24"
            height="24"
            class="dark:text-gray-50 text-gray-900"
          />
        </NuxtLink>

        <NuxtLink
          to="#"
          class="inline-flex items-center space-x-2 text-lg font-semibold text-neutral-900 dark:text-gray-50 hover:text-gray-700 lg:text-xl underline"
        >
          <span>Instagram</span>
          <Icon
            name="mynaui:arrow-up-right"
            width="24"
            height="24"
            class="dark:text-gray-50 text-gray-900"
          />
        </NuxtLink>

        <NuxtLink
          to="#"
          class="inline-flex items-center space-x-2 text-lg font-semibold text-neutral-900 dark:text-gray-50 hover:text-gray-700 lg:text-xl underline"
        >
          <span>Facebook</span>
          <Icon
            name="mynaui:arrow-up-right"
            width="24"
            height="24"
            class="dark:text-gray-50 text-gray-900"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
