import { api } from "@/services/api/axios";

export interface GetRestoParams {
  location?: string;
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  category?: string;
  page?: number;
  limit?: number;
}

export interface Restaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange: {
    min: number;
    max: number;
  };
  distance: number;
}

export interface GetRestoResponse {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export const getRestoApi = async (
  params: GetRestoParams,
): Promise<GetRestoResponse> => {
  const { data } = await api.get("/resto", { params });
  return data;
};
