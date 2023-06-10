<script lang="ts">
import liff from '@line/liff'

export default {
  data() {
    return {
      lineUserId: undefined as string | undefined,
      isInClient: undefined as boolean | undefined,
      isLoggedIn: false,
      content: ''
    }
  },
  async created() {
    // 本番環境以外は何もしない
    if (import.meta.env.DEV) {
      return
    }

    this.isLoggedIn = liff.isLoggedIn()
    if (!liff.isInClient() && !liff.isLoggedIn()) {
      liff.login()
    } else {
      this.isInClient = liff.isInClient()
      liff.getProfile().then((profile) => {
        this.lineUserId = profile.userId
      })
    }
  },
  methods: {
    linkage: async function () {
      console.log(this.lineUserId)
      liff.closeWindow()
    }
  }
}
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg h-screen w-full bg-slate-50 text-black"
    >
      <div class="px-5 pt-3 pb-5">
        <h1 class="text-2xl font-semibold py-10">マイナンバー情報連携フォーム</h1>

        <form>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
              >マイナンバーカードの利用者証明用電子証明書のパスワードを入力してください</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              placeholder="数字4桁"
            />
          </div>
          <button
            type="button"
            @click="linkage()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            マイナンバーで情報を連携する
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.bg-light-orange {
  background: #fdd23c78;
}
</style>
