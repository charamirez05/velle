import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { secondary, primary } from "../constants/colors";
import { useUpdateUser } from "../services/userServices/useUsers";
import { useFieldArray, useForm } from "react-hook-form";
import { IUser } from "../models/user";
import { useUserStore } from "../services/store/userStore";

function ProfilePage() {
  const { user } = useUserStore();

  const parsedPassions =
    user.passions && user.passions.map((p: string) => JSON.parse(p));

  const form = useForm<IUser>({
    defaultValues: {
      name: user.name,
      address: user.address,
      contactNumber: user.contactNumber,
      birthDate: user.birthDate,
      email: user.email,
      passions: parsedPassions,
    },
  });

  console.log(user);

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "passions",
  });

  const updateUser = useUpdateUser();

  const submitForm = (data: any) => {
    console.log("????");
    console.log(data);
    console.log(user);
    updateUser.mutate({
      userid: user.id,
      updatedUser: data,
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
          Edit Profile
        </Typography>

        <form onSubmit={handleSubmit(submitForm)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Name"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("name")}
              error={!!errors.address}
              helperText={errors.name?.message}
            />

            <TextField
              label="Address"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
            <TextField
              label="Contact Number"
              type="text"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("contactNumber", {
                required: {
                  value: true,
                  message: "Contact Number is required",
                },
              })}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber?.message}
            />

            <TextField
              label="Date of Birth"
              type="date"
              defaultValue={"2024-05-30"}
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("birthDate")}
              error={!!errors.birthDate}
              helperText={errors.birthDate?.message}
            />
            <TextField
              label="Email Address"
              type="email"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("email")}
              disabled
            />

            <Box>
              <Stack direction="row" spacing={1} sx={{ marginBottom: "10px" }}>
                <Typography variant="subtitle1" sx={{ color: secondary }}>
                  Passions
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    color: secondary,
                    bgcolor: primary,
                    textTransform: "none",
                    width: "fir-content",
                    "&:hover": {
                      color: primary,
                      backgroundColor: secondary,
                    },
                  }}
                  onClick={() => append({ passion: "" })}
                >
                  Add passion
                </Button>
              </Stack>

              {fields.map((field, index) => {
                return (
                  <Stack
                    direction="row"
                    key={field.id}
                    sx={{ marginBottom: "5px" }}
                  >
                    <TextField
                      size="small"
                      type="text"
                      {...register(`passions.${index}.passion` as const)}
                    />
                    {index > 0 && (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          color: secondary,
                          bgcolor: primary,
                          textTransform: "none",
                          width: "fir-content",
                          "&:hover": {
                            color: primary,
                            backgroundColor: secondary,
                          },
                        }}
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Stack>
                );
              })}
            </Box>

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
            >
              Update Profile
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default ProfilePage;
