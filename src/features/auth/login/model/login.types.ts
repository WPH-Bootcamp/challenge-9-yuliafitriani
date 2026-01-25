import type { User } from "@/entities/user/model/types";

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};
