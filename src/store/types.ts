import type { UserReportModel } from '@/types/typescript-axios/api'

export interface RootState {
  version: string
}

export interface UserReportState {
  userReports: UserReportModel[]
}
