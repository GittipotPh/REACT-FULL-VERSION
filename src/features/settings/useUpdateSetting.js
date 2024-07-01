import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin)

    //accept only one argument that is object newcabin
    mutationFn: updateSettingAPI, // already destructuring to have 2 arguments
    onSuccess: () => {
      toast.success("Setting has been edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isUpdating, updateSetting };
}
