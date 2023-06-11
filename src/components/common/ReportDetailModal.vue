<script lang="ts">
import Emoji from '@/components/common/EmojiBox.vue'
import { defineComponent, computed, onBeforeMount, ref } from 'vue'
import { useStore } from '@/store'
import ReportStatusBudge from '@/components/common/ReportStatusBudge.vue'
import UserComment from '@/components/common/UserComment.vue'
import ReportTag from '@/components/common/ReportTag.vue'
import moment from 'moment'
import type { EntryUserReportFeedBackCommentRequest } from '@/types/typescript-axios'

export default defineComponent({
  setup() {
    const store = useStore()

    onBeforeMount(async () => {
      await store.dispatch('userReports/getAllList')
    })

    const isMapOutlineOpen = computed(() => store.getters['userReports/getModalStatus'])
    const getModalContent = computed(() => store.getters['userReports/getModalContent'])
    const changeModal = () => store.commit('userReports/changeModalStatus')

    const getImageUrl = (name: string) => {
      return new URL(name, import.meta.url).href
    }

    let comment = ref('')
    const postFeedbackComment = () => {
      const reportId = getModalContent.value.user_report_id
      const request = {
        user_id: 'hogehoge',
        comment: comment.value
      } as EntryUserReportFeedBackCommentRequest
      store.dispatch('userReports/postFeedbackComment', { reportId, request })
    }
    const postGoRescoreComment = () => {
      const reportId = getModalContent.value.user_report_id
      const request = {
        user_id: 'hogehoge',
        comment: 'テストユーザさんが救援に向かいます！'
      } as EntryUserReportFeedBackCommentRequest
      store.dispatch('userReports/postFeedbackComment', { reportId, request })
    }
    return {
      comment,
      changeModal,
      isMapOutlineOpen,
      getModalContent,
      getImageUrl,
      postFeedbackComment,
      postGoRescoreComment,
      moment
    }
  },
  components: {
    Emoji,
    ReportStatusBudge,
    UserComment,
    ReportTag
  },
  methods: {
    changeEmojiOpen() {
      this.isEmojiOpen = !this.isEmojiOpen
    }
  },
  data() {
    return {
      isEmojiOpen: false
    }
  }
})
</script>

<template>
  <!-- 詳細表示 modal -->
  <div
    v-if="isMapOutlineOpen"
    id="editUserModal"
    style="background: #5d5c5cd6"
    class="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full m-auto">
      <!-- Modal content -->
      <form action="#" class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">{{ getModalContent.title }}</h3>
          <ReportStatusBudge :report_status="getModalContent.report_status" />
          <button
            @click="changeModal"
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
        <!-- Modal body -->
        <!--マイナスコアによって優先表示-->
        <div class="p-6 space-y-6">
          <div class="flex items-center mt-2.5 mb-5">
            <ReportTag :user-report="getModalContent"></ReportTag>
          </div>
          <label
            for="password"
            class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
            >発生時間</label
          >
          {{ moment(getModalContent.created_at).format('YYYY年MM月DD日 hh時mm分') }}<br />
          <span v-if="getModalContent.updated_at">
            (最終更新時間：{{
              moment(getModalContent.updated_at).format('YYYY年MM月DD日 hh時mm分')
            }})
          </span>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >発生場所</label
            >
            {{ getModalContent.address }}
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >投稿内容</label
            >
            {{ getModalContent.content }}
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >添付画像</label
            >
            <img
              v-if="getModalContent.image_url"
              :src="getImageUrl(getModalContent.image_url)"
              class="rounded-t-lg"
              alt="product image"
              loading="lazy"
            />
            <img
              v-else
              src="@/assets/image/people_in_trable.png"
              class="rounded-t-lg"
              alt="product image"
              loading="lazy"
            />
          </div>
          <div class="items-center">
            <button
              @click="changeModal"
              type="submit"
              class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              閉じる
            </button>
            <button
              @click="postGoRescoreComment()"
              type="submit"
              class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              救助に向かう
            </button>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <form>
            <!-- ここから-->

            <!--自分が押した絵文字-->
            <span
              id="badge-dismiss-default"
              class="inline-flex relative items-center p-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded"
            >
              <Emoji v-if="isEmojiOpen" />
              <button
                @click="changeEmojiOpen"
                type="button"
                class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
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
              <button
                type="button"
                class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                data-dismiss-target="#badge-dismiss-default"
                aria-label="Remove"
              >
                <svg
                  aria-hidden="true"
                  class="w-3.5 h-3.5"
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
                <span class="sr-only">Remove badge</span>
              </button>
            </span>
            <!--自分が押した絵文字-->

            <!--他人が押した絵文字-->
            <span
              id="badge-dismiss-dark"
              class="inline-flex items-center p-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded"
            >
              <button
                type="button"
                class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
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
                class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
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
            <div class="p-1 mt-3">
              <div v-for="feedbackComment in getModalContent.user_report_feedback_comments">
                <UserComment :user-report-feedback-comment="feedbackComment"></UserComment>
              </div>
            </div>
            <!--コメント（トラスト情報）-->

            <!--ここまで-->
            <div class="flex items-center py-2 rounded-lg bg-gray-50">
              <textarea
                id="chat"
                v-model="comment"
                rows="5"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                @click="postFeedbackComment()"
                class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
                <span class="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
  </div>
</template>
