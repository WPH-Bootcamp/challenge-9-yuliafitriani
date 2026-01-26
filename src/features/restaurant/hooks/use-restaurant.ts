import { useQuery } from "@tanstack/react-query";
import { getRestoApi } from "@/entities/restaurant/api/resto.api";
import type { GetRestoParams } from "@/entities/restaurant/api/resto.api";

export const useRestaurants = (params: GetRestoParams) => {
  return useQuery({
    queryKey: ["restaurants", params],
    queryFn: () => getRestoApi(params),
  });
};
