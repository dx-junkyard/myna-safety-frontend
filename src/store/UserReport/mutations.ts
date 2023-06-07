import type { MutationTree } from 'vuex'
import type { UserReport, UserReportState } from '../types'

const mutations: MutationTree<UserReportState> = {
  getAllList: (
    state: { userReports: { userReports: UserReport[] } },
    userReports: UserReport[]
  ) => {
    state.userReports.userReports = userReports
  }
}

export default mutations
