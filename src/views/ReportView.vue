<script lang="ts">
import liff from '@line/liff'
export default {
  data() {
    return {
      userName: undefined as string | undefined,
      isInClient: undefined as boolean | undefined,
      isLoggedIn: false
    }
  },
  created() {
    liff
      .init({
        liffId: import.meta.env.VITE_APP_LIFF_ID || ''
      })
      .then(() => {
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
            this.userName = profile.displayName
          })
        }
      })
  }
}
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg h-screen w-full bg-slate-50 text-black"
    >
      <div class="px-5 pt-3 pb-5">
        <h1 class="text-2xl font-semibold">被害状況報告フォーム</h1>
        <p>{{ isLoggedIn ? userName : 'ゲスト' }}さん、こんにちは</p>

        <form>
          <!-- <div class="relative z-0 w-full mb-6 group"> 
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900"
              >災害状況を教えて</label
            >
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div> -->
          <div class="relative z-0 w-full mb-6 group">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label class="block mb-2 text-sm font-medium text-gray-900" for="user_avatar"
              >Upload file</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">
              A profile picture is useful to confirm your are logged into your account
            </div>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
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
