import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./register.schema";
import type { RegisterFormValues } from "./register.schema";
import { useRegister } from "./useRegister";

export const useRegisterForm = () => {
  const registerMutation = useRegister();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterFormValues) => {
    registerMutation.mutate({
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    });
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    isLoading: registerMutation.isPending,
  };
};
