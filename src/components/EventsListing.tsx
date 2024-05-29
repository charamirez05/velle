import { Grid } from "@mui/material";

import EventCard from "./EventCard";

import { IEvent } from "../models/event";

/* type EventsListingProps = {
  events: IEvent[];
};
 */
//{ events }: EventsListingProps
function EventsListing({
  events,
  isDashboad,
}: {
  events: IEvent[];
  isDashboad: boolean;
}) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {events &&
        events.map((event) => (
          <Grid item xs={6} sm={6} md={6} key={event.id}>
            <EventCard event={event} isDashboad={isDashboad} />
          </Grid>
        ))}
    </Grid>
  );
}

export default EventsListing;
