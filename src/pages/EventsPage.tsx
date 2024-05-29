import { Box, Typography } from "@mui/material";
import React from "react";
import { secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import useEvents from "../services/eventServices/useEvents";

function EventsPage() {
  const { data, isLoading } = useEvents();
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
          <EventsListing events={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default EventsPage;
