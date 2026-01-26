import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginApi } from "../api/login.api";

type LoginFormValues = {
  email: string;
  password: string;
};

export function useLoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);

      // 🔐 call API login
      await loginApi(data); // ← ganti dengan API kamu

      // ✅ success → redirect
      navigate("/");
    } catch (error) {
      // handle error (toast / form error)
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
  };
}
