import type { GetterTree } from 'vuex/types/index.js'
import type { RootState, UserReportState } from '../types'

const getters: GetterTree<UserReportState, RootState> = {
  getAllList: (state: UserReportState) => {
    return state.userReports
  }
}

export default getters