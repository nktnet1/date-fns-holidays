/**
 * Union of supported holiday identifiers used throughout the library.
 *
 * Each value corresponds to a key in {@link Holidays}.
 */
export type Holiday =
  | "blackFriday"
  | "boxingDay"
  | "christmas"
  | "christmasEve"
  | "columbusDay"
  | "easter"
  | "fathersDay"
  | "goodFriday"
  | "halloween"
  | "independenceDay"
  | "juneteenth"
  | "laborDay"
  | "martinLutherKingJrDay"
  | "memorialDay"
  | "mothersDay"
  | "newYearsDay"
  | "newYearsEve"
  | "presidentsDay"
  | "thanksgiving"
  | "valentinesDay"
  | "veteransDay";

/**
 * Mapping of holiday names to their computed date values.
 *
 * This structure is used for filtered or derived holiday collections where
 * only the date is relevant.
 */
export type HolidayList = Record<string, { date: Date }>;

/**
 * Complete set of holidays returned by {@link getHolidays}.
 *
 * Each entry includes:
 * - `date`: computed holiday date
 * - `bankHoliday`: whether the holiday is observed by banks
 * - `federal`: whether the holiday is a U.S. federal holiday
 */
export type Holidays = {
  [K in Holiday]: {
    date: Date;
    bankHoliday: boolean;
    federal: boolean;
  };
};
