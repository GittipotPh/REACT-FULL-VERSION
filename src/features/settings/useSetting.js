import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSetting() {
  const {
    isLoading,
    error,
    data: settings
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings
  });
  return { isLoading, error, settings };
}

// export function useUpdateSetting() {
//   const {
//     isLoading,
//     error,
//     data: settings
//   } = useQuery({
//     queryKey: ["settings"],
//     queryFn: updateSetting
//   });
//   return { isLoading, error, settings };
// }
