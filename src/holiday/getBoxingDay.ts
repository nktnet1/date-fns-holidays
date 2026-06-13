/**
 * Returns the date of Boxing Day for the specified year.
 *
 * @category Holiday
 *
 * @remarks
 * Boxing Day is observed on December 26 in several Commonwealth countries,
 * including the UK, Canada, Australia, and New Zealand.
 *
 * It is not a U.S. federal holiday, but it is a fixed calendar date
 * immediately following Christmas Day.
 *
 * The returned {@link Date} is created in the local time zone.
 *
 * @param year - The year for which to obtain Boxing Day.
 * @returns A {@link Date} representing December 26 of the specified year.
 */
export function getBoxingDay(year: number) {
  return new Date(year, 11, 26);
}
