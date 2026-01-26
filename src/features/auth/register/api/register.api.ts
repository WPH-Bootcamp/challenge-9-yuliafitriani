import { api } from "@/services/api/axios";
import { endpoints } from "@/services/api/endpoints";
import type { ApiResponse } from "@/services/types/api";
import type {
  RegisterPayload,
  RegisterResponse,
} from "../model/register.types";

export const registerApi = async (
  payload: RegisterPayload,
): Promise<ApiResponse<RegisterResponse>> => {
  const { data } = await api.post(endpoints.register, payload);
  return data;
};
