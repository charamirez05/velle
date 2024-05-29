import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { primary, secondary } from "../constants/colors";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../services/userServices/useUsers";
import { IUser, UserSchema } from "../models/user";
import { zodResolver } from "@hookform/resolvers/zod";

function RegisterPage() {
  const form = useForm<IUser>({
    resolver: zodResolver(UserSchema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const registerUser = useRegister();

  const submitForm = (data: any) => {
    registerUser.mutate({
      id: crypto.randomUUID(),
      name: data.name,
      address: data.address,
      contactNumber: data.contacNumber,
      email: data.email,
      password: data.password,
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
          Register for a New Account
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
              label="Email Address"
              type="email"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Password"
              type="password"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
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
              disabled={registerUser.isPending}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterPage;
