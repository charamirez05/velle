import { useQuery } from "@tanstack/react-query";

import { getAllEvents } from "./events";
import { IEvent } from "../models/event";

const useEvents = () => {
  return useQuery<IEvent[], Error>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
};

export default useEvents;
