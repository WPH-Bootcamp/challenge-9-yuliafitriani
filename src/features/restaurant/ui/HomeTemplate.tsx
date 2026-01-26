import Hero from "@/features/restaurant/ui/Hero";
import Category from "@/features/restaurant/ui/Category";
import RestaurantList from "@/features/restaurant/ui/RestaurantList";

export default function HomeTemplate() {
  return (
    <section>
      <Hero />
      <div className="max-w-[1200px] mx-auto">
        <Category />
        <RestaurantList />
      </div>
    </section>
  );
}
