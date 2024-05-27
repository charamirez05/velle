import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { primary, secondary } from "../constants/colors";
import { supabase } from "../database/supabaseClient";

function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [events, setEvents] = useState<any[] | null>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("events").select();
    setEvents(data);
  }

  return (
    <Box>
      <Hero />
      <ul>
        {events!.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)
          margin: { xs: "10px", md: "10px" }, // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Typography>Events in Current Month</Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {events?.map((event) => (
            <Grid item xs={4}>
              <EventCard event={event!} />
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
            }}
          >
            View All Events
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)
          margin: { xs: "10px", md: "10px" }, // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Typography>Events in Next Months</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>

          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
            }}
          >
            View All Events
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;