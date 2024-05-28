import { supabase } from "../database/supabaseClient";

export async function getAllEvents() {
  const { data, error } = await supabase.from("events").select();

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}
