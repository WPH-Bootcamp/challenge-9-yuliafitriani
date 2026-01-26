import LogoImage from "@/assets/logo.svg";
import clsx from "clsx";

type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string; // wrapper
  textClassName?: string; // khusus teks "Foody"
};

export function Logo({
  size = 32,
  showText = true,
  className,
  textClassName,
}: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-[11.43px]", className)}>
      {/* SVG Logo */}
      <img
        src={LogoImage}
        alt="Foody logo"
        width={size}
        height={size}
        className="object-contain"
      />

      {/* Brand Text */}
      {showText && (
        <span
          className={clsx(
            "text-[24.381px] font-extrabold leading-8 transition-colors",
            textClassName,
          )}
        >
          Foody
        </span>
      )}
    </div>
  );
}
