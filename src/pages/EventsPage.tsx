import { Box, Typography } from "@mui/material";
import { secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import useEvents from "../services/eventServices/useEvents";
import { IEvent } from "../models/event";
import { useParams } from "react-router-dom";
import { EventLoading } from "../components/EventLoading";
import { useEventStore } from "../services/store/eventStore";

function EventsPage() {
  const { type } = useParams();
  const { data, isLoading } = useEvents();
  const { events } = useEventStore();

  const currentMonth = new Date().toISOString().slice(5, 7);
  console.log(data);
  console.log(events);
  const filteredEvents = ((data, events) => {
    const filteredEvents: IEvent[] = [];
    const filteredJoinedEvents: IEvent[] = [];

    data &&
      data!.forEach((dataEvent: IEvent) => {
        const isDuplicate = events!.some((event) => event.id === dataEvent.id);

        if (type === "all") {
          if (!isDuplicate) {
            filteredEvents.push(dataEvent);
          }
        } else {
          if (isDuplicate) {
            filteredEvents.push(dataEvent);
          }
        }
      });

    filteredEvents.forEach((e: IEvent) => {
      if (type === "upcoming") {
        if (new Date(e.date).toISOString().slice(5, 7) === currentMonth) {
          filteredJoinedEvents.push(e);
        }
      } else if (type === "forthcoming") {
        if (new Date(e.date).toISOString().slice(5, 7) !== currentMonth) {
          filteredJoinedEvents.push(e);
        }
      }
    });

    if (type === "upcoming") {
      return filteredJoinedEvents;
    } else if (type === "forthcoming") {
      return filteredJoinedEvents;
    } else {
      return filteredEvents;
    }
  })(data, events);

  if (isLoading) return <EventLoading loading={isLoading} />;

  return (
    <Box>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h5"
          sx={{ color: secondary, fontWeight: "bold", paddingBottom: "20px" }}
        >
          {type === "all"
            ? "All Volunteer Events"
            : type === "upcoming"
              ? "All Upcoming Events this Month"
              : "All Forthcoming Events in the next Months"}
        </Typography>
        <Box
          sx={{
            backgroundColor: "white", // bg-white
            padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)

            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
            borderRadius: "10px", // rounded-md (8px border radius)
          }}
        >
          <EventsListing
            events={filteredEvents!}
            isDashboad={type === "all" ? true : false}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default EventsPage;
