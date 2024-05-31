import Hero from "../components/Hero";
import { Box, Button, Typography } from "@mui/material";
import { accentColor, primary, secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import useEvents from "../services/eventServices/useEvents";
import { EventLoading } from "../components/EventLoading";
import { useUserStore } from "../services/store/userStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useEvents();
  const { user } = useUserStore();
  if (isLoading) return <EventLoading loading={isLoading} />;

  const handleJoinEvent = () => {
    if (Object.keys(user).length === 0) {
      toast.error("Sign-in first!");
      navigate("/sign-in");
    }
  };
  return (
    <Box>
      <Hero />

      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)
          margin: { xs: "10px", md: "10px" }, // m-4 (4 * 4px = 16px)
          boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            paddingBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: secondary, fontWeight: "bold" }}
          >
            Events in Current Month
          </Typography>
        </Box>

        <EventsListing
          events={data!
            .filter((event) => {
              const eventMonth = new Date(event.date).toISOString().slice(5, 7);
              return eventMonth === "05";
            })
            .slice(0, 4)}
          isDashboad={true}
        />
        <Box display="flex" justifyContent="center" sx={{ paddingTop: "10px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: accentColor,
                color: primary,
              },
            }}
            onClick={handleJoinEvent}
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
          boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)", // shadow-md
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
            Events in Next Months
          </Typography>
        </Box>
        <EventsListing
          events={data!
            .filter((event) => {
              const eventMonth = new Date(event.date).toISOString().slice(5, 7);
              return eventMonth !== "05";
            })
            .slice(0, 4)}
          isDashboad={true}
        />
        <Box display="flex" justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: accentColor,
                color: primary,
              },
            }}
            onClick={handleJoinEvent}
          >
            View All Events
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SplashPage;
