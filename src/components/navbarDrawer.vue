<template>
  <NuxtDrawer direction="left">
  <NuxtButton color="ghost" variant="subtle" icon="i-lucide-menu" :overlay="false" />

  <template #content>
    <NuxtCollapsible class="flex flex-col gap-2 w-64">
      <NuxtButton label="Open" color="ghost" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
      <template #content>
        <Placeholder class="h-48" />
      </template>
    </NuxtCollapsible>
  </template>
  </NuxtDrawer>
</template>