import { useMutation, useQuery } from "@tanstack/react-query";

import {
  createUser,
  createUserProfile,
  getUserById,
  userSignIn,
} from "./users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";
import { useUserStore } from "../../store/userStore";
import { IUser } from "../../models/user";

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
}
export function useSignIn() {
  const navigate = useNavigate();
  const { user, addUser } = useUserStore();

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
        console.log(userData[0]);
        addUser(userData[0]);
        toast.success("Sign-in successfully!");

        // Navigate to a different page if necessary
        navigate("/");
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
