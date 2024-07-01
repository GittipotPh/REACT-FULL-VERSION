import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  console.log(bookings);
  const numBookings = bookings.length;
  const sales = bookings.reduce((start, cur) => cur.totalPrice + start, 0);
  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((start, cur) => cur.numNights + start, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendar />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
