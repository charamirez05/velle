import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createUser,
  getUserById,
  updateUserDetails,
  userSignIn,
} from "./users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getEventsByUser } from "../eventServices/events";
import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
}

export function useSignIn() {
  const navigate = useNavigate();

  const { addUser } = useUserStore();
  const { updateEvents } = useEventStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userSignIn,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });

      try {
        const userData = await getUserById(data.id);
        const eventsDate = await getEventsByUser(data.id);

        addUser(userData[0]);
        updateEvents(eventsDate!);

        toast.success("Sign-in successfully!");

        // Navigate to a different page if necessary
        navigate("/home");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    },
  });
}

export function useRegister() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      toast.success("Registered successfully!");
      navigate("/");
    },
  });
}

export function useUpdateUser() {
  const navigate = useNavigate();
  const { addUser } = useUserStore();

  return useMutation({
    mutationFn: updateUserDetails,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      try {
        const userData = await getUserById(data);

        //Change the user in the userStore with the updated data
        addUser(userData[0]);
        toast.success("User information updated successfully!");
        navigate("/home");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    },
  });
}
