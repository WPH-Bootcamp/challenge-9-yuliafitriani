import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/floating-input";
import { FloatingPasswordInput } from "@/components/password-floating-input";
import { useLoginForm } from "../model/useLoginForm";

export function LoginForm() {
  const { register, handleSubmit, isLoading, errors } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FloatingInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <FloatingPasswordInput
        label="Password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 rounded-full bg-[#C12116] hover:bg-[#a91c13] text-white font-bold"
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
