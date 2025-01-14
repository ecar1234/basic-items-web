import { create } from "zustand";

interface PurchaseStore {
  itemId: string;
  price: number;
  color: string | null;
  size: string | null;
  qty: number;
  totalPrice: number;
  setItem: (itemIdInfo: string, price: number) => void;
  incrementQty: () => void;
  decrementQty: () => void;
  setColor: (colorInfo: string) => void;
  setSize: (sizeInfo: string) => void;
  resetInfo: () => void;
}
interface PurchaseListStore {
  list: PurchaseStore[];
  addPurchase: (itemPurchase) => void;
  removePurchase: (itemPurchase) => void;
}

const useItemPurchaseStore = create<PurchaseStore>((set) => ({
  itemId: "",
  price: 0,
  color: null,
  size: null,
  qty: 1,
  totalPrice: 0,
  setItem(itemIdInfo, priceInfo) {
    set({
      itemId: itemIdInfo,
      price: priceInfo,
    });
  },
  incrementQty: () => set((state) => ({ qty: state.qty + 1, totalPrice: state.price * state.qty })),
  decrementQty: () => set((state) => ({ qty: state.qty - 1, totalPrice: state.price * state.qty })),
  setColor: (colorInfo: string) => set({ color: colorInfo }),
  setSize: (sizeInfo: string) => set({ size: sizeInfo }),
  resetInfo: () =>
    set({
      itemId: null,
      price: 0,
      color: null,
      size: null,
      qty: 1,
      totalPrice: 0,
    }),
}));

const useItemPurchaseListStore = create<PurchaseListStore>((set) => ({
  list: [],
  addPurchase: (itemPurchase) => set((state) => ({ list: [...state.list, itemPurchase] })),
  removePurchase: (itemPurchase: PurchaseStore) =>
    set((state) => ({
      list: state.list.filter(
        (item) =>
          item.itemId !== itemPurchase.itemId &&
          item.color !== itemPurchase.color &&
          item.size !== itemPurchase.size &&
          item.qty !== itemPurchase.qty
      ),
    })),
}));
