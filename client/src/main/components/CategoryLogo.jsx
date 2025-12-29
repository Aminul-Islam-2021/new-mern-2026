import React from "react";

const CategoryLogo = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {[
          "Clothing",
          "Shoes",
          "Accessories",
          "Watches",
          "Bags",
          "Beauty",
          "Electronics",
          "Home",
        ].map((cat) => (
          <button
            key={cat}
            className="bg-gray-100 rounded-lg p-4 text-center hover:bg-red-50 transition"
          >
            <div className="w-12 h-12 mx-auto mb-2 bg-red-200 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">{cat[0]}</span>
            </div>
            <p className="text-sm font-medium text-gray-700">{cat}</p>
          </button>
        ))}
      </section>
    </>
  );
};

export default CategoryLogo;
