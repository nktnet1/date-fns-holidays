/**
 * Returns the date of Christmas Eve for the specified year.
 *
 * @category Holiday
 *
 * @remarks
 * Christmas Eve is observed annually on December 24.
 *
 * The returned {@link Date} is created in the local time zone.
 *
 * @param year - The year for which to obtain Christmas Eve.
 * @returns A {@link Date} representing December 24 of the specified year.
 */
export function getChristmasEve(year: number) {
  return new Date(year, 11, 24);
}
