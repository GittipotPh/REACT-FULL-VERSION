import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrUpdateCabin as createCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient(); //to get invalidateQuery

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin)
    mutationFn: createCabinAPI,
    onSuccess: () => {
      toast.success("New cabin has been created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
      //   reset();
    },
    onError: (err) => toast.error(err.message)
  });

  return { isCreating, createCabin };
}
