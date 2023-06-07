export interface RootState {
  version: string
}

export interface UserReportState {
  userReports: UserReport[]
}

export interface UserReport {
  userReportId: string
  done: boolean
  text: string
}
