import { toast } from "react-toastify";
import { supabase } from "../../database/supabaseClient";
import { IUser } from "../../models/user";

export async function userSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  }

  return data.user;
}

async function registerUser(email: string, password: string) {
  console.log(email, password);
  const { data, error } = await supabase.auth.admin.createUser({
    email: email,
    password: password,
  });

  //naa limit per hour
  /* const { error: magicLinkError } =
    await supabase.auth.admin.inviteUserByEmail(email);

  if (magicLinkError) {
    throw magicLinkError;
  } */

  if (error) {
    throw error;
  }

  return data.user;
}

async function inviteUser(email: string) {
  const { error } = await supabase.auth.admin.inviteUserByEmail(email);
  if (error) return error;
  return null;
}

async function createUserProfile(id: string, newUser: IUser) {
  newUser.id = id;
  const { data, error } = await supabase.from("users").insert(newUser);

  if (error) {
    throw error;
  }

  return data;
}

export async function createUser(newUser: IUser) {
  try {
    const user = await registerUser(newUser.email, newUser.password);

    if (user) {
      createUserProfile(user.id, newUser);
    }

    return;
  } catch (error) {
    console.error("SA USERS NI Error creating user:", error);
    throw error; // Throw the error to be caught by useMutation
  }
}

export async function getUserById(id: string) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) return error;

  console.log(data);
  if (data) {
    return data[0];
  }
}
