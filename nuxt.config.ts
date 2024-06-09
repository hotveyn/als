// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
    "nuxt-gtag",
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
    name: "ALS | Доставка товаров из Европы в РФ",
    description:
      "Доставка из Европы одежды косметики сумок и аксессуаров. Заказ посылок из ЕС. Заказ брендовой одежды из Европы. Доставка посылок в Россию",
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
