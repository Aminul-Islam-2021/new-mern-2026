import React from "react";

const Hero = () => {
    // Sample data
    const categories = [
        { id: 1, name: "Electronics", icon: "1" },
        { id: 2, name: "Fashion", icon: "2" },
        { id: 3, name: "Home & Kitchen", icon: "3" },
        { id: 4, name: "Beauty", icon: "4" },
        { id: 5, name: "Sports", icon: "5" },
        { id: 6, name: "Books", icon: "6" },
        { id: 7, name: "Toys", icon: "7" },
        { id: 8, name: "Groceries", icon: "8" },
        { id: 9, name: "Automotive", icon: "9" },
        { id: 10, name: "Health", icon: "10" },
        { id: 11, name: "Garden", icon: "11" },
        { id: 12, name: "Music", icon: "12" },
    ];

    const promotionalCards = [
        {
            id: 1,
            title: "Summer Sale",
            discount: "50% OFF",
            description: "On selected items",
            bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
        },
        {
            id: 2,
            title: "Free Shipping",
            discount: "$49+",
            description: "Limited time offer",
            bgColor: "bg-gradient-to-br from-blue-600 to-cyan-500",
        },
    ];
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col  lg:flex-row gap-2 lg:gap-2 h-fit lg:h-96 md:py-4 ">
          {/* Left Side - Categories */}
          <div className="lg:w-1/6 h-full hidden lg:block ">
            <div className="bg-gray-100  shadow h-full flex flex-col">
              <h2 className="text-lg text-center font-semibold  text-gray-700">
                Categories
              </h2>
              <div className="flex-1 overflow-y-auto p-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full flex items-center p-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <span className="font-medium text-left flex-1">
                      {category.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle - Main Banner */}
          <div className="lg:w-4/6 h-full hidden lg:block">
            <div className="bg-linear-to-r from-blue-600 to-purple-700 rounded shadow h-full flex items-center p-6 md:p-8">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white text-sm font-semibold mb-4">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Big Summer Sale 2024
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Up to 60% off on all items. Don't miss out on amazing deals!
                </p>
                <button className="px-6 py-3 bg-white text-blue-600 font-bold  hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Promotional Cards */}
          <div className="lg:w-1/6 h-full hidden lg:block">
            <div className="h-full flex flex-col gap-2">
              {promotionalCards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.bgColor} rounded shadow flex-1 flex flex-col justify-center p-6`}
                >
                  <div className="text-white">
                    <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/30 transition-colors">
                      View Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4 mt-16">
          <div className="h-64">
            <div className="bg-linear-to-r from-blue-600 to-purple-700 rounded shadow h-full flex items-center p-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Big Summer Sale
                </h2>
                <p className="text-white/90 mb-4">Up to 60% off on all items</p>
                <button className="px-5 py-2 bg-white text-blue-600 font-bold rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-500 rounded shadow p-4">
              <h3 className="text-white font-bold text-lg">Summer Sale</h3>
              <div className="text-white text-2xl font-bold my-2">50% OFF</div>
              <button className="text-white text-sm">View Offer →</button>
            </div>
            <div className="bg-blue-600 rounded shadow p-4">
              <h3 className="text-white font-bold text-lg">Free Shipping</h3>
              <div className="text-white text-2xl font-bold my-2">$49+</div>
              <button className="text-white text-sm">View Offer →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
