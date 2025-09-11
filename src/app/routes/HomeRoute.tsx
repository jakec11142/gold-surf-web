
/**
 * Homepage
 */
export default function HomeRoute() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="border-b">
                <div className="mx-auto max-w-6xl px-4 py-4">
                    <h1 className="text-2xl font-semibold">Gold Coast Surf Windows</h1>
                    <p className="text-sm text-gray-600">
                        Ranked 3-hour windows & daily forecast preview
                    </p>
                </div>
            </header>

            {/* Page content */}
            <div className="mx-auto max-w-6xl px-4 py-6 space-y-8">

                {/* Spots Carousel (placeholder) */}
                <section aria-labelledby="carousel-heading" className="space-y-2">
                    <h2 id="carousel-heading" className="text-lg font-medium">
                        Current Best Spots
                    </h2>
                    <div className="rounded-2xl border p-4">
                        {/* Replace with <SpotsCarousel /> later */}
                        <div className="text-sm text-gray-600">
                            Carousel placeholder — will show top spots from /api/forecast/day (or /api/spots)
                        </div>
                    </div>
                </section>

                {/* Details (placeholder controls / summary) */}
                <section aria-labelledby="details-heading" className="space-y-2">
                    <h2 id="details-heading" className="text-lg font-medium">Details</h2>
                    <div className="rounded-2xl border p-4 grid gap-4 md:grid-cols-2">
                        {/* left: selectors (spot + date) */}
                        <div className="space-y-2">
                            {/* Replace with Select components later */}
                            <label className="block text-sm text-gray-700">Selected Spot</label>
                            <div className="rounded-lg border p-3 text-sm text-gray-600">
                                “Burleigh Heads” (placeholder)
                            </div>

                            <label className="block text-sm text-gray-700 mt-4">Selected Day</label>
                            <div className="rounded-lg border p-3 text-sm text-gray-600">
                                Today (placeholder)
                            </div>
                        </div>

                        {/* right: summary badges / quick stats */}
                        <div className="rounded-lg border p-3 text-sm text-gray-600">
                            Quick summary placeholder — e.g., next tide, wind overview, current score
                        </div>
                    </div>
                </section>

                {/* Chart (placeholder) */}
                <section aria-labelledby="chart-heading" className="space-y-2">
                    <h2 id="chart-heading" className="text-lg font-medium">Hourly Forecast</h2>
                    <div className="rounded-2xl border p-6">
                        {/* Replace with <DayForecastChart /> later */}
                        <div className="text-sm text-gray-600">
                            Chart placeholder — will display score/wind/wave across the selected day
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}