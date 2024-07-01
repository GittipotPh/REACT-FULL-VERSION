import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser
  });

  console.log("Hook retreive from API", user);

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
