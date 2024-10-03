<template> 
  <div>
      <NuxtLayout>
          <NuxtPage/>
      </NuxtLayout>
      <UNotifications />

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['reset-color-mod'],
});
useHead({
  title: 'Photolio', 
  meta: [
    { name: 'description', content: 'Photolio is a platform used for photograph to make a professionnal portfolio, fast, simple and free ! You can add your pictures, share it to whoever you want, and available all over the worl ! Hope you will enjoy it ! ' },
    { name: 'keywords', content: 'free, photo, picture, portfolio, artist, content, show' }, 
    { name: 'author', content: 'Photolio Dev' },
  ],
  link: [
    { rel: 'icon', href: './assets/images/logoPhotolio.svg' }, 
    { rel: 'stylesheet', href: 'URL de votre feuille de style' },
  ],
})
</script>
<style>


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
}
</style>