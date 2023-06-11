<script lang="ts">
export default {
  props: ['report_status'] // プロパティ名の配列
}
</script>
<template>
  <div v-if="report_status === 'NO ASSIGN'" class="flex items-center">
    <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
    新規
  </div>
  <div v-else-if="report_status === 'IN PROGRESS'" class="flex items-center">
    <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
    対応中
  </div>
  <div v-else-if="report_status === 'COMPLETE'" class="flex items-center">
    <div class="h-2.5 w-2.5 rounded-full bg-gray-500 mr-2"></div>
    完了
  </div>
  <div v-else-if="report_status === 'PENDING'" class="flex items-center">
    <div class="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
    保留
  </div>
  <div v-else>-</div>
</template>
