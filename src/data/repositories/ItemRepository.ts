import { NetDriver } from "@/core/net_lib/netDriver";
import { Item } from "@/domain/models/itemModel";
import { IItemRepository } from "@/domain/repositories/IItemRepository";

export class ItemRepository implements IItemRepository {

  private netDriver: NetDriver;
  constructor(driver: NetDriver){
    this.netDriver = driver
  }

  public async getItemList(): Promise<Item[]> {
      return [];
  }
}