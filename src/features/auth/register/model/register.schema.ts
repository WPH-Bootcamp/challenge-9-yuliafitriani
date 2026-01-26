import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Invalid phone number"),
    password: z.string().min(6, "Min 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password does not match",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
