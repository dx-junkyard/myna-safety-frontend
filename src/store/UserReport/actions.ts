import { type RootState, type UserReportState } from '@/store/types'
import { ReportApi, type ListUserReportResponse } from '@/types/typescript-axios'
import type { ActionTree } from 'vuex/types/index.js'

const actions: ActionTree<UserReportState, RootState> = {
  getAllList: async ({ commit }) => {
    try {
      const response = await new ReportApi().getUserReportsReportGet()
      const data: ListUserReportResponse = response.data
      commit('getAllList', data.user_reports)
    } catch (error) {
      console.log(error)
    }
  }
}

export default actions
