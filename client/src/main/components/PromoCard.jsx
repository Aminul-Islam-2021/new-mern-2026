export default function PromoCard({ promo }) {
    return (
        <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-65">
            <div>
                <h3 className="text-lg font-semibold">{promo.title}</h3>
                {promo.subtitle && (
                    <p className="text-sm text-gray-500">{promo.subtitle}</p>
                )}
            </div>

            {promo.timer && (
                <div className="flex gap-2 mt-4">
                    {promo.timer.map((t, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 text-white text-xs px-3 py-2 rounded"
                        >
                            {t}
                        </div>
                    ))}
                </div>
            )}

            {promo.button && (
                <button className="mt-6 w-fit bg-white px-4 py-2 rounded shadow text-sm">
                    {promo.button}
                </button>
            )}
        </div>
    );
}
