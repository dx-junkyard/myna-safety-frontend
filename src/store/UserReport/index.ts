import { type RootState, type UserReportState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import type { Module } from 'vuex/types/index.js'

const state: UserReportState = {
  userReports: []
}

export const userReports: Module<UserReportState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
