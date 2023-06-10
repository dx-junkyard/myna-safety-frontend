<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/common/Sidebar.vue'
import Header from './components/common/Header.vue'
import liff from '@line/liff'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  await liff
    .init({
      liffId: import.meta.env.VITE_APP_LIFF_ID || ''
    })
    .then(() => {
      console.log('LIFF init success')
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>

<template>
  <Sidebar />
  <div>
    <RouterView />
  </div>
</template>
