import Hero from "../components/Hero";
import { Box, Button, Stack, Typography } from "@mui/material";
import { buttonColor, primary, secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import useEvents from "../services/eventServices/useEvents";
import { EventLoading } from "../components/EventLoading";
import { useUserStore } from "../store/userStore";

function HomePage() {
  const { data, isLoading } = useEvents();
  const { user } = useUserStore();

  if (isLoading) return <EventLoading loading={isLoading} />;

  return (
    <Box>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ color: secondary, fontWeight: "bold" }}>
          <Typography> Welcome </Typography> {user.name}
        </Typography>
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
        <Box
          display="flex"
          justifyContent="center"
          sx={{ paddingBottom: "20px" }}
        >
          <Typography
            variant="h5"
            sx={{ color: secondary, fontWeight: "bold" }}
          >
            Joined Volunteering Events This Month
          </Typography>
        </Box>

        <EventsListing events={data!} />

        <Box display="flex" justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: secondary,
                color: primary,
              },
            }}
          >
            View All Events
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          padding: { xs: "10px", md: "20px" },
          margin: { xs: "10px", md: " 30px 10px 10px 10px" },
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{ paddingBottom: "20px" }}
        >
          <Typography
            variant="h5"
            sx={{ color: secondary, fontWeight: "bold" }}
          >
            Joined Volunteering Events in Next Months
          </Typography>
        </Box>

        <EventsListing events={data!} />
        <Box display="flex" justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: buttonColor,
                color: primary,
              },
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
