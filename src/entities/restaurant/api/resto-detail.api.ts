import { api } from "@/services/api/axios";

export interface Menu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface RestoDetailResponse {
  success: boolean;
  data: {
    id: number;
    name: string;
    star: number;
    averageRating: number;
    place: string;
    coordinates: {
      lat: number;
      long: number;
    };
    distance: number;
    logo: string;
    images: string[];
    category: string;
    totalMenus: number;
    totalReviews: number;
    menus: Menu[];
    reviews: Review[];
  };
}

export interface GetRestoDetailParams {
  id: number;
  limitMenu?: number;
  limitReview?: number;
}

export const getRestoDetailApi = async ({
  id,
  limitMenu = 10,
  limitReview = 6,
}: GetRestoDetailParams): Promise<RestoDetailResponse> => {
  const { data } = await api.get(`/resto/${id}`, {
    params: {
      limitMenu,
      limitReview,
    },
  });

  return data;
};
