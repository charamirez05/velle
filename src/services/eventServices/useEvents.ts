import { useMutation, useQuery } from "@tanstack/react-query";

import { createEvent, getAllEvents, userJoinEvent } from "./events";
import { IEvent } from "../../models/event";
import { toast } from "react-toastify";

const useEvents = () => {
  return useQuery<IEvent[], Error>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
};

export function useAllEvents() {
  return useQuery<IEvent[], Error>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
}

export function useJoinEvent() {
  return useMutation({
    mutationFn: userJoinEvent,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      // queryClient.invalidateQueries(["events"]);
      console.log(data);
      toast.success("Event joined successfully!");
    },
  });
}

export function useCreateEvent() {
  return useMutation({
    mutationFn: createEvent,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      // queryClient.invalidateQueries(["events"]);
      console.log(data);
      toast.success("Event created successfully!");
    },
  });
}

export default useEvents;
