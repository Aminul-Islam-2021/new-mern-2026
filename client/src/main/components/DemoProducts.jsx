import React, { useState } from 'react';
import PriceSlider from './PriceSliding';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight, FiStar, FiFilter } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';

const DemoProducts = () => {
    const [grid, setGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);

    const totalPages = 5;

    const ratings = [
        { value: 5, label: '5 Stars & above' },
        { value: 4, label: '4 Stars & above' },
        { value: 3, label: '3 Stars & above' },
        { value: 2, label: '2 Stars & above' },
    ];

    const storageOptions = [
        { value: '4gb', label: '4GB RAM' },
        { value: '8gb', label: '8GB RAM' },
        { value: '16gb', label: '16GB RAM' },
        { value: '32gb', label: '32GB RAM' },
        { value: '64gb', label: '64GB Storage' },
        { value: '128gb', label: '128GB Storage' },
        { value: '256gb', label: '256GB Storage' },
        { value: '512gb', label: '512GB Storage' },
    ];

    const conditions = [
        { value: 'new', label: 'New' },
        { value: 'refurbished', label: 'Refurbished' },
        { value: 'used', label: 'Used - Like New' },
        { value: 'used-good', label: 'Used - Good' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <nav className="text-sm text-gray-500 mb-2">
                        Home / Electronics / Smartphones
                    </nav>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Smartphones</h1>
                            <p className="text-gray-500 mt-1">64 products found</p>
                        </div>
                        <button
                            onClick={() => setShowMobileFilters(true)}
                            className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            <FiFilter /> Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {showMobileFilters && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="text-gray-500"
                                >
                                    ✕
                                </button>
                            </div>
                            {/* Mobile filter content goes here */}
                            <div className="space-y-6">
                                {/* Add filter sections here */}
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded mt-6">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex gap-6">

                    {/* Filter Sidebar - Thinner */}
                    <aside className="hidden lg:block w-56">
                        <div className="bg-white p-4 rounded-lg shadow-sm sticky top-6">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="font-bold text-lg">Filters</h2>
                                <button className="text-sm text-blue-600 hover:text-blue-700">
                                    Clear all
                                </button>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Price Range</h3>
                                <PriceSlider />
                            </div>

                            {/* Rating Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Rating</h3>
                                <div className="space-y-2">
                                    {ratings.map((rating) => (
                                        <label key={rating.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="rating"
                                                checked={selectedRating === rating.value}
                                                onChange={() => setSelectedRating(rating.value)}
                                                className="text-blue-600"
                                            />
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <FiStar
                                                        key={i}
                                                        className={`w-4 h-4 ${i < rating.value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">{rating.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSizes(prev =>
                                                prev.includes(size)
                                                    ? prev.filter(s => s !== size)
                                                    : [...prev, size]
                                            )}
                                            className={`px-3 py-1.5 text-sm rounded border transition-colors ${selectedSizes.includes(size)
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'border-gray-300 hover:border-blue-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Storage Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Storage</h3>
                                <div className="space-y-2">
                                    {storageOptions.map((storage) => (
                                        <label key={storage.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedStorage.includes(storage.value)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedStorage([...selectedStorage, storage.value]);
                                                    } else {
                                                        setSelectedStorage(selectedStorage.filter(s => s !== storage.value));
                                                    }
                                                }}
                                                className="text-blue-600"
                                            />
                                            <span className="text-sm text-gray-700">{storage.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Condition Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Condition</h3>
                                <div className="space-y-2">
                                    {conditions.map((condition) => (
                                        <label key={condition.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="condition"
                                                checked={selectedCondition === condition.value}
                                                onChange={() => setSelectedCondition(condition.value)}
                                                className="text-blue-600"
                                            />
                                            <span className="text-sm text-gray-700">{condition.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Color</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["#000", "#dc2626", "#16a34a", "#2563eb", "#f59e0b", "#9333ea", "#ec4899"].map((color) => (
                                        <div
                                            key={color}
                                            className="w-7 h-7 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Delivery Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-gray-700">Delivery</h3>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="text-blue-600" />
                                    <span className="text-sm text-gray-700">Free Shipping</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer mt-2">
                                    <input type="checkbox" className="text-blue-600" />
                                    <span className="text-sm text-gray-700">Same Day Delivery</span>
                                </label>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-2.5 rounded font-medium hover:bg-blue-700 transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* Products Section */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setGrid(true)}
                                        className={`p-2 rounded-lg ${grid ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                                    >
                                        <FiGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setGrid(false)}
                                        className={`p-2 rounded-lg ${!grid ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                                    >
                                        <FiList className="w-5 h-5" />
                                    </button>
                                    <span className="text-gray-500 hidden sm:block">
                                        <span className="font-medium text-gray-900">64</span> products
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <select className="flex-1 sm:flex-none border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Sort by: Popular</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrivals</option>
                                        <option>Best Rating</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid - Responsive with hover effects */}
                        {/* Products Grid - Responsive with 2 columns on mobile */}
                        <div className={`${grid
                            ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'
                            : 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1'} gap-3 sm:gap-4`}>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${!grid && 'flex flex-col sm:flex-row'}`}
                                >
                                    {/* Product Image */}
                                    <div className={`relative overflow-hidden ${grid
                                        ? 'h-40 sm:h-48'
                                        : 'h-40 sm:h-48 sm:w-48'}`}>
                                        <div className={`w-full h-full bg-linear-to-br from-gray-100 to-gray-200`}></div>

                                        {/* Product Badges */}
                                        <div className="absolute top-2 left-2 space-y-1">
                                            {i < 3 && (
                                                <span className="bg-green-500 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                                                    New
                                                </span>
                                            )}
                                            {i > 8 && (
                                                <span className="bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                                                    -20%
                                                </span>
                                            )}
                                        </div>

                                        {/* Hover Action Buttons */}
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1">
                                            <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center shadow hover:bg-gray-50">
                                                <AiOutlineHeart className="w-3 h-3 text-gray-600" />
                                            </button>
                                            <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center shadow hover:bg-gray-50">
                                                <AiOutlineEye className="w-3 h-3 text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-1.5 text-xs font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1">
                                            <AiOutlineShoppingCart className="w-3 h-3" />
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* Product Info */}
                                    <div className={`p-3 flex-1 ${!grid && 'sm:flex sm:flex-col sm:justify-between'}`}>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1 truncate">Apple</p>
                                            <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-blue-600 cursor-pointer line-clamp-2">
                                                iPhone 15 Pro Max 256GB
                                            </h4>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-2">
                                                <div className="flex text-yellow-400">
                                                    <FiStar className="w-3 h-3 fill-current" />
                                                    <FiStar className="w-3 h-3 fill-current" />
                                                    <FiStar className="w-3 h-3 fill-current" />
                                                    <FiStar className="w-3 h-3 fill-current" />
                                                    <FiStar className="w-3 h-3 text-gray-300" />
                                                </div>
                                                <span className="text-xs text-gray-500">(2.4k)</span>
                                            </div>

                                            {/* Features - Hidden on mobile in grid view */}
                                            <div className="hidden sm:flex flex-wrap gap-1 mb-2">
                                                <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">256GB</span>
                                                <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">6.7"</span>
                                                <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">5G</span>
                                            </div>
                                        </div>

                                        {/* Price & Stock */}
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-base font-bold text-gray-900">$1,199</span>
                                                    {i > 8 && (
                                                        <span className="text-xs text-gray-400 line-through">$1,499</span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-green-600 font-medium">In Stock</span>
                                            </div>

                                            <button className="text-gray-400 hover:text-red-500">
                                                <AiOutlineHeart className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination - Same as before */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-gray-600">
                                Showing <span className="font-medium">1-12</span> of <span className="font-medium">64</span> products
                            </p>

                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 border rounded disabled:opacity-50 hover:bg-gray-50"
                                >
                                    <FiChevronLeft className="w-4 h-4" />
                                </button>

                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 border rounded text-sm ${currentPage === page
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 border rounded disabled:opacity-50 hover:bg-gray-50"
                                >
                                    <FiChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <select className="border rounded px-3 py-1 text-sm">
                                <option>12 per page</option>
                                <option>24 per page</option>
                                <option>48 per page</option>
                            </select>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DemoProducts;















import React, { useState } from 'react';
import PriceSlider from './PriceSliding';
import { FiFilter, FiChevronLeft, FiChevronRight, FiGrid, FiList, FiStar, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';

const Products = () => {
    const [grid, setGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const brands = [
        { name: "Nike", count: 123 },
        { name: "Adidas", count: 55 },
        { name: "Puma", count: 325 },
        { name: "Uniqlo", count: 61 },
        { name: "Zara", count: 89 },
        { name: "H&M", count: 147 },
    ];

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const colors = [
        { name: "Black", value: "#000000" },
        { name: "White", value: "#ffffff", border: true },
        { name: "Red", value: "#ef4444" },
        { name: "Blue", value: "#3b82f6" },
        { name: "Green", value: "#10b981" },
        { name: "Yellow", value: "#f59e0b" },
        { name: "Purple", value: "#8b5cf6" },
        { name: "Pink", value: "#ec4899" },
    ];

    const products = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        name: "Premium Cotton T-Shirt",
        brand: ["Nike", "Adidas", "Puma", "Uniqlo"][i % 4],
        price: 39.99 + (i * 5),
        originalPrice: 59.99 + (i * 5),
        rating: 4 + (i % 2 ? 0.5 : 0),
        reviews: 124 + (i * 12),
        isNew: i < 4,
        isSale: i > 8,
        discount: i > 8 ? 20 : 0,
        stock: i % 3 === 0 ? "Low Stock" : "In Stock",
        colors: 3 + (i % 4),
    }));

    const totalPages = 5;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            {/* Header with Breadcrumb */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <span>Home</span>
                        <FiChevronRight className="w-4 h-4" />
                        <span>Clothing</span>
                        <FiChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Men's T-Shirts</span>
                    </nav>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Men's Clothing</h1>
                            <p className="text-gray-500 mt-2">Showing 1-12 of 64 products</p>
                        </div>

                        <button className="lg:hidden inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                            <FiFilter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filter Sidebar */}
                    <aside className="lg:w-80 space-y-6">
                        {/* Filter Header */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <FiFilter className="w-5 h-5" />
                                    Filters
                                </h2>
                                <button className="text-sm text-teal-600 font-medium hover:text-teal-700">
                                    Clear all
                                </button>
                            </div>

                            {/* Brand Filter */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900">Brand</h3>
                                <div className="space-y-3">
                                    {brands.map((brand) => (
                                        <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                                                />
                                                <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                                                    {brand.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {brand.count}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                                <PriceSlider />
                            </div>

                            {/* Size Filter */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`px-4 py-2 rounded-lg border transition-all ${selectedSizes.includes(size)
                                                ? 'bg-teal-600 text-white border-teal-600'
                                                : 'bg-white text-gray-700 border-gray-300 hover:border-teal-500'
                                                }`}
                                            onClick={() => setSelectedSizes(prev =>
                                                prev.includes(size)
                                                    ? prev.filter(s => s !== size)
                                                    : [...prev, size]
                                            )}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Color</h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.value}
                                            className={`relative w-10 h-10 rounded-full flex items-center justify-center ${selectedColors.includes(color.value)
                                                ? 'ring-2 ring-teal-500 ring-offset-2'
                                                : ''
                                                } ${color.border ? 'border border-gray-300' : ''}`}
                                            style={{ backgroundColor: color.value }}
                                            onClick={() => setSelectedColors(prev =>
                                                prev.includes(color.value)
                                                    ? prev.filter(c => c !== color.value)
                                                    : [...prev, color.value]
                                            )}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
                                <div className="space-y-3">
                                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                                        <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 text-teal-600" />
                                            <div className="flex items-center gap-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <FiStar
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(rating)
                                                            ? 'text-yellow-400 fill-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="text-sm text-gray-600 ml-2">& above</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Promo Banner */}
                        <div className="bg-linear-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
                            <h3 className="font-bold text-lg mb-2">Summer Sale!</h3>
                            <p className="text-sm opacity-90 mb-4">Up to 50% off on selected items</p>
                            <button className="w-full bg-white text-teal-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                Shop Now
                            </button>
                        </div>
                    </aside>

                    {/* Products Section */}
                    <main className="flex-1">
                        {/* Products Header */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex border rounded-lg p-1">
                                        <button
                                            onClick={() => setGrid(true)}
                                            className={`p-2 rounded ${grid ? 'bg-teal-100 text-teal-600' : 'text-gray-500'}`}
                                        >
                                            <FiGrid className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setGrid(false)}
                                            className={`p-2 rounded ${!grid ? 'bg-teal-100 text-teal-600' : 'text-gray-500'}`}
                                        >
                                            <FiList className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-500 hidden sm:block">
                                        <span className="font-medium text-gray-900">64</span> products found
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <select className="border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500">
                                        <option>Sort by: Popular</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrivals</option>
                                        <option>Customer Rating</option>
                                    </select>

                                    <div className="hidden sm:block text-gray-500">
                                        <span className="font-medium text-gray-900">12</span> per page
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className={`${grid ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-6`}>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${!grid && 'flex'
                                        }`}
                                >
                                    {/* Product Image */}
                                    <div className="relative group">
                                        <div className={`${grid ? 'h-64' : 'h-48 w-48'} bg-linear-to-br from-gray-100 to-gray-200 relative overflow-hidden`}>
                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 z-10 space-y-2">
                                                {product.isNew && (
                                                    <span className="bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                        New
                                                    </span>
                                                )}
                                                {product.isSale && (
                                                    <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                        -{product.discount}%
                                                    </span>
                                                )}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                                <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                                    <AiOutlineHeart className="w-5 h-5 text-gray-600" />
                                                </button>
                                                <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                                    <AiOutlineEye className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>

                                            {/* Add to Cart Button */}
                                            <button className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white py-3 font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
                                                <FiShoppingCart className="w-5 h-5" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className={`p-5 ${!grid && 'flex-1'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-sm text-gray-500">{product.brand}</p>
                                                <h3 className="font-semibold text-gray-900 hover:text-teal-600 cursor-pointer">
                                                    {product.name}
                                                </h3>
                                            </div>
                                            <button className="text-gray-400 hover:text-red-500">
                                                <AiOutlineHeart className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <FiStar
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                            ? 'text-yellow-400 fill-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">({product.reviews})</span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl font-bold text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </span>
                                            {product.isSale && (
                                                <span className="text-lg text-gray-400 line-through">
                                                    ${product.originalPrice.toFixed(2)}
                                                </span>
                                            )}
                                        </div>

                                        {/* Stock & Colors */}
                                        <div className="flex items-center justify-between">
                                            <span className={`text-sm font-medium ${product.stock === 'Low Stock'
                                                ? 'text-amber-600'
                                                : 'text-teal-600'
                                                }`}>
                                                {product.stock}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                {[...Array(product.colors)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-3 h-3 rounded-full border"
                                                        style={{
                                                            backgroundColor: colors[i % colors.length].value,
                                                        }}
                                                    />
                                                ))}
                                                <span className="text-xs text-gray-500 ml-1">
                                                    +{product.colors}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <p className="text-gray-500">
                                Showing <span className="font-medium text-gray-900">1-12</span> of{" "}
                                <span className="font-medium text-gray-900">64</span> products
                            </p>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    <FiChevronLeft className="w-5 h-5" />
                                </button>

                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                                            ? 'bg-teal-600 text-white'
                                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                                    ...
                                </button>

                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    <FiChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <select className="border-gray-300 rounded-lg px-4 py-2">
                                <option>12 per page</option>
                                <option>24 per page</option>
                                <option>48 per page</option>
                            </select>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};















import React, { useState } from 'react';
import PriceSlider from './PriceSliding';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Productis = () => {
    const [grid, setGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <nav className="text-sm text-gray-500 mb-2">
                        Home / Clothing / Men
                    </nav>
                    <h1 className="text-2xl font-bold text-gray-900">Men's Clothing</h1>
                    <p className="text-gray-500 mt-1">64 products found</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex gap-6">

                    {/* Filter Sidebar - Hidden on mobile */}
                    <aside className="hidden lg:block w-64">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold">Filters</h2>
                                <button className="text-sm text-blue-600">Clear all</button>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-5">
                                <h3 className="font-medium mb-2">Brand</h3>
                                <input
                                    className="w-full border rounded px-2 py-1 text-sm mb-3"
                                    placeholder="Search brand..."
                                />
                                {["Nike", "Adidas", "Puma", "Uniqlo", "Zara", "H&M"].map((brand) => (
                                    <label key={brand} className="flex justify-between text-sm py-1">
                                        <span><input type="checkbox" className="mr-2" /> {brand}</span>
                                        <span className="text-gray-400">123</span>
                                    </label>
                                ))}
                            </div>

                            {/* Price Filter */}
                            <div className="mb-5">
                                <h3 className="font-medium mb-3">Price Range</h3>
                                <PriceSlider />
                            </div>

                            {/* Size Filter */}
                            <div className="mb-5">
                                <h3 className="font-medium mb-2">Size</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                        <button
                                            key={size}
                                            className="border rounded py-1 text-sm hover:border-blue-500"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div className="mb-5">
                                <h3 className="font-medium mb-2">Color</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {["#000", "#f00", "#0f0", "#00f", "#ff0", "#f0f"].map((color) => (
                                        <div
                                            key={color}
                                            className="w-6 h-6 rounded-full border cursor-pointer"
                                            style={{ background: color }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* Products Section */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setGrid(true)}
                                        className={`p-2 rounded ${grid ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                                    >
                                        <FiGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setGrid(false)}
                                        className={`p-2 rounded ${!grid ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                                    >
                                        <FiList className="w-5 h-5" />
                                    </button>
                                </div>

                                <select className="border rounded px-3 py-1 text-sm">
                                    <option>Sort by: Popular</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid - 4 cards per row on large screens */}
                        <div className={`${grid ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-4`}>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${!grid && 'flex'}`}
                                >
                                    {/* Product Image */}
                                    <div className={`${grid ? 'h-48' : 'w-40'} bg-gray-200 rounded-t-lg relative`}>
                                        {i < 3 && (
                                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                New
                                            </span>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className={`p-3 ${!grid && 'flex-1'}`}>
                                        <p className="text-sm text-gray-500">Brand Name</p>
                                        <h4 className="font-medium text-gray-900">Product Title Here</h4>
                                        <div className="flex items-center gap-2 my-2">
                                            <span className="text-blue-600 font-bold">$39.99</span>
                                            <span className="text-gray-400 text-sm line-through">$59.99</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-yellow-400">★★★★☆</div>
                                            <span className="text-xs text-gray-500">(124)</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-gray-600">
                                Showing <span className="font-medium">1-12</span> of <span className="font-medium">64</span> products
                            </p>

                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 border rounded disabled:opacity-50 hover:bg-gray-50"
                                >
                                    <FiChevronLeft className="w-4 h-4" />
                                </button>

                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 border rounded text-sm ${currentPage === page
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 border rounded disabled:opacity-50 hover:bg-gray-50"
                                >
                                    <FiChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <select className="border rounded px-3 py-1 text-sm">
                                <option>12 per page</option>
                                <option>24 per page</option>
                                <option>48 per page</option>
                            </select>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};


