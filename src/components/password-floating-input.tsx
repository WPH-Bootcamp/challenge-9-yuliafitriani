import * as React from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingPasswordInput = React.forwardRef<
  HTMLInputElement,
  FloatingPasswordInputProps
>(({ label, error, className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative space-y-1">
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        placeholder=" "
        className={cn(
          "h-12 rounded-xl peer pr-10 pt-6",
          error &&
            "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}-error` : undefined}
        {...props}
      />

      {/* Floating label */}
      <label
        className={cn(
          `
          absolute left-4 top-1/2 -translate-y-1/2
          text-sm pointer-events-none
          transition-all
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-base
          peer-focus:top-2
          peer-focus:text-xs
          peer-[:not(:placeholder-shown)]:top-2
          peer-[:not(:placeholder-shown)]:text-xs
        `,
          error
            ? "text-red-500"
            : "text-muted-foreground peer-focus:text-[#0A0D12]",
        )}
      >
        {label}
      </label>

      {/* Eye toggle */}
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2",
          error ? "text-red-500" : "text-muted-foreground",
        )}
        tabIndex={-1}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>

      {/* Error message */}
      {error && (
        <p id={`${props.name}-error`} className="text-xs text-red-500 ml-1">
          {error}
        </p>
      )}
    </div>
  );
});

FloatingPasswordInput.displayName = "FloatingPasswordInput";
