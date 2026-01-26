import { api } from "@/services/api/axios";
import { endpoints } from "@/services/api/endpoints";
import type { ApiResponse } from "@/services/types/api";
import type { LoginPayload, LoginResponse } from "../model/login.types";

export const loginApi = async (
  payload: LoginPayload,
): Promise<ApiResponse<LoginResponse>> => {
  const { data } = await api.post(endpoints.login, payload);
  return data;
};
