import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";

export default function Header() {
  const navigate = useNavigate();

  const totalQty = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0),
  );

  return (
    <header
      className="
        flex items-center justify-between
        px-4
        h-16
        bg-white
        shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
      "
    >
      {/* Logo */}
      <Logo />

      {/* Right Action */}
      <div className="relative">
        <button
          onClick={() => navigate("/cart")}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <ShoppingBag className="w-7 h-7 text-[#0A0D12]" />

          {/* Badge */}
          {totalQty > 0 && (
            <span
              className="
                absolute
                -top-1
                -right-1
                w-5 h-5
                flex items-center justify-center
                rounded-full
                bg-primary-100
                text-white
                text-xs
                font-bold
              "
            >
              {totalQty}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
