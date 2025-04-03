<script setup lang="ts">
const value = ref<string>("");

const input = useTemplateRef("input");

defineShortcuts({
  "/": () => {
    input.value?.inputRef?.focus();
  },
});
</script>

<template>
  <div class="flex col justify-center">
    <div class="flex justify-center fixed top-0 inset-x-0">
      <div class="flex justify-between max-w-navbar grow">
        <div class="flex items-center">
          <NavbarDrawer class="mr-2" />
          <NuxtImg
            title="logo"
            src="/logo.png"
            width="90"
            class="object-contain"
          />
        </div>
        <div class="flex justify-end flow items-center">
          <NuxtInput
            ref="input"
            v-model="value"
            icon="i-lucide-search"
            highlight
            title="Search bar"
            color="primary"
            variant="soft"
            placeholder="Search..."
            class="mr-4"
          >
            <template #trailing>
              <NuxtKbd value="/" />
            </template>
          </NuxtInput>
          <NuxtAvatar src="https://github.com/benjamincanac.png" size="xl" />
        </div>
      </div>
    </div>
    <div class="pt-16 max-w-navbar h-screen overflow-y-auto overflow-x-hidden">
      <slot />
    </div>
  </div>
</template>
