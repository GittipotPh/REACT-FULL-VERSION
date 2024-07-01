import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updatingUser, isLoading: isUpdating } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin)

    //accept only one argument that is object newcabin
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account has been edited");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({
        queryKey: ["user"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isUpdating, updatingUser };
}
