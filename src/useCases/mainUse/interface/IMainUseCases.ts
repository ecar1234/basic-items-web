import { Item } from "@/domain/models/itemModel"

export interface IMainUseCases {
  getItemsData():Promise<Item[]>
}