import { create } from "zustand";
import { IUser } from "../models/user";
import { IEvent } from "../models/event";

interface EventState {
  events: IEvent[];
  updateEvents: (newEvents: IEvent[]) => void;
}
export const useEventStore = create<EventState>((set) => ({
  events: [],
  updateEvents: (newEvents: IEvent[]) =>
    set((state) => ({ events: newEvents })),
}));
