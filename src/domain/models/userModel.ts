import { item } from "./itemModel"


export interface User{
  uid: string
  level: number // 1: normal, 0: master
  method: number // 1: email, 3: naver, 4: kakao
  userId: string
  name: string
  address1: string
  address2: string
  phone: string
}
export interface Userinfo{
  uid: string
  purchase: Purchase[]

}

export interface Purchase {
  uid: string
  itemInfo: item
  payment: number
  state: number // 1: 구매완료, 2: 반품, 5:구매취소, 8:배송중, 9:배송완료
  reason?: string
}