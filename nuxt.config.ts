// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/css/global.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image"],
});
