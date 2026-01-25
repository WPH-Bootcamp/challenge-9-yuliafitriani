import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = React.forwardRef<
  HTMLInputElement,
  FloatingInputProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="relative space-y-1">
      <Input
        ref={ref}
        placeholder=" "
        className={cn(
          "h-12 rounded-xl peer pt-6",
          error &&
            "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}-error` : undefined}
        {...props}
      />

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

      {error && (
        <p id={`${props.name}-error`} className="text-xs text-red-500 ml-1">
          {error}
        </p>
      )}
    </div>
  );
});

FloatingInput.displayName = "FloatingInput";
