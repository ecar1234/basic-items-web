import { Item } from "@/domain/models/itemModel";
import { IMainUseCases } from "./interface/IMainUseCases";

class MainUseCase implements IMainUseCases {
  public async getItemsData(): Promise<Item[]> {
    let result: Item[];
    try {
      // let item = await 
      return result;
    } catch (e) {
      console.log(e);
    }
    
  }
}

export const MainUseCases = (): IMainUseCases => new MainUseCase()