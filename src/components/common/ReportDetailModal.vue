<script lang="ts">
import Emoji from '@/components/common/EmojiBox.vue'
import { defineComponent, computed, onBeforeMount } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userReport = computed(() => store.getters['userReports/getAllList'])
    const isMapOutlineOpen = computed(() => store.getters['userReports/getModalStatus'])
    const changeModal = () => store.commit('userReports/changeModalStatus')
    onBeforeMount(async () => {
      await store.dispatch('userReports/getAllList')
    })
    return { userReport, changeModal, isMapOutlineOpen }
  },
  components: {
    Emoji
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
          <h3 class="text-xl font-semibold text-gray-900">道路にひび割れがあって怖いです</h3>
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
        <div class="p-6 space-y-6">
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >投稿内容</label
            >
            鈴木　彩香
          </div>
          <label
            for="password"
            class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
            >発生時間</label
          >
          2023/06/02 12:19<br />
          (最終更新時間：2023/06/03 23:19)
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >投稿者</label
            >
            鈴木　彩香
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >発生場所</label
            >
            東京都台東区上野７丁目
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >投稿内容</label
            >
            私の住んでいる地域の〇〇通りにおいて、道路にひび割れが発生していることを報告いたします。このひび割れは大変危険であり、通行する際に不安を感じることがあります。<br />
            ひび割れは、道路の幅員をまたいでいくつかの箇所で見受けられます。特に〇〇地点や〇〇地点など、具体的な位置を報告いたします。また、ひび割れの幅も広がっており、深さも増しているように感じます。これにより、自転車やバイク、歩行者が転倒したり、車両のタイヤが損傷したりする危険性が高まっています。<br />
            地域の住民たちもこのひび割れについて心配しており、事故や怪我のリスクを最小限にするためにも、早急な修繕をお願いしたいと思います。
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="text-base font-semibold block mb-2 text-sm font-medium text-gray-900"
              >添付画像</label
            >
            <img src="@/assets/image/hibiware.jpg" alt="product image" />
          </div>


          <button
            @click="changeModal"
            type="submit"
            class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            閉じる
          </button>
          <button
            @click="changeModal"
            type="submit"
            class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            救助に向かう
          </button>

        </div>
        <!-- Modal footer -->
        <div class="items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <form>

            <!-- ここから-->

            <!--自分が押した絵文字-->
            <span id="badge-dismiss-default" class="inline-flex relative items-center p-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                <Emoji v-if="isEmojiOpen" />
                <button
                    @click="changeEmojiOpen"
                    type="button"
                    class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                    <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Remove badge</span>
                    </button>
                </span>
                <!--自分が押した絵文字-->

                <!--他人が押した絵文字-->
                <span id="badge-dismiss-dark" class="inline-flex items-center p-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                    <button
                    type="button"
                    class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                <span id="badge-dismiss-dark" class="inline-flex items-center p-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                    <button
                    type="button"
                    class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
                </span>
            <!--他人が押した絵文字-->

            <!--コメント（トラスト情報）-->
            <div class="p-1 mt-3 flex">
                <div class="p-2 hidden md:block">
                    <button type="button" class="md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo">
                    </button>
                </div>
                <div>
                    <div class="font-semibold">カボスの鈴木 <span>2023/06/05 23:07:33</span></div>
                    <div>私もこれ見たことあります！怖いですよね。早く対応してほしく思います。</div>
                </div>
            </div>
            <!--コメント（トラスト情報）-->


            <!--ここまで-->

            <div class="flex items-center py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                id="chat"
                rows="5"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
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
