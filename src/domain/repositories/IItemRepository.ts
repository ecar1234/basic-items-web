import { Item } from "../models/itemModel";

export interface IItemRepository {
  getItemList():Promise<Item[]>;
}