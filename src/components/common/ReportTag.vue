<script lang="ts">
export default {
  props: ['userReport'] // プロパティ名の配列
}
</script>
<template>
  <span
    v-if="userReport.report_score > 3"
    class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-yellow-300"
  >
    <p>より助けを必要としている人からの申告です</p>
  </span>
  <span
    v-if="userReport.report_level === 'High'"
    class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
  >
    <p>緊急度: 高</p>
  </span>
  <span
    v-else-if="userReport.report_level === 'Middle'"
    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
  >
    <p>緊急度: 中</p>
  </span>
  <span
    v-else
    class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
  >
    <p>緊急度: 低</p>
  </span>
</template>
