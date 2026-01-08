import React, { useState } from 'react';
import { Heart, Grid, List, ChevronDown, ChevronUp, Search, Menu, X } from 'lucide-react';

const Products = () => {
  const [selectedBrands, setSelectedBrands] = useState(['Nike']);
  const [priceRange, setPriceRange] = useState([29, 300000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Popular');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    price: true,
    size: true,
    color: true
  });

  const brands = [
    { name: 'Nike', count: 123 },
    { name: 'Adidas', count: 55 },
    { name: 'Apple', count: 65 },
    { name: 'New Balance', count: 99 },
    { name: 'Puma', count: 325 },
    { name: 'Uniqlo', count: 61 }
  ];

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Yellow', class: 'bg-yellow-400' },
    { name: 'Green', class: 'bg-green-400' },
    { name: 'Blue', class: 'bg-blue-400' },
    { name: 'Purple', class: 'bg-purple-500' },
    { name: 'Cyan', class: 'bg-cyan-400' },
    { name: 'Orange', class: 'bg-orange-400' }
  ];

  const products = [
    { id: 1, brand: 'Uniqlo', name: 'Shirt Soft Cotton', price: 40.00, stock: 12, isNew: true },
    { id: 2, brand: 'Uniqlo', name: 'Zip Up Neck Shirt', price: 40.00, stock: 12, isNew: true },
    { id: 3, brand: 'Uniqlo', name: 'Classic Long Sleeve', price: 40.00, stock: 12, isNew: true },
    { id: 4, brand: 'Uniqlo', name: 'Shirt Soft Cotton', price: 40.00, stock: 12, isNew: true },
    { id: 5, brand: 'Uniqlo', name: 'Shirt Soft Cotton', price: 40.00, stock: 12, isNew: true },
    { id: 6, brand: 'Uniqlo', name: 'Shirt Soft Cotton', price: 40.00, stock: 12, isNew: true }
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-cyan-500 hover:underline cursor-pointer">Home</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-700">Clothes</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">64 result for clothes</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200"
          >
            <Menu className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className={`
            fixed lg:static inset-0 z-40 lg:z-0
            ${showFilters ? 'block' : 'hidden lg:block'}
            lg:w-62 lg:shrink-0
          `}>
            <div className="h-full lg:h-auto bg-black bg-opacity-50 lg:bg-transparent">
              <div className="w-64 h-full bg-white lg:rounded-lg p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filter</h2>
                  <div className="flex items-center gap-2">
                    <button className="text-cyan-500 text-sm hover:underline">Advanced</button>
                    <button onClick={() => setShowFilters(false)} className="lg:hidden">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6 border-b pb-6">
                  <button
                    onClick={() => toggleSection('brand')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold text-base">Brand</h3>
                    {expandedSections.brand ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSections.brand && (
                    <>
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search brand..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="space-y-3">
                        {brands.map(brand => (
                          <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand.name)}
                                onChange={() => toggleBrand(brand.name)}
                                className="w-4 h-4 text-cyan-500 rounded focus:ring-2 focus:ring-cyan-500"
                              />
                              <span className="text-sm group-hover:text-cyan-500">{brand.name}</span>
                              <span className="text-gray-400 text-sm">{brand.count}</span>
                            </div>
                            {selectedBrands.includes(brand.name) && (
                              <span className="text-cyan-500 text-sm">✓</span>
                            )}
                          </label>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Price Filter */}
                <div className="mb-6 border-b pb-6">
                  <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold text-base">Price</h3>
                    {expandedSections.price ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSections.price && (
                    <div>
                      <div className="relative mb-4">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-cyan-500 rounded-full"
                            style={{ width: `${(priceRange[1] / 300000) * 100}%` }}
                          ></div>
                        </div>
                        <input
                          type="range"
                          min="29"
                          max="300000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="absolute inset-0 w-full opacity-0 cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={priceRange[0]}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center"
                          />
                        </div>
                        <span className="text-gray-400">—</span>
                        <div className="flex-1">
                          <input
                            type="text"
                            value={priceRange[1].toLocaleString()}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Size Filter */}
                <div className="mb-6 border-b pb-6">
                  <button
                    onClick={() => toggleSection('size')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold text-base">Size</h3>
                    {expandedSections.size ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSections.size && (
                    <div className="flex flex-wrap gap-2">
                      {sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${selectedSizes.includes(size)
                              ? 'bg-cyan-500 text-white border-cyan-500'
                              : 'bg-white border-gray-300 hover:border-cyan-500'
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Color Filter */}
                <div>
                  <button
                    onClick={() => toggleSection('color')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold text-base">Color</h3>
                    {expandedSections.color ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSections.color && (
                    <div className="flex flex-wrap gap-3">
                      {colors.map(color => (
                        <button
                          key={color.name}
                          onClick={() => toggleColor(color.name)}
                          className={`w-10 h-10 rounded-full ${color.class} border-4 transition-all ${selectedColors.includes(color.name)
                              ? 'border-gray-800 scale-110'
                              : 'border-gray-200 hover:border-gray-400'
                            }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {/* View Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg border-2 transition-all ${viewMode === 'list'
                      ? 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg border-2 transition-all ${viewMode === 'grid'
                      ? 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                >
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-2'
              }`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative bg-gray-100 pt-[100%]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-lg ${index % 3 === 0 ? 'bg-amber-100' : 'bg-gray-200'
                        }`}></div>
                    </div>
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        New Arrival
                      </span>
                    )}
                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-base mb-3 text-gray-900">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">SAR {product.price.toFixed(2)}</span>
                      <span className="text-sm text-red-500 font-medium">{product.stock} items left!</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;