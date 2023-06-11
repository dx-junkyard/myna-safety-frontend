<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import ReportTag from '@/components/common/ReportTag.vue'
import moment from 'moment'

export default defineComponent({
  setup() {
    const store = useStore()

    const isMapOutlineOpen = computed(() => store.getters['userReports/getMapOutlineStatus'])
    const getModalContent = computed(() => store.getters['userReports/getModalContent'])

    const changeMapOutlineStatus = () => store.commit('userReports/changeMapOutlineStatus')
    const getImageUrl = (name: string) => {
      return new URL(name, import.meta.url).href
    }
    return { isMapOutlineOpen, changeMapOutlineStatus, getImageUrl, getModalContent, moment }
  },
  data() {
    return {
      isEmojiOpen: false
    }
  },
  components: {
    ReportTag
  }
})
</script>

<template>
  <!-- 詳細表示 modal -->
  <div
    v-if="isMapOutlineOpen"
    id="mapOutlineModal"
    class="absolute bottom-5 m-auto w-11/12"
    style="background: rgb(230, 244, 251); left: 4%"
  >
    <div class="flex p-2">
      <div class="w-1/3 py-3 lg:p-5">
        <img
          v-if="getModalContent.image_url"
          :src="getImageUrl(getModalContent.image_url)"
          class="w-50"
          alt="product image"
        />
        <img v-else src="@/assets/image/people_in_trable.png" class="w-50" alt="product image" />
      </div>
      <div class="w-2/3 p-3 lg:p-5">
        <div class="flex items-start justify-between rounded-t">
          <h3 class="md:text-xl font-semibold text-gray-900">{{ getModalContent.title }}</h3>
          <button
            @click="changeMapOutlineStatus"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-hide="editUserModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <!--マイナスコアによって優先表示-->
        <div class="flex items-center mt-2.5 mb-5">
          <ReportTag :user-report="getModalContent"></ReportTag>
        </div>

        <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >位置情報</span
          >
          <span>{{ getModalContent.address }}</span>
        </div>

        <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >報告内容</span
          >
          <span>{{ getModalContent.content }}</span>
        </div>

        <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >時間</span
          >
          <span>{{ moment(getModalContent.created_at).format('YYYY年MM月DD日 hh時mm分') }}</span>
          <span v-if="getModalContent.updated_at">{{
            moment(getModalContent.updated_at).format('YYYY年MM月DD日 hh時mm分')
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
