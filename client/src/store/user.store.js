import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  role:{},
  setUser: (newUser) =>
    set(() => {
     
      return { user: newUser };
    }),
    setRole:(newRole)=>
      set(()=>{
        return{role:newRole};
      }),
    clearUser: () => set({ user: null, role:null }),
});

const useUserStore = create(
  devtools(persist(userStore, { name: "user" }))
);
export default useUserStore;
