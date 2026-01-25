import { CategoryCard } from "../components/CategoryCard";
import AllFoodSvg from "@/assets/all-food.svg";
import LocationSvg from "@/assets/location.svg";
import BestSellerSvg from "@/assets/best-seller.svg";
import DiscountSvg from "@/assets/discount.svg";
import DeliverySvg from "@/assets/delivery.svg";
import LunchSvg from "@/assets/lunch.svg";

export default function Category() {
  return (
    <div className="grid grid-cols-3 gap-4 py-6 px-4">
      <CategoryCard
        className="w-full"
        title="All Restaurant"
        icon={
          <img src={AllFoodSvg} alt="All Restaurant" className="w-12 h-12" />
        }
        onClick={() => console.log("Restaurant clicked")}
      />

      <CategoryCard
        className="w-full"
        title="Nearby"
        icon={<img src={LocationSvg} alt="Nearby" className="w-12 h-12" />}
        onClick={() => console.log("Nearby clicked")}
      />

      <CategoryCard
        title="Best Seller"
        icon={<img src={DiscountSvg} alt="Best Seller" className="w-12 h-12" />}
        onClick={() => console.log("Best Seller clicked")}
      />

      <CategoryCard
        className="w-full"
        title="Best Seller"
        icon={
          <img src={BestSellerSvg} alt="Best Seller" className="w-12 h-12" />
        }
        onClick={() => console.log("Best Seller clicked")}
      />

      <CategoryCard
        className="w-full"
        title="Delivery"
        icon={<img src={DeliverySvg} alt="Delivery" className="w-12 h-12" />}
        onClick={() => console.log("Delivery clicked")}
      />

      <CategoryCard
        className="w-full"
        title="Lunch"
        icon={<img src={LunchSvg} alt="Lunch" className="w-12 h-12" />}
        onClick={() => console.log("Lunch clicked")}
      />
    </div>
  );
}
