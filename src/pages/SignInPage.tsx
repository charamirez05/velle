import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

import { accentColor, primary, secondary } from "../constants/colors";
import { useGetUser, useSignIn } from "../services/userServices/useUsers";
import { IUserLogin, userLoginSchema } from "../models/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

function SignInPage() {
  const form = useForm<IUserLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const signIn = useSignIn();

  const submitForm = (data: any) => {
    signIn.mutate({
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
          Sign-in to Velle
        </Typography>

        <form onSubmit={handleSubmit(submitForm)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              sx={{
                "& .MuiInputLabel-root": {
                  color: secondary,
                },
              }}
              {...register("email")}
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
              {...register("password")}
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
                  backgroundColor: accentColor,
                  color: primary,
                },
              }}
            >
              Sign-in
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default SignInPage;
