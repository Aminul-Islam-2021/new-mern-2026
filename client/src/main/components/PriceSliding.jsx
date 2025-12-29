import React, { useState } from 'react';

const PriceFilter = () => {
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(500);

    return (
        <div>
            <h4 className="font-medium mb-2">Price</h4>
            <div className="flex justify-between mb-2">
                <span>${minPrice}</span>
                <span>${maxPrice}</span>
            </div>

            <div className="relative h-8">
                {/* Track line */}
                <div className="absolute top-3 left-0 right-0 h-1 bg-gray-300"></div>

                {/* Active range line */}
                <div
                    className="absolute top-3 h-1 bg-blue-500"
                    style={{
                        left: `${(minPrice / 1000) * 100}%`,
                        width: `${((maxPrice - minPrice) / 1000) * 100}%`
                    }}
                ></div>

                {/* Min circle */}
                <div
                    className="absolute top-0 w-6 h-6 bg-white border-2 border-blue-500 rounded-full cursor-pointer"
                    style={{ left: `${(minPrice / 1000) * 100}%`, transform: 'translateX(-50%)' }}
                ></div>

                {/* Max circle */}
                <div
                    className="absolute top-0 w-6 h-6 bg-white border-2 border-blue-500 rounded-full cursor-pointer"
                    style={{ left: `${(maxPrice / 1000) * 100}%`, transform: 'translateX(-50%)' }}
                ></div>

                {/* Hidden sliders for actual input */}
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                    className="absolute top-0 w-full opacity-0 h-8 cursor-pointer"
                />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                    className="absolute top-0 w-full opacity-0 h-8 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default PriceFilter;