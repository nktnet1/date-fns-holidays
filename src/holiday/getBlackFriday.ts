import { addDays } from "date-fns";
import { getThanksgiving } from "./getThanksgiving";

/**
 * Returns the date of Black Friday for the specified year.
 *
 * @category Holiday
 *
 * @remarks
 * Black Friday is observed annually on the day after Thanksgiving Day
 * in the United States (the fourth Friday of November).
 *
 * The returned {@link Date} is created in the local time zone.
 *
 * @param year - The year for which to obtain Black Friday.
 * @returns A {@link Date} representing Black Friday of the specified year.
 */
export function getBlackFriday(year: number) {
  return addDays(getThanksgiving(year), 1);
}
