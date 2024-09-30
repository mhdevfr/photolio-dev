import { useColorMode } from '@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
  const colorMode = useColorMode();

  // Réinitialiser le mode à "light" sur certaines pages (par exemple, landing ou login)
  if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
    colorMode.preference = 'light'; // Force le mode clair
  }
});
