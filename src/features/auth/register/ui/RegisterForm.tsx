import { Button } from "@/components/ui/button";
import { FloatingPasswordInput } from "@/components/password-floating-input";
import { FloatingInput } from "@/components/floating-input";
import { useRegisterForm } from "../model/useRegisterForm";

export function RegisterForm() {
  const { register, handleSubmit, isLoading } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FloatingInput label="Full Name" {...register("name")} />

      <FloatingInput label="Email" type="email" {...register("email")} />

      <FloatingInput label="Phone" {...register("phone")} />

      <FloatingPasswordInput label="Password" {...register("password")} />

      <FloatingPasswordInput
        label="Confirm Password"
        {...register("confirmPassword")}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 rounded-full bg-[#C12116] hover:bg-[#a91c13] text-white font-bold"
      >
        {isLoading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
