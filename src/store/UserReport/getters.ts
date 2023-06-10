import type { GetterTree } from 'vuex/types/index.js'
import type { RootState, UserReportState } from '../types'

const getters: GetterTree<UserReportState, RootState> = {
  getAllList: (state: UserReportState) => {
    return state.userReports
  },
  getModalStatus: (state: UserReportState) => {
    return state.isModalOpen
  },
  getMapOutlineStatus: (state: UserReportState) => {
    return state.isMapOutlineOpen
  },
  getModalContents: (state: UserReportState) => {
    return state.modalContents
  },
}

export default getters
