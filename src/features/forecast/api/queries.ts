import type { DayForecastResponse } from '../types/forecast.types';

/**
 * Queries for Forecast feature
 */

/**
 * Fetch the forecast for a single local day (all spots).
 * Endpoint: GET /api/forecast/day?date=YYYY-MM-DD
 * @param dateLocal - Local date in "YYYY-MM-DD" format
 * @returns Promise resolving to DayForecastResponse
 */
export async function fetchDayForecast(
    dateLocal: string
): Promise<DayForecastResponse> {
    // TODO: implement with fetch/axios
    throw new Error('Not implemented yet' + dateLocal);
}