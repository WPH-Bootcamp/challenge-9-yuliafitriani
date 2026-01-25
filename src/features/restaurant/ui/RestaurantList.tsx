import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RestaurantCard } from "../components/RestaurantCard";
import { useRestaurants } from "../hooks/use-restaurant";
import { useNavigate } from "react-router-dom";

export default function RestaurantList() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isFetching } = useRestaurants({
    page,
    limit: 3,
  });

  const restaurants = data?.data.restaurants ?? [];
  const pagination = data?.data.pagination;

  return (
    <section
      className="
        flex flex-col items-center
        gap-4
        px-4
        pt-6
        pb-12
        max-w-[393px]
        mx-auto
      "
    >
      {/* Header */}
      <div className="flex flex-row w-full gap-4">
        <h1
          className="text-left block w-full text-[24px]
          leading-[36px] text-neutral-25 font-extrabold"
        >
          Recomended
        </h1>
        <span
          className="text-right w-full text-primary-100 block text-[16px]
            leading-[30px]
            font-extrabold
            hover:underline"
        >
          See All
        </span>
      </div>
      {/* Cards */}
      {restaurants.map((resto) => (
        <RestaurantCard
          key={resto.id}
          name={resto.name}
          star={resto.star}
          place={resto.place}
          distance={resto.distance}
          logo={resto.logo}
          onClick={() => navigate(`/resto/${resto.id}`)}
        />
      ))}

      {/* Show More Button */}
      {pagination && page < pagination.totalPages && (
        <Button
          variant="outline"
          disabled={isFetching}
          onClick={() => setPage((prev) => prev + 1)}
          className="
            mt-2
            w-[160px]
            h-10
            rounded-full
            border-[#D5D7DA]
            font-nunito
            text-sm
            font-medium
          "
        >
          {isFetching ? "Loading..." : "Show More"}
        </Button>
      )}
    </section>
  );
}
