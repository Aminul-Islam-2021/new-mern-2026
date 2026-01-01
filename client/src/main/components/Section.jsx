function Section({ promo }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
            <PromoCard promo={promo} />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>
    );
}
