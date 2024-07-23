import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},

  setUser: (newUser) =>
    set(() => {
     
      return { user: newUser };
    }),
    clearUser: () => set({ user: null }),
});

const useUserStore = create(
  devtools(persist(userStore, { name: "user" }))
);
export default useUserStore;
