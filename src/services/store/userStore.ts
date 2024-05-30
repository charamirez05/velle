import { create } from "zustand";
import { IUser } from "../../models/user";

interface UserState {
  user: IUser;
  addUser: (newUser: IUser) => void;
  resetUser: () => void;
}
export const useUserStore = create<UserState>((set) => ({
  user: {} as IUser,
  addUser: (newUser: IUser) => set((state) => ({ user: newUser })),
  resetUser: () => set({ user: {} as IUser }),
}));
