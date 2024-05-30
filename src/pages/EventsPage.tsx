import { Box, Typography } from "@mui/material";

import { secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import useEvents from "../services/eventServices/useEvents";
import { useEventStore } from "../store/eventStore";
import { IEvent } from "../models/event";

function EventsPage() {
  const { data } = useEvents();
  const { events } = useEventStore();

  const filteredEvents = ((data, events) => {
    const filteredEvents: IEvent[] = [];

    // Loop through each event in the 'data' array
    data &&
      data!.forEach((dataEvent) => {
        // Check if the 'dataEvent' is present in the 'events' array
        const isDuplicate = events.some((event) => {
          // Assuming events have unique identifiers like 'id'
          return event.id === dataEvent.id; // Adjust the comparison based on your object structure
        });

        // If 'dataEvent' is not found in 'events', add it to the 'filteredEvents' array
        if (!isDuplicate) {
          filteredEvents.push(dataEvent);
        }
      });

    return filteredEvents;
  })(data, events);

  console.log(data);

  return (
    <Box>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h5"
          sx={{ color: secondary, fontWeight: "bold", paddingBottom: "20px" }}
        >
          All Volunteer Events
        </Typography>
        <Box
          sx={{
            backgroundColor: "white", // bg-white
            padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)

            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
            borderRadius: "10px", // rounded-md (8px border radius)
          }}
        >
          <EventsListing events={filteredEvents} isDashboad={false} />
        </Box>
      </Box>
    </Box>
  );
}

export default EventsPage;
