import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const orderStore = (set) => ({
  orders: [],

  addOrders: (orders) =>
    set((previousState) => {
      return { orders: [orders, ...previousState.orders] };
    }),

  deleteItemCart: (id) => {
    set((state) => {
      const updateOrder = state.orders.filter((order) => order.id !== id);
      return { oreders: updateOrder };
    });
  },
});

const useOrderStore = create(devtools(persist(orderStore, { name: "Item" })));
export default useOrderStore;