import { create } from "zustand";

const useUserStore = create((set) => ({
user: null,
setUser:(user)=> set({user}),
removerUser:()=> set({user:{}}),
})

);
export default useUserStore
