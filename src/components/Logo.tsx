type LogoProps = {
  size?: number;
  showText?: boolean;
};

export function Logo({ size = 32, showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-[11.43px]">
      {/* SVG Logo */}
      <img
        src="./src/assets/logo.svg"
        alt="Foody logo"
        width={size}
        height={size}
        className="object-contain"
      />

      {/* Brand Text */}
      {showText && (
        <span className="text-[24.381px] font-extrabold leading-8 text-[#0A0D12]">
          Foody
        </span>
      )}
    </div>
  );
}
