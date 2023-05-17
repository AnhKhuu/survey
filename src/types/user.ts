export type UserInfo = {
  userName: string,
  password: string,
  rollNo: string,
  userClass: string,
  specification: string,
  section: string,
  admissionDate: string,
  fullName: string
}

export type FullUserInfo = UserInfo & {
  isActive: boolean
}

export type LoginInfo = {
  userName: string
  password: string
}

export type UserDetails = {
  userId: number,
  userName: string,
  rollNo: string,
  userClass: string,
  isActive: string,
  userRole: string,
}