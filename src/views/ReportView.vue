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
        liffId: import.meta.env.VUE_APP_LIFF_ID || ''
      })
      .then(() => {
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
        <p>hogehoge</p>
        <p v-if="isLoggedIn">{{ userName }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.bg-light-orange {
  background: #fdd23c78;
}
</style>
