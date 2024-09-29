<template>
    <div v-motion-pop-visible-once class="flex flex-col items-center">
      <h1
        class="text-slate-900 w-4/5 dark:text-gray-100 font-raleway text-center lg:text-7xl text-5xl font-bold mt-11 mb-6 brico-800"
      >
       Choose your plan at Lightning
        <span class="text-yellow-300">Speed</span>
      </h1>
      <p
        class="text-slate-900 dark:text-gray-100 opacity-60 text-center font-raleway lg:text-2xl text-lg font-normal w-4/6 brico-200"
      >
        Showcase your creativity with a stunning portfolio thats ready in no time,
        without compromising on quality or style used by {{ count }} users.
      </p>
      <heroButton />
      <Transition name="bounce">
        <Icon
          name="iconamoon:mouse-fill"
          size="48"
          class="mt-16 animate-bounce opacity-0 lg:opacity-100"
        />
      </Transition>
    </div>
  </template>
  <script setup lang="ts"></script>
  