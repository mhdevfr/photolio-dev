<template>
  <div class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100/30
    rounded-full shadow-lg p-2 w-10/12 max-w-sm flex justify-around items-center z-50 space-x-2">
    
    <nuxt-link to="/" class="text-white hover:text-gray-300">
      Home
    </nuxt-link>
    <nuxt-link to="/" class="text-white hover:text-gray-300">
      Gallery
    </nuxt-link>
    <nuxt-link to="/contact" class="text-white hover:text-gray-300">
      About Me
    </nuxt-link>
    <nuxt-link to="/contact" class="bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white hover:bg-opacity-50 transition-all px-4 py-2 rounded-full">
      Contact
    </nuxt-link>
  </div>
</template>

