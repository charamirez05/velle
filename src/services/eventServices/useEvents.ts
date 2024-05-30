import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createEvent,
  getAllEvents,
  getEventsByUser,
  userJoinEvent,
} from "./events";
import { IEvent } from "../../models/event";
import { toast } from "react-toastify";
import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";

const useEvents = () => {
  return useQuery<IEvent[], Error>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
};

export function useJoinEvent() {
  const { updateEvents } = useEventStore();
  const { user } = useUserStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userJoinEvent,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Event joined successfully!");
      console.log("hey", user);
      const events = await getEventsByUser(user.id);
      updateEvents(events);
    },
  });
}

export function useCreateEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEvent,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Event created successfully!");
    },
  });
}

export default useEvents;
