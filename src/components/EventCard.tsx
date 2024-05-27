import { Box, Button, Stack, Typography } from "@mui/material";
import { primary, secondary } from "../constants/colors";

function EventCard() {
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
          <Box>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: { xs: "10px", md: "15px" } }}
              >
                Event Date
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: { xs: "10px", md: "15px" },
                }}
              >
                Event Time
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: { xs: "10px", md: "15px" } }}
              >
                Event Location
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  fontWeight: "bold",
                  color: secondary,
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  paddingTop: "20px",
                }}
              >
                Event Name
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: primary,
                  color: secondary,
                  textTransform: "none",
                }}
              >
                Volunteer Event
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EventCard;
