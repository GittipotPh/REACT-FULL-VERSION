import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [seachParams] = useSearchParams();

  const numDays = !seachParams.get("last")
    ? 7
    : Number(seachParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();
  console.log(queryDate);

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`]
  });
  console.log(bookings);
  return { isLoading, bookings };
}
