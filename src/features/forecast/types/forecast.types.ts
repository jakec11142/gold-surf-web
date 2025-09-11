/**
 * Endpoint: GET /api/forecast/day?date=YYYY-MM-DD
 */

/**
 * Score level enum to display
 */
export type ScoreLabel = | 'Poor' | 'Average' | 'Good' | 'Very Good' | 'Excellent';

/**
 * Wind flow classification relative to the break orientation.
 * Based off enum
 */
export type WindDirectionType = 'Offshore' | 'Cross' | 'Onshore';

/**
 * Compass direction label provided by the backend (S, SE, ESE).
 */
export type CompassDir = string;

/**
 * One hourly forecast observation for a single spot.
 * All fields and units should match the backend response exactly.
 */
export interface ForecastHour {
    hourUtc: string;
    hourLocal: string;
    windSpeedKt: number;
    score: number;
    scoreLabel: ScoreLabel;
    windCompassDirection: CompassDir;
    windDirection: WindDirectionType;
    waveHeightText: string;
}

/**
 * All hourly forecasts for a single spot on the requested local day.
 */
export interface SpotDayForecast {
    spotId: string;
    spotName: string;
    hourlyForecasts: ForecastHour[];
}

/**
 * Response returned by /api/forecast/day.
 */
export interface DayForecastResponse {
    dayLocal: string;
    generatedAtUtc: string;
    spotForecasts: SpotDayForecast[];
}
