<script lang="ts">
import liff from '@line/liff'
import {
  ReportApi,
  ReportStatus,
  type ListUserReportResponse,
  type UserReportModel,
  ReportLevel
} from '@/types/typescript-axios'

export default {
  data() {
    return {
      userRerportId: undefined as string | undefined,
      userName: undefined as string | undefined,
      isInClient: undefined as boolean | undefined,
      isLoggedIn: false,
      content: '',
      report: undefined as UserReportModel | undefined
    }
  },
  async created() {
    await liff
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

    const response = await new ReportApi().getUserReportsReportGet()
    const data: ListUserReportResponse = response.data

    this.userRerportId = (this.$route.query['report_id'] as string) || undefined

    this.report = data.user_reports?.filter(
      (report) => report.user_report_id === this.userRerportId
    )[0]

    this.content = this.report?.content || ''
  },
  methods: {
    putReport: async function () {
      if (this.userRerportId) {
        await new ReportApi().putUserReportReportUserReportIdPut(
          this.userRerportId,
          {
            location: {
              latitude: this.report?.location.latitude || 0,
              longitude: this.report?.location.latitude || 0
            },
            content: this.report ? this.report.content : this.content,
            report_level: this.report?.report_level || ReportLevel.Low,
            report_status: this.report?.report_status || ReportStatus.NoAssign
          },
          undefined
        )
        await liff.sendMessages([
          {
            type: 'text',
            text: '被害状況を更新しました。'
          }
        ])
        liff.closeWindow()
      }
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
        <h1 class="text-2xl font-semibold py-10">被害状況報告フォーム</h1>
        <!-- <p>{{ isLoggedIn ? userName : 'ゲスト' }}さん、こんにちは</p> -->

        <form>
          <div class="relative z-0 w-full mb-6 group">
            <label for="disaster" class="block mb-2 text-sm font-medium text-gray-900"
              >被害事由</label
            >
            <select
              id="disasters"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" selected hidden>選択してください</option>
              <option>台風</option>
              <option>地震</option>
              <option>洪水</option>
              <option>火災</option>
              <option>火山噴火</option>
              <option>大雪</option>
              <option>落雷</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
              >被害箇所・被害状況</label
            >
            <textarea
              v-model="content"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="屋根の損壊により雨漏り・強風により外壁に傷・雪による屋根の損壊・落雷によりアンテナ・テレビが故障"
            ></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900" for="user_avatar"
              >被害状況がわかる画像を選択してください</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
              id="damage_image"
              type="file"
            />
          </div>

          <button
            type="button"
            @click="putReport()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            被害状況を報告
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
