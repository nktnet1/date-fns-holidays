import { getChristmas } from "../holiday/getChristmas";
import { getColumbusDay } from "../holiday/getColumbusDay";
import { getEaster } from "../holiday/getEaster";
import { getFathersDay } from "../holiday/getFathersDay";
import { getGoodFriday } from "../holiday/getGoodFriday";
import { getHalloween } from "../holiday/getHalloween";
import { getIndependenceDay } from "../holiday/getIndependenceDay";
import { getJuneteenth } from "../holiday/getJuneteenth";
import { getLaborDay } from "../holiday/getLaborDay";
import { getMartinLutherKingJrDay } from "../holiday/getMartinLutherKingJrDay";
import { getMemorialDay } from "../holiday/getMemorialDay";
import { getMothersDay } from "../holiday/getMothersDay";
import { getNewYearsDay } from "../holiday/getNewYearsDay";
import { getNewYearsEve } from "../holiday/getNewYearsEve";
import { getPresidentsDay } from "../holiday/getPresidentsDay";
import { getThanksgiving } from "../holiday/getThanksgiving";
import { getValentinesDay } from "../holiday/getValentinesDay";
import { getVeteransDay } from "../holiday/getVeteransDay";
import type { Holidays } from "../types";

/**
 * Returns the complete set of supported holidays for the specified year.
 *
 * @category Holidays
 *
 * @remarks
 * Each holiday entry contains its calculated date together with metadata
 * indicating whether it is recognized as a federal holiday and/or a bank
 * holiday.
 *
 * Holiday observance classifications may vary by jurisdiction and may change
 * over time. The values returned by this function reflect the rules implemented
 * by this library.
 *
 * @param year - The year for which to generate holiday information.
 * @returns An object containing all supported holidays and their metadata.
 */
export function getHolidays(year: number): Holidays {
  return {
    newYearsDay: {
      date: getNewYearsDay(year),
      bankHoliday: true,
      federal: true,
    },
    martinLutherKingJrDay: {
      date: getMartinLutherKingJrDay(year),
      bankHoliday: true,
      federal: true,
    },
    valentinesDay: {
      date: getValentinesDay(year),
      bankHoliday: false,
      federal: false,
    },
    juneteenth: {
      date: getJuneteenth(year),
      bankHoliday: !(year < 2022),
      federal: true,
    },
    easter: {
      date: getEaster(year),
      bankHoliday: false,
      federal: false,
    },
    presidentsDay: {
      date: getPresidentsDay(year),
      bankHoliday: true,
      federal: false,
    },
    memorialDay: {
      date: getMemorialDay(year),
      bankHoliday: true,
      federal: true,
    },
    independenceDay: {
      date: getIndependenceDay(year),
      bankHoliday: true,
      federal: true,
    },
    laborDay: {
      date: getLaborDay(year),
      bankHoliday: true,
      federal: true,
    },
    goodFriday: {
      date: getGoodFriday(year),
      bankHoliday: false,
      federal: false,
    },
    mothersDay: {
      date: getMothersDay(year),
      bankHoliday: false,
      federal: false,
    },
    columbusDay: {
      date: getColumbusDay(year),
      bankHoliday: true,
      federal: true,
    },
    halloween: {
      date: getHalloween(year),
      bankHoliday: false,
      federal: false,
    },
    fathersDay: {
      date: getFathersDay(year),
      bankHoliday: false,
      federal: false,
    },
    veteransDay: {
      date: getVeteransDay(year),
      bankHoliday: true,
      federal: true,
    },
    thanksgiving: {
      date: getThanksgiving(year),
      bankHoliday: true,
      federal: true,
    },
    christmas: {
      date: getChristmas(year),
      bankHoliday: true,
      federal: true,
    },
    newYearsEve: {
      date: getNewYearsEve(year),
      bankHoliday: false,
      federal: false,
    },
  };
}
