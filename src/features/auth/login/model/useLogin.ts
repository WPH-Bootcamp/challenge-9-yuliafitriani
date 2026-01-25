import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginApi } from "../api/login.api";
import { loginSuccess } from "@/entities/user/model/auth.slice";
import { saveAuthToStorage } from "@/lib/auth-storage";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (response) => {
      const { user, token } = response.data;

      // 1️⃣ save to redux
      dispatch(loginSuccess({ user, token }));

      // 2️⃣ save to localStorage
      saveAuthToStorage({ user, token });
    },
  });
};
