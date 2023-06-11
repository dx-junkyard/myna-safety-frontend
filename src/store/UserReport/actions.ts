import { type RootState, type UserReportState } from '@/store/types'
import {
  ReportApi,
  type ListUserReportResponse,
  type EntryUserReportFeedBackCommentRequest
} from '@/types/typescript-axios'
import type { ActionTree } from 'vuex/types/index.js'

const actions: ActionTree<UserReportState, RootState> = {
  /**
   * 一覧取得
   */
  getAllList: async ({ commit }) => {
    try {
      const response = await new ReportApi().getUserReportsReportGet()
      const data: ListUserReportResponse = response.data
      commit('getAllList', data.user_reports)
    } catch (error) {
      console.log(error)
    }
  },
  /**
   * FBコメントを追加
   */
  postFeedbackComment: async ({ commit, dispatch }, action) => {
    try {
      console.log(action.reportId)
      const response =
        await new ReportApi().postUserReportFeedbackCommentReportReportIdFeedbackCommentPost(
          action.reportId,
          action.request
        )
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      await dispatch('getAllList')
    }
  }
}

export default actions
