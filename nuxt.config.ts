// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "nuxt-swiper", "@nuxt/ui"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_usage.scss" as *;',
        },
      },
    },
  },
  css: ["assets/css/reset.scss", "assets/css/_globals.scss"],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
    },
  },
  swiper: {
    styleLang: "css",
    modules: ["navigation", "pagination"],
  },
  nitro: {
    database: {
      default: {
        connector: "sqlite",
        options: { name: "db" },
      },
    },
  },
  routeRules: {
    "/api/**": {
      cors: true,
      headers: { "access-control-allow-methods": "GET" },
    },
  },
});