import { useMutation, useQuery } from "@tanstack/react-query";

import { createUser, getUserById, userSignIn } from "./users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";
import { useUserStore } from "../../store/userStore";

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
}
export function useSignIn() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userSignIn,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: async (data: any) => {
      // queryClient.invalidateQueries(["events"]);
      toast.success("Sign-in successfully!");
      console.log(data);

      //useGetUser(data.user.id);
      // navigate("/");
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
    onSuccess: (data: any) => {
      // queryClient.invalidateQueries(["events"]);
      toast.success("Registered successfully!");
      navigate("/");
    },
  });
}
