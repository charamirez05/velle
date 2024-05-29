import { useMutation, useQuery } from "@tanstack/react-query";

import {
  createUser,
  createUserProfile,
  getUserById,
  updateUserDetails,
  userSignIn,
} from "./users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";
import { useUserStore } from "../../store/userStore";
import { IUser } from "../../models/user";
import { getEventsByUser } from "../eventServices/events";
import { useEventStore } from "../../store/eventStore";

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
}

export function useSignIn() {
  const navigate = useNavigate();
  const { user, addUser } = useUserStore();

  const { events, updateEvents } = useEventStore();

  return useMutation({
    mutationFn: userSignIn,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      // queryClient.invalidateQueries(["events"]);
      console.log(data);
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
    onSuccess: async (data: any) => {
      toast.success("Registered successfully!");
      navigate("/");
    },
  });
}

export function useUpdateUser() {
  const navigate = useNavigate();
  const { user, addUser } = useUserStore();

  return useMutation({
    mutationFn: updateUserDetails,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      try {
        console.log("hey", data);
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
