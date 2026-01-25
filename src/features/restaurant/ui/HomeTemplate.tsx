import Hero from "@/features/restaurant/ui/Hero";
import Category from "@/features/restaurant/ui/Category";
import RestaurantList from "@/features/restaurant/ui/RestaurantList";

export default function HomeTemplate() {
  return (
    <section>
      <Hero />
      <Category />
      <RestaurantList />
    </section>
  );
}
