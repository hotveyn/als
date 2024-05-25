// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxt/ui",
    "nuxt-seo-experiments",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
  ],
  gtag: {
    // Your primary Google tag ID
    id: "G-3JY7VX1H2M",
  },
  robots: {
    disallow: ["/login", "/admin"],
    allow: "/",
  },
  site: {
    url: "https://als-shop.ru/",
    name: "ALS",
    description:
      "ALS — ваш надёжный партнёр в доставке товаров из Европы в Россию. Мы предоставляем быструю и надежную услугу доставки, помогая вам получить желанные товары известных европейских брендов прямо к вам домой. Оптимизируйте свой шоппинг с ALS уже сегодня!",
    defaultLocale: "ru",
  },
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