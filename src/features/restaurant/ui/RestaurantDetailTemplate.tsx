import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestoDetail } from "@/features/restaurant/hooks/use-resto-detail";
import MenuTab from "../components/MenuTab";
import RestoDetailMenus from "@/features/restaurant/ui/MenuList";
import type { Menu } from "@/entities/restaurant/api/resto-detail.api";
import RestoHero from "./RestoHero";
import { RestaurantCard } from "@/features/restaurant/components/RestaurantCard";

type MenuTabType = "all" | "food" | "drink";

export default function RestaurantDetailTemplate() {
  const { id } = useParams();
  const { data, isLoading } = useRestoDetail(Number(id));
  const [activeTab, setActiveTab] = useState<MenuTabType>("all");

  const resto = data?.data;

  const filteredMenus: Menu[] = useMemo(() => {
    const menus = resto?.menus ?? [];

    if (activeTab === "all") return menus;

    return menus.filter((menu) => menu.type?.toLowerCase() === activeTab);
  }, [activeTab, resto]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <RestoHero
        images={resto?.images ?? []}
        name={resto?.name}
        location={resto?.distance}
      />

      {/* Resto Info */}
      <div className="mt-6 max-w-[1200px] mx-auto px-4 lg:px-0">
        {resto && (
          <RestaurantCard
            key={resto.id}
            name={resto.name}
            star={resto.star}
            place={resto.place}
            distance={resto.distance}
            logo={resto.logo}
          />
        )}
      </div>
      <h1 className="text-xl font-extrabold my-4">Menu</h1>

      {/* TAB */}
      <div className="mt-4">
        <div className="flex gap-3">
          <MenuTab
            label="All Menu"
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          />
          <MenuTab
            label="Food"
            active={activeTab === "food"}
            onClick={() => setActiveTab("food")}
          />
          <MenuTab
            label="Drink"
            active={activeTab === "drink"}
            onClick={() => setActiveTab("drink")}
          />
        </div>
      </div>

      {/* MENU LIST */}
      <div className="my-4">
        <RestoDetailMenus menus={filteredMenus} />
      </div>
    </div>
  );
}
