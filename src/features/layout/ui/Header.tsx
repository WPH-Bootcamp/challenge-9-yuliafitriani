import { ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { useEffect, useState } from "react";

type HeaderProps = {
  defaultScrolled?: boolean;
};

export default function Header({ defaultScrolled = false }: HeaderProps) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(defaultScrolled);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const totalQty = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0),
  );

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        flex items-center justify-between
        px-4 h-16
        transition-all duration-300
        max-w-[1536px]
        mx-auto
        ${
          scrolled
            ? "bg-white shadow-[0px_0px_20px_rgba(203,202,202,0.25)]"
            : "bg-transparent"
        }
      `}
      onClick={() => navigate("/")}
    >
      {/* Logo */}
      <Logo
        className={`
          font-bold text-xl transition-colors
          ${scrolled ? "text-[#0A0D12]" : "text-white"}
        `}
      />

      {/* Right Action */}
      <div className="flex items-center gap-3">
        {!isAuthenticated ? (
          <>
            {/* Sign In */}
            <button
              onClick={() => navigate("/signin")}
              className={`
                px-4 py-2 text-sm font-semibold rounded-lg
                transition
                ${scrolled ? "text-[#0A0D12]" : "text-white"}
              `}
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              onClick={() => navigate("/signup")}
              className="
                px-4 py-2 text-sm font-semibold rounded-lg
                bg-primary-100 text-white
                hover:opacity-90 transition
              "
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            {/* Shopping Bag */}
            <button
              onClick={() => navigate("/cart")}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <ShoppingCart
                className={`
                  w-6 h-6 transition-colors
                  ${scrolled ? "text-[#0A0D12]" : "text-white"}
                `}
              />

              {totalQty > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    w-5 h-5
                    flex items-center justify-center
                    rounded-full
                    bg-primary-100
                    text-white
                    text-xs font-bold
                  "
                >
                  {totalQty}
                </span>
              )}
            </button>

            {/* Avatar */}
            <button
              onClick={() => navigate("/profile")}
              className="
                w-10 h-10
                rounded-full
                bg-gray-200
                flex items-center justify-center
                overflow-hidden
              "
            >
              <User className="w-5 h-5 text-gray-700" />
              {/* kalau sudah ada avatar:
              <img src={user.avatar} alt="profile" /> */}
            </button>
          </>
        )}
      </div>
    </header>
  );
}
