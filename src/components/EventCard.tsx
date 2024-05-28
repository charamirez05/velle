import { Box, Button, Stack, Typography } from "@mui/material";
import { primary, secondary } from "../constants/colors";
import { IEvent } from "../models/event";

function EventCard({ event }: { event: IEvent }) {
  return (
    <Box sx={{ padding: "0px 0px 10px 0" }}>
      <Box
        sx={{
          padding: "20px",
          borderBottom: "3px solid #A531B4",
          borderRadius: "8px", // rounded-lg (lg corresponds to 8px border radius)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "10px", md: "15px" } }}
            >
              {event && event.date}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: "10px", md: "15px" },
              }}
            >
              {event && event.time}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "10px", md: "15px" } }}
            >
              {event && event.location}
            </Typography>
          </Stack>
        </Box>
        <Stack spacing={2}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "25px", md: "30px" },
              fontWeight: "bold",
              color: secondary,
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            {event && event.name}
          </Typography>
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
            Volunteer Event
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default EventCard;
