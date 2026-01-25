import { useQuery } from "@tanstack/react-query";
import { getRestoDetailApi } from "@/entities/restaurant/api/resto-detail.api";

export const useRestoDetail = (id: number) => {
  return useQuery({
    queryKey: ["resto-detail", id],
    queryFn: () => getRestoDetailApi({ id }),
    enabled: !!id,
  });
};
