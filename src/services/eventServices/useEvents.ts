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
import { useNavigate } from "react-router-dom";

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
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Event joined successfully!");
      const events = await getEventsByUser(user.id);
      updateEvents(events);
    },
  });
}

export function useCreateEvent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEvent,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Event created successfully!");
      navigate("/home");
    },
  });
}

export default useEvents;
