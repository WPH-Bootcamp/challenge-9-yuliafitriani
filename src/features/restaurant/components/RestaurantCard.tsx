import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  name: string;
  star: number;
  place: string;
  distance: number;
  logo: string;
  className?: string;
  onClick?: () => void;
}

export function RestaurantCard({
  name,
  star,
  place,
  distance,
  logo,
  className,
  onClick,
}: RestaurantCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
        flex items-center gap-2
        w-full h-[114px]
        p-3
        bg-white
        rounded-2xl
        shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
        text-left
        `,
        className,
      )}
    >
      {/* Image */}
      <img
        src={logo}
        alt={name}
        className="w-[90px] h-[90px] rounded-xl object-cover shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col gap-[2px] flex-1 h-full">
        {/* Name */}
        <h3 className="font-nunito font-extrabold text-[16px] leading-[30px] text-[#0A0D12]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 h-7">
          <Star size={20} fill="#FFAB0D" stroke="#FFAB0D" />
          <span className="font-nunito text-sm font-medium text-[#0A0D12]">
            {star.toFixed(1)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-[6px] h-7">
          <span className="font-nunito text-sm text-[#0A0D12]">{place}</span>

          <span className="w-[2px] h-[2px] rounded-full bg-[#0A0D12]" />

          <span className="font-nunito text-sm text-[#0A0D12]">
            {distance} km
          </span>
        </div>
      </div>
    </button>
  );
}
