import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/register.api";
import type { RegisterPayload } from "./register.types";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerApi(payload),
  });
};
