import type { User } from "@/entities/user/model/types";

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterResponse = {
  user: User;
  token: string;
};
