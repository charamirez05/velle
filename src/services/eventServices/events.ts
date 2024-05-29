import { supabase } from "../../database/supabaseClient";

export async function getAllEvents() {
  const { data, error } = await supabase.from("events").select();

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function userJoinEvent({
  eventid,
  userid,
}: {
  eventid: string;
  userid: string;
}) {
  console.log(userid, eventid);
  const { data, error } = await supabase
    .from("user_events")
    .insert({ user_id: userid, event_id: eventid });

  if (error) {
    throw error;
  }

  return data;
}
