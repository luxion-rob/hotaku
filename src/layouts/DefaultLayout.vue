<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'

const isSideBarShow = ref<boolean>(false)
const searchString = ref<string>('')
const avatarUrl = ref<string>('/src/assets/defaultAvatar.jpg')

const handleSidebarShow = () => {
  isSideBarShow.value = !isSideBarShow.value
}
</script>

<template>
  <div class="min-h-screen">
    <div
      class="navbar main-container sticky top-0 hidden w-full bg-black-light tablet:block tablet:px-48 tablet-lg:px-64 desktop:px-144 desktop-uhd:px-256"
    >
      <div class="flex items-center justify-between">
        <ul class="flex h-20">
          <li class="flex h-full items-center justify-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              class="h-20 w-20 object-cover"
            />
          </li>
          <li class="box-center h-full font-semibold text-white hover:text-primary">
            <RouterLink
              class="tracking-wide"
              to=""
            >
              Home
            </RouterLink>
          </li>
          <li class="box-center h-full font-semibold text-white hover:text-primary">
            <RouterLink
              class="px-4 tracking-wide"
              to=""
            >
              Search
            </RouterLink>
          </li>
          <li class="box-center h-full font-semibold text-white hover:text-primary">
            <RouterLink
              class="px-4 tracking-wide"
              to=""
            >
              Random
            </RouterLink>
          </li>
        </ul>
        <div class="flex items-center">
          <SearchBar v-model="searchString" />
          <img
            :src="avatarUrl"
            alt="avatar"
            class="h-10 w-10 rounded-full object-contain"
          />
        </div>
      </div>
    </div>
    <div class="bg-black-light px-4 tablet:hidden">
      <ul class="flex items-center justify-between">
        <li>
          <RouteLink to="">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              class="h-16 w-16 object-cover"
            />
          </RouteLink>
        </li>
        <li>
          a
          <button
            class="box-center rounded p-2 hover:bg-black-dark active:bg-black-dark"
            @click="handleSidebarShow"
          >
            <img
              src="/src/assets/icons/menu-dark.svg"
              class="h-8 w-8 object-contain"
              alt="Menu"
            />
          </button>
        </li>
      </ul>
    </div>
    <main
      class="min-h-screen w-full bg-black-dark tablet:px-48 tablet-lg:px-64 desktop:px-144 desktop-uhd:px-256"
    >
      <div
        v-show="isSideBarShow"
        class="sidebar"
      >
        <ul class="flex h-20 flex-col items-start">
          <li class="box-center h-full pl-4 font-semibold text-white hover:text-primary">
            <RouterLink
              class="tracking-wide"
              to=""
            >
              Home
            </RouterLink>
          </li>
          <li class="box-center h-full pl-4 font-semibold text-white hover:text-primary">
            <RouterLink
              class="tracking-wide"
              to=""
            >
              Search
            </RouterLink>
          </li>
          <li class="box-center h-full pl-4 font-semibold text-white hover:text-primary">
            <RouterLink
              class="tracking-wide"
              to=""
            >
              Random
            </RouterLink>
          </li>
        </ul>
      </div>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped></style>
