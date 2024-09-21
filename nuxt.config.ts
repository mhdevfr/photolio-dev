// nuxt.config.js
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devtools: { enabled: true },
  devServer: {
    port: 24678, // Spécifie un port personnalisé si nécessaire
  },
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase',
    'nuxt-chatgpt',
    '@formkit/auto-animate/nuxt',
    'nuxt-marquee',
  ],

  supabase: {
    redirect: false
  },

  compatibilityDate: '2024-09-12',
})