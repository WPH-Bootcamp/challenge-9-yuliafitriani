import type { User } from "@/entities/user/model/types";

export const saveAuthToStorage = (payload: { user: User; token: string }) => {
  localStorage.setItem("auth", JSON.stringify(payload));
};

export const getAuthFromStorage = () => {
  const data = localStorage.getItem("auth");
  return data ? JSON.parse(data) : null;
};
