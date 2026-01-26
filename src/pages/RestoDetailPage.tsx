import RestaurantDetailTemplate from "@/features/restaurant/ui/RestaurantDetailTemplate";
import { Footer } from "@/features/layout/ui/Footer";
import Header from "@/features/layout/ui/Header";

export default function RestoDetailPage() {
  return (
    <section>
      <Header />
      <div className="lg:max-w-[1200px] mx-auto px-4 mt-20">
        <RestaurantDetailTemplate />
      </div>
      <Footer />
    </section>
  );
}
