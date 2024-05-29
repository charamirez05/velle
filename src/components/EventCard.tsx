import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { buttonColor, primary, secondary } from "../constants/colors";
import { IEvent } from "../models/event";
import { useJoinEvent } from "../services/eventServices/useEvents";
import { useUserStore } from "../store/userStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EventCard({ event }: { event: IEvent }) {
  const { user } = useUserStore();
  const joinEvent = useJoinEvent();
  const navigate = useNavigate();
  const handleViewEvent = () => {
    if (Object.keys(user).length === 0) {
      toast.error("Sign-in first!");
      navigate("/sign-in");
    } else {
      joinEvent.mutate({
        eventid: event.id,
        userid: user.id,
      });
    }
  };
  return (
    <Card
      sx={{
        height: "250px", // Fixed height
        width: "100%", // Ensure it takes full width of Grid item
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <CardContent
        sx={{
          padding: "10px",
          height: "250px", // Fixed height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Adjust content spacing as needed
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

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "10px", md: "15px" },
            color: secondary,
            textAlign: "center",
          }}
        >
          {event && event.description}
        </Typography>

        <CardActions sx={{ paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",

              backgroundColor: primary,
              color: secondary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: buttonColor,
                color: primary,
              },
            }}
            onClick={handleViewEvent}
          >
            Join Event
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default EventCard;
