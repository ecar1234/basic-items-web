import { NetDriver } from "./core/net_lib/netDriver";
import { ItemRepository } from "./data/repositories/ItemRepository";
import { IItemRepository } from "./domain/repositories/IItemRepository";



const API : string = "";

export const itemRepo: IItemRepository = new ItemRepository(new NetDriver(API));