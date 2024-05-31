import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { secondary, primary } from "../constants/colors";
import { EventSchema, IEvent } from "../models/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateEvent } from "../services/eventServices/useEvents";

function CreateEventPage() {
  const form = useForm<IEvent>({
    defaultValues: {
      name: "",
      date: "",
      time: "8:00",
      location: "",
      description: "",
    },
    resolver: zodResolver(EventSchema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const createEvent = useCreateEvent();

  const submitForm = (data: any) => {
    console.log(data);
    createEvent.mutate({
      id: crypto.randomUUID(),
      name: data.name,
      date: data.date,
      time: data.time,
      location: data.location,
      description: data.description,
    });
  };

  return (
    <Box
      sx={{
        padding: { xs: "100px 10px 100% 10px", md: "100px 25px 100% 25px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: "30px", // px-6 (6 * 4px = 24px)
          margin: "20px", // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: secondary,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px",
            fontSize: { xs: "25px", md: "30px" },
          }}
          gutterBottom
        >
          Create a New Volunteering Event
        </Typography>

        <form onSubmit={handleSubmit(submitForm)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Event Name"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Event Date"
              type="date"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("date")}
              error={!!errors.date}
              helperText={errors.date?.message}
            />

            <TextField
              label="Event Time"
              type="time"
              defaultValue={"2024-05-30"}
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("time")}
              error={!!errors.time}
              helperText={errors.time?.message}
            />

            <TextField
              label="Event Location"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("location")}
              error={!!errors.location}
              helperText={errors.location?.message}
            />

            <TextField
              label="Event Description"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                fontSize: "17px",
                color: secondary,
                backgroundColor: primary,
                borderRadius: "9999px", // rounded-full
                fontWeight: "bold", // font-bold
                width: "100%", // w-full
                textTransform: "none",
                "&:hover": {
                  backgroundColor: secondary,
                  color: primary,
                },
              }}
              disabled={createEvent.isPending}
            >
              Create Event
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default CreateEventPage;
