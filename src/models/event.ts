import { z } from "zod";

//IEvent = Interface Event
export interface IEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const EventSchema = z.object({
  name: z.string().trim().min(1, "Event Name is required"),
  date: z.string().date().trim().min(1, "Event Date is required"),
  time: z.string().trim().min(1, "Event Time is required"),
  location: z.string().trim().min(1, "Location is required"),
  description: z.string().trim().min(1, "Description is required"),
});
