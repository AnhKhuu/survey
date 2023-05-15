export type UserInfo = {
  userName: string,
  password: string,
  rollNo: string,
  userClass: string,
  specification: string,
  section: string,
  admissionDate: string
}

export type FullUserInfo = UserInfo & {
  isActive: boolean
}