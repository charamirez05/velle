import { create } from "zustand";
import { IUser, userLoginSchema } from "../models/user";

interface UserState {
  user: IUser;
  addUser: (newUser: IUser) => void;
}
export const useUserStore = create<UserState>((set) => ({
  user: {} as IUser,
  addUser: (newUser: IUser) => set((state) => ({ user: newUser })),
}));
