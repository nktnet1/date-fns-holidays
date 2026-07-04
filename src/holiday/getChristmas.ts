import { getChristmasDay } from "./getChristmasDay";

/**
 * @deprecated Use {@link getChristmasDay} instead.
 *
 * @category Holiday
 *
 * @param year - The year for which to obtain Christmas Day.
 * @returns A {@link Date} representing December 25 of the specified year.
 */
export function getChristmas(year: number) {
  return getChristmasDay(year);
}
