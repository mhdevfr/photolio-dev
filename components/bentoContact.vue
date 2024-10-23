<template>
  <div class="mx-auto max-w-7xl px-10 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="relative overflow-hidden bg-gradient-to-r from-[#6742ff] to-[#ffe99c] shadow-[9px_9px_0px_#FFF] rounded-lg sm:rounded-2xl px-4 pt-8 sm:px-6 md:pt-12 lg:flex lg:gap-x-20 lg:px-48 lg:pt-0">
      <div
        class="mx-auto max-w-lg lg:max-w-[97ch] text-center lg:flex-auto lg:py-16 lg:text-center"
      >
        <h2 class="text-2xl font-bold text-gray-100 sm:text-3xl lg:text-4xl">
          Have questions, suggestions, or don’t know which plan to choose? Let us know!
        </h2>
        <p class="mt-4 text-base leading-7 text-gray-200 sm:text-lg lg:text-lg">
          We're here to help! If you have any questions, ideas for improving the app, or any other feedback, we'd love to hear from you.
        </p>
        <div class="mt-4 sm:mt-6 pb-3 flex items-center justify-center gap-x-4 sm:gap-x-6">
          <nuxt-link
            to="/contact"
            class="rounded-md bg-gray-100 px-3.5 py-2.5 text-base font-semibold text-slate-900 hover:bg-black hover:text-gray-100"
          >
            Contact us
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>