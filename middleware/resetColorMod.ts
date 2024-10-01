import { useColorMode } from '@vueuse/core';
export default defineNuxtRouteMiddleware((to, from) => {
  const colorMode = useColorMode();
  if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
    colorMode.preference = 'dark'; 
  }
});
