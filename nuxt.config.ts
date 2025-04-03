import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  srcDir: "src",
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["assets/global.css"],
  ui: {
    prefix: "Nuxt",
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [tailwindcss()],
  },
  nitro: {
    awsAmplify: {
      catchAllStaticFallback: true,
    },
  },
});
