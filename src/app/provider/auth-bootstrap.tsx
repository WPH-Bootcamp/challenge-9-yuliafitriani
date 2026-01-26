import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthFromStorage } from "@/lib/auth-storage";
import { loginSuccess } from "@/entities/user/model/auth.slice";

export const AuthBootstrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuthFromStorage();
    if (auth) {
      dispatch(loginSuccess(auth));
    }
  }, [dispatch]);

  return null;
};
