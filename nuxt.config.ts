import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint"],

  srcDir: "src",
  css: ["assets/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    awsAmplify: {
      catchAllStaticFallback: true,
    },
  },
});
