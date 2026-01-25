import { useDispatch } from "react-redux";
import { MenuCard } from "../components/MenuCard";
import { addToCart } from "@/entities/cart/cart.slice";
import type { Menu } from "@/entities/restaurant/api/resto-detail.api";

interface Props {
  menus: Menu[];
}

export default function RestoDetailMenus({ menus }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 w-full gap-4 pb-2">
      {menus.map((menu) => (
        <MenuCard
          className="w-full"
          key={menu.id}
          name={menu.foodName}
          price={menu.price}
          image={menu.image}
          onAdd={() =>
            dispatch(
              addToCart({
                id: menu.id,
                name: menu.foodName,
                price: menu.price,
                image: menu.image,
              }),
            )
          }
        />
      ))}
    </div>
  );
}
