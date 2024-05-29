import { supabase } from "../../database/supabaseClient";
import { IEvent } from "../../models/event";

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

export async function createEvent(newEvent: IEvent) {
  const { data, error } = await supabase.from("events").insert(newEvent);

  if (error) {
    console.log(error);
    return error;
  }

  return data;
}

export async function getEventsByUser(userid: string) {
  const { data: userEvents, error: userEventsError } = await supabase
    .from("user_events")
    .select("event_id")
    .eq("user_id", userid);

  if (userEventsError) {
    console.error("Error fetching user events:", userEventsError);
    return null;
  }

  // Extract event IDs
  const eventIds = userEvents.map((ue) => ue.event_id);

  // Fetch event details from the events table
  const { data: events, error: eventsError } = await supabase
    .from("events")
    .select("*")
    .in("id", eventIds);

  if (eventsError) {
    console.error("Error fetching events:", eventsError);
    return null;
  }

  console.log(events);

  return events;
}
