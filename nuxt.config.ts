// nuxt.config.js
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        clientPort: 3000,
      },
    },
  },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
    "@nuxtjs/supabase",
    "nuxt-chatgpt",
    "@formkit/auto-animate/nuxt",
    "nuxt-marquee",
  ],
  ui: {},
  supabase: {
    redirect: false,
  },
  compatibilityDate: "2024-09-12",
});
