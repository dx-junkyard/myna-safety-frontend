import type { UserReportModel } from '@/types/typescript-axios/api'

export interface RootState {
  version: string
}

export interface ModalContents extends UserReportModel {
}

export interface UserReportState {
  userReports: UserReportModel[]
  isModalOpen: Boolean
  isMapOutlineOpen: Boolean
  modalContents: ModalContents
}
