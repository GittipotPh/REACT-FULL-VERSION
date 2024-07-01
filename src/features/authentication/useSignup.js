import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account successfully registered, Please verify the user's email address"
      );
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });

  return { signup, isLoading };
}
