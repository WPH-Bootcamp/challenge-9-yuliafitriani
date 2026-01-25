import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  name: string;
  price: number;
  image: string;
  onAdd?: () => void;
  className?: string;
}

export function MenuCard({
  name,
  price,
  image,
  onAdd,
  className,
}: MenuCardProps) {
  return (
    <div
      className={cn(
        `
        flex flex-col
        w-[172px] h-[306.5px]
        bg-white
        rounded-2xl
        shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
        overflow-hidden
        `,
        className,
      )}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="
          w-[172.5px]
          h-[172.5px]
          object-cover
        "
      />

      {/* Content */}
      <div className="flex flex-col gap-4 p-3 h-full">
        {/* Name & Price */}
        <div className="flex flex-col">
          <p className="font-nunito text-sm font-medium leading-7 text-[#0A0D12]">
            {name}
          </p>

          <p className="font-nunito text-[16px] font-extrabold leading-[30px] text-[#0A0D12]">
            Rp{price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Button */}
        <Button
          onClick={onAdd}
          className="
            h-9
            rounded-full
            bg-[#C12116]
            hover:bg-[#a91c13]
            font-nunito
            text-sm
            font-bold
          "
        >
          Add
        </Button>
      </div>
    </div>
  );
}
