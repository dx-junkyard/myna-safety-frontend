<script lang="ts">
import { defineComponent, computed, onBeforeMount } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userReport = computed(() => store.getters['userReports/getAllList'])
    const isMapOutlineOpen = computed(() => store.getters['userReports/getMapOutlineStatus'])
    const changeMapOutlineStatus  = () => store.commit('userReports/changeMapOutlineStatus')
    onBeforeMount(async () => {
      await store.dispatch('userReports/getAllList')
    })
    return { userReport, changeMapOutlineStatus, isMapOutlineOpen }
  },
  components: {
  },
  data() {
    return {
        isEmojiOpen: false,
    }
  }
})
</script>

<template>
    <!-- 詳細表示 modal -->
    <div v-if="isMapOutlineOpen" id="mapOutlineModal" class="absolute bottom-5 m-auto w-11/12" style="background: rgb(230, 244, 251); left:4%;">
        <div class="flex p-2">
            <div class="w-1/3 py-3 lg:p-5">
                <img class="w-50" src="@/assets/image/hibiware.jpg" alt="product image" />
            </div>
            <div class="w-2/3 p-3 lg:p-5">
                <div class="flex items-start justify-between rounded-t">
                    <h3 class="md:text-xl font-semibold text-gray-900 ">
                        道路にひび割れがあって怖いです
                    </h3>
                    <button @click="changeMapOutlineStatus" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="editUserModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                【未着手】ステータス表示<br>
                2023/06/02 12:19<br>
                東京都台東区上野７丁目
            </div>
        </div>
    </div>
</template>