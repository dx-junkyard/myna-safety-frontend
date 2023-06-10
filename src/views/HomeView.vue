<script lang="ts">
import ReportDetailModal from '@/components/common/ReportDetailModal.vue'
import ReportStatusBudge from '@/components/common/ReportStatusBudge.vue'
import { defineComponent, computed, onBeforeMount } from 'vue'
import { useStore } from '@/store'
import type { UserReportModel } from '@/types/typescript-axios'

export default defineComponent({
  setup() {
    const store = useStore()
    const changeModal = (modalContent: UserReportModel) => {
      store.commit('userReports/changeModalContent', modalContent)
      store.commit('userReports/changeModalStatus')
    }

    const userReport = computed(() => store.getters['userReports/getAllList'])
    onBeforeMount(async () => {
      await store.dispatch('userReports/getAllList')
    })
    return { userReport, changeModal }
  },
  components: {
    ReportDetailModal,
    ReportStatusBudge
  },
  data() {
    return {}
  }
})
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:md:grid-cols-6"
    >
      <div
        v-for="ur in userReport"
        :key="ur"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto"
      >
        <a
          @click="changeModal(ur)"
          href="#"
          type="button"
          data-modal-target="editUserModal"
          data-modal-show="editUserModal"
        >
          <img
            v-if="ur.image_url"
            class="rounded-t-lg"
            src="https://storage.cloud.google.com/myna-safety/thumbnail/xyz.jpeg"
            alt="product image"
          />
          <img
            v-if="ur.content.indexOf('ひび割れ') != -1"
            class="rounded-t-lg"
            src="@/assets/image/hibiware.jpg"
            alt="product image"
          />
          <img
            v-if="ur.content.indexOf('夜道') != -1"
            class="rounded-t-lg"
            src="@/assets/image/yomichi.jpg"
            alt="product image"
          />
          <img
            v-if="ur.content.indexOf('土砂崩れ') != -1"
            class="rounded-t-lg"
            src="@/assets/image/dosyakuzure.jpg"
            alt="product image"
          />
          <img
            v-if="
              !ur.image_url &&
              ur.content.indexOf('ひび割れ') == -1 &&
              ur.content.indexOf('夜道') == -1 &&
              ur.content.indexOf('土砂崩れ') == -1
            "
            class="p-8 rounded-t-lg bg-light-orange"
            src="@/assets/image/people_in_trable.png"
            alt="product image"
          />
          <div class="px-5 pt-3 pb-5">
            <ReportStatusBudge :report_status="ur.report_status" />
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">
              {{ ur.title }}
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >位置情報</span
              >
              <span class="text-sm text-gray-900"
                >{{ ur.location.longitude }}
                ←住所に変換する
              </span>
            </div>

            <!--他人が押した絵文字-->
            <span
              id="badge-dismiss-dark"
              class="inline-flex items-center p-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded"
            >
              <button
                type="button"
                class="p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </span>
            <!----他人が押した絵文字---->

            <!----他人が押した絵文字---->
            <span
              id="badge-dismiss-dark"
              class="inline-flex items-center p-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded"
            >
              <button
                type="button"
                class="p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                >3</span
              >
            </span>
            <!--他人が押した絵文字-->
            <!--コメント（トラスト情報）-->
            <div class="p-1 mt-1 font-semibold">
              返信{{ ur.user_report_feedback_comments.length }}件 <span>2023/06/05 23:07:33</span>
            </div>
            <!--コメント（トラスト情報）-->
          </div>
        </a>
      </div>
    </div>
    <ReportDetailModal />
  </div>
</template>

<style>
.bg-light-orange {
  background: #fdd23c78;
}
</style>
