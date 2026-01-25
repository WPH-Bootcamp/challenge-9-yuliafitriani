import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CategoryCard({
  title,
  icon,
  className,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
        flex flex-col items-center gap-1
        w-[106px]
        focus:outline-none
      `,
        className,
      )}
    >
      {/* Card */}
      <div
        className="
          flex items-center justify-center
          w-full h-[100px]
          rounded-2xl
          bg-white
          shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
          transition
          hover:scale-[1.03]
          active:scale-95
        "
      >
        {icon}
      </div>

      {/* Label */}
      <span
        className="
          font-nunito
          text-sm
          font-bold
          leading-[28px]
          tracking-[-0.02em]
          text-[#0A0D12]
          text-center
        "
      >
        {title}
      </span>
    </button>
  );
}
