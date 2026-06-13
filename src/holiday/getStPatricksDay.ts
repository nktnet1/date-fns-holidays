/**
 * Returns the date of St. Patrick's Day for the specified year.
 *
 * @category Holiday
 *
 * @remarks
 * St. Patrick's Day is observed annually on March 17.
 *
 * It is not a U.S. federal holiday, but is widely celebrated culturally,
 * particularly in the United States and Ireland.
 *
 * The returned {@link Date} is created in the local time zone.
 *
 * @param year - The year for which to obtain St. Patrick's Day.
 * @returns A {@link Date} representing March 17 of the specified year.
 */
export function getStPatricksDay(year: number) {
  return new Date(year, 2, 17);
}
