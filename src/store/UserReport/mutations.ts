import type { MutationTree } from 'vuex'
import type { UserReportState } from '../types'
import type { UserReportModel } from '@/types/typescript-axios'

const mutations: MutationTree<UserReportState> = {
  getAllList: (
    state: UserReportState,
    userReports: UserReportModel[]
  ) => {
    state.userReports = userReports
  },
  changeModalStatus: (
    state: UserReportState,
    ) => {
    state.isModalOpen = !state.isModalOpen
  }
}

export default mutations
