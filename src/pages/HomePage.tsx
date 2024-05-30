import { Box, Button, Typography } from "@mui/material";
import { accentColor, primary, secondary } from "../constants/colors";
import EventsListing from "../components/EventsListing";
import { useUserStore } from "../store/userStore";
import { useEventStore } from "../store/eventStore";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user } = useUserStore();

  const { events } = useEventStore();

  const navigate = useNavigate();

  const currentMonth = new Date().toISOString().slice(5, 7);

  const handleViewEvents = (schedule: string) => {
    navigate(`/events/${schedule}`);
  };

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

        {events!.filter((event) => {
          const eventMonth = new Date(event.date).toISOString().slice(5, 7);
          return eventMonth === currentMonth;
        }).length !== 0 ? (
          <>
            <EventsListing
              events={events!
                .filter((event) => {
                  const eventMonth = new Date(event.date)
                    .toISOString()
                    .slice(5, 7);
                  return eventMonth === currentMonth;
                })
                .slice(0, 4)}
              isDashboad={true}
            />
            <Box
              display="flex"
              justifyContent="center"
              sx={{ paddingTop: "20px" }}
            >
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
                onClick={() => handleViewEvents("upcoming")}
              >
                View All Events
              </Button>
            </Box>
          </>
        ) : (
          <Box display="flex" justifyContent="center">
            <Typography>No events joined for the following months</Typography>
          </Box>
        )}
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

        {events!.filter((event) => {
          const eventMonth = new Date(event.date).toISOString().slice(5, 7);
          return eventMonth !== currentMonth;
        }).length !== 0 ? (
          <>
            <EventsListing
              events={events!
                .filter((event) => {
                  const eventMonth = new Date(event.date)
                    .toISOString()
                    .slice(5, 7);
                  return eventMonth !== currentMonth;
                })
                .slice(0, 4)}
              isDashboad={true}
            />
            <Box
              display="flex"
              justifyContent="center"
              sx={{ paddingTop: "20px" }}
            >
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
                onClick={() => handleViewEvents("forthcoming")}
              >
                View All Events
              </Button>
            </Box>
          </>
        ) : (
          <Box display="flex" justifyContent="center">
            <Typography>No events joined for the following months</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default HomePage;
