import type { MutationTree } from 'vuex'
import type { UserReportState } from '../types'
import type { UserReportModel } from '@/types/typescript-axios'

const mutations: MutationTree<UserReportState> = {
  getAllList: (state: UserReportState, userReports: UserReportModel[]) => {
    state.userReports = userReports
  },
  changeModalStatus: (state: UserReportState) => {
    state.isModalOpen = !state.isModalOpen
  },
  changeMapOutlineStatus: (state: UserReportState) => {
    state.isMapOutlineOpen = !state.isMapOutlineOpen
  },
  changeModalContent: (state: UserReportState, modalContent: UserReportModel) => {
    state.modalContent = modalContent
  }
}

export default mutations
