import { create } from "zustand";
import { IEvent } from "../../models/event";

interface EventState {
  events: IEvent[];
  updateEvents: (newEvents: IEvent[]) => void;
  resetEvents: () => void;
}
export const useEventStore = create<EventState>((set) => ({
  events: [],
  updateEvents: (newEvents: IEvent[]) =>
    set((state) => ({ events: newEvents })),
  resetEvents: () => set({ events: [] }),
}));
