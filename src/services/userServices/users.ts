import { toast } from "react-toastify";
import { supabase } from "../../database/supabaseClient";
import { IUser } from "../../models/user";

async function registerUser(email: string, password: string) {
  console.log(email, password);
  const { data, error } = await supabase.auth.admin.createUser({
    email: email,
    password: password,
  });

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

export async function createUserProfile(newUser: IUser) {
  const { data, error } = await supabase.from("users").insert(newUser);

  if (error) {
    console.log(error);
    return error;
  }

  return data;
}

export async function createUser(newUser: IUser) {
  try {
    const user = await registerUser(newUser.email, newUser.password);

    if (user) newUser.id = user.id;

    createUserProfile(newUser);

    //naa limit per hour
    /* const { error: magicLinkError } =
      await supabase.auth.admin.inviteUserByEmail(newUser.email);

    //Has a limit of sending magic link emails - 3 per hour
     if (magicLinkError) {
      throw magicLinkError;
    } else {  */

    return;
  } catch (error) {
    console.error("SA USERS NI Error creating user:", error);
    throw error;
  }
}

export async function getUserById(userid: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userid);

  if (error) throw error;

  return data;
}

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

export async function updateUserDetails({
  userid,
  name,
  address,
  contactnumber,
}: {
  userid: string;
  name: string;
  address: string;
  contactnumber: string;
}) {
  const { error } = await supabase
    .from("users")
    .update({ name: name, address: address, contactNumber: contactnumber })
    .eq("id", userid);

  if (error) {
    throw error;
  }

  return userid;
}
