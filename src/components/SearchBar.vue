<script setup lang="ts">
const value = defineModel<string>({ required: true })
</script>

<template>
  <div
    class="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-2 shadow-inner"
  >
    <input
      class="border-none bg-transparent outline-none"
      type="text"
      v-model="value"
    />
    <img
      src="@/assets/icons/search-icon.svg"
      alt="search-icon"
      class="h-6 w-6 object-contain"
    />
  </div>
</template>

<style scoped></style>
