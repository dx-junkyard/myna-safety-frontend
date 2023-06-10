<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/common/Sidebar.vue'
import Header from './components/common/Header.vue'
</script>

<template>
  <Sidebar />
  <div>
    <RouterView />
  </div>
</template>
