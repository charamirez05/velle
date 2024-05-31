//IUser = Interface User

import { z } from "zod";

export interface IUser {
  id: string;
  name: string;
  address: string;
  contactNumber: string;
  birthDate: string;
  email: string;
  password: string;
  passions: {
    passion: string;
  }[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export const UserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  address: z.string().trim().min(1, "Address is required"),
  contactNumber: z.string().trim().min(1, "Contact Number is required"),
  birthDate: z.string().date().trim().min(1, "Date of Birth is required"),
  email: z.string().email().trim().toLowerCase().min(1, "Email is required"),
  password: z
    .string()
    .trim()
    .min(1, "Password is required")
    .min(6, "Password must be longer than 6 characters"),
  passions: z.object({ passion: z.string() }).optional().array(),
});

export const userLoginSchema = z.object({
  email: z.string().email().trim().toLowerCase().min(1, "Email is required"),
  password: z.string().trim().min(1, "Password  is required"),
});
