import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrUpdateCabin as UpdateCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updatingCabin, isLoading: isUpdaing } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin)

    //accept only one argument that is object newcabin
    mutationFn: ({ newCabinData, id }) => UpdateCabinAPI(newCabinData, id), // already destructuring to have 2 arguments
    onSuccess: () => {
      toast.success("Cabin has been edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isUpdaing, updatingCabin };
}
