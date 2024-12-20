<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import '@/output.css'
</script>

<template>
  <div id="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>
