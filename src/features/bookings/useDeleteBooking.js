import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletebooking } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking has been deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      //   navigate("/bookings");
    },
    onError: (err) => {
      console.error(err);
      toast.error(`booking can't be deleted`);
    }
  });
  return { isDeleting, deletebooking };
}
