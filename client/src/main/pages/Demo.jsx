// // App.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//     ShoppingCart,
//     Search,
//     User,
//     Heart,
//     Menu,
//     ChevronDown,
//     Shield,
//     Truck,
//     RefreshCw,
//     Star,
//     ChevronRight,
//     Sparkles,
//     TrendingUp,
//     Clock,
//     Tag,
//     Globe,
//     Package,
//     Headphones,
//     Facebook,
//     Twitter,
//     Instagram,
//     Youtube,
//     CreditCard,
//     Lock,
//     Filter,
//     Grid,
//     List,
//     Zap,
//     Award,
//     TrendingDown,
//     Percent,
//     ShoppingBag,
//     Smartphone,
//     Shirt,
//     Home,
//     Dumbbell,
//     Gift,
//     ArrowRight,
//     X,
//     Eye,
//     Share2,
//     Bell,
//     AlertCircle
// } from 'lucide-react';

// // Mock Data






// // Header Component
// const Header = () => {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [hoveredCategory, setHoveredCategory] = useState(null);
    // const [searchQuery, setSearchQuery] = useState('');
    // const [showSearchResults, setShowSearchResults] = useState(false);
    // const [cartItems, setCartItems] = useState(5);
    // const [wishlistItems, setWishlistItems] = useState(3);
    // const [notifications, setNotifications] = useState(7);
    // const searchRef = useRef(null);

    // const filteredProducts = allProducts.filter(product =>
    //     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     product.category.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (searchRef.current && !searchRef.current.contains(event.target)) {
    //             setShowSearchResults(false);
    //         }
    //     };
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => document.removeEventListener('mousedown', handleClickOutside);
    // }, []);

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-lg">
//             {/* Top Announcement Bar */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4">
//                 <div className="container mx-auto flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                         <Truck className="w-4 h-4" />
//                         <span>Free shipping on orders over $50</span>
//                     </div>
//                     <div className="hidden md:flex items-center space-x-4">
//                         <span>Download our app</span>
//                         <span>|</span>
//                         <span>Need help? Call 1-800-SHOPHUB</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center space-x-3">
//                         <button
//                             className="lg:hidden"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                             <Menu className="w-6 h-6" />
//                         </button>
//                         <div className="flex items-center space-x-2">
//                             <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
//                                 <ShoppingCart className="w-6 h-6 text-white" />
//                             </div>
//                             <span className="text-2xl font-bold text-gray-900">Shop<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hub</span></span>
//                         </div>
//                     </div>

//                     {/* Search Bar - Always Visible */}
//                     <div ref={searchRef} className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
//                         <div className="relative w-full">
//                             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                             <input
//                                 type="text"
//                                 value={searchQuery}
//                                 onChange={(e) => {
//                                     setSearchQuery(e.target.value);
//                                     setShowSearchResults(true);
//                                 }}
//                                 onFocus={() => setShowSearchResults(true)}
//                                 placeholder="Search for products, brands, and categories..."
//                                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//                             />
//                             {searchQuery && (
//                                 <button
//                                     onClick={() => setSearchQuery('')}
//                                     className="absolute right-4 top-1/2 transform -translate-y-1/2"
//                                 >
//                                     <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
//                                 </button>
//                             )}

//                             {/* Search Results Dropdown */}
//                             {showSearchResults && searchQuery && (
//                                 <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto">
//                                     <div className="p-4 border-b border-gray-100">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="font-semibold text-gray-900">Search Results</h3>
//                                             <span className="text-sm text-gray-500">{filteredProducts.length} found</span>
//                                         </div>
//                                     </div>
//                                     <div className="p-2">
//                                         {filteredProducts.length > 0 ? (
//                                             filteredProducts.map(product => (
//                                                 <div
//                                                     key={product.id}
//                                                     className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
//                                                     onClick={() => {
//                                                         setSearchQuery(product.name);
//                                                         setShowSearchResults(false);
//                                                     }}
//                                                 >
//                                                     <div className="w-12 h-12 rounded-lg bg-gray-100 mr-3 flex items-center justify-center">
//                                                         <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
//                                                     </div>
//                                                     <div className="flex-1">
//                                                         <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
//                                                         <div className="flex items-center space-x-2 mt-1">
//                                                             <span className="text-sm font-semibold text-blue-600">${product.price}</span>
//                                                             {product.originalPrice && (
//                                                                 <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
//                                                             )}
//                                                             <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.category}</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         ) : (
//                                             <div className="p-4 text-center text-gray-500">
//                                                 <AlertCircle className="w-8 h-8 mx-auto mb-2" />
//                                                 <p>No products found</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="p-4 border-t border-gray-100">
//                                         <button className="w-full py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors">
//                                             View all results
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                         <button className="ml-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
//                             <Search className="w-5 h-5" />
//                         </button>
//                     </div>

//                     {/* User Actions */}
//                     <div className="flex items-center space-x-4">
//                         <button className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
//                             <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
//                                 <User className="w-5 h-5" />
//                             </div>
//                             <div className="text-left">
//                                 <div className="text-sm font-medium">Account</div>
//                                 <div className="text-xs text-gray-500">Sign In / Register</div>
//                             </div>
//                         </button>

//                         <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                             <Bell className="w-6 h-6 text-gray-700" />
//                             {notifications > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
//                                     {notifications}
//                                 </span>
//                             )}
//                         </button>

//                         <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                             <Heart className="w-6 h-6 text-gray-700" />
//                             {wishlistItems > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                                     {wishlistItems}
//                                 </span>
//                             )}
//                         </button>

//                         <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                             <ShoppingCart className="w-6 h-6 text-gray-700" />
//                             {cartItems > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                                     {cartItems}
//                                 </span>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Search Bar */}
//                 <div className="lg:hidden mt-4">
//                     <div className="relative">
//                         <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <input
//                             type="text"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             placeholder="Search products..."
//                             className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                         {searchQuery && (
//                             <button
//                                 onClick={() => setSearchQuery('')}
//                                 className="absolute right-4 top-1/2 transform -translate-y-1/2"
//                             >
//                                 <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* Desktop Categories */}
//                 <div className="hidden lg:flex items-center justify-between mt-4">
//                     <div className="flex items-center space-x-8">
//                         <div className="relative group">
//                             <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
//                                 <Menu className="w-5 h-5" />
//                                 <span>All Categories</span>
//                                 <ChevronDown className="w-4 h-4" />
//                             </button>

//                             {/* Mega Menu */}
//                             <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                                 <div className="grid grid-cols-2 p-6 gap-6">
//                                     {categories.map(category => (
//                                         <div key={category.id} className="group/cat">
//                                             <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
//                                                 <div className={`p-2 rounded-lg ${category.bgColor}`}>
//                                                     <div className={category.color}>
//                                                         {category.icon}
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <h4 className="font-semibold text-gray-900">{category.name}</h4>
//                                                     <p className="text-sm text-gray-500">{subCategories[category.id].length} subcategories</p>
//                                                 </div>
//                                                 <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
//                                             </div>

//                                             {/* Subcategories */}
//                                             <div className="absolute left-full top-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 p-4 opacity-0 invisible group-hover/cat:opacity-100 group-hover/cat:visible transition-all duration-200">
//                                                 <h5 className="font-semibold text-gray-900 mb-3">Subcategories</h5>
//                                                 <div className="space-y-2">
//                                                     {subCategories[category.id].map((subcat, idx) => (
//                                                         <a
//                                                             key={idx}
//                                                             href="#"
//                                                             className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
//                                                         >
//                                                             <span className="text-gray-700">{subcat}</span>
//                                                             <ChevronRight className="w-3 h-3 text-gray-400" />
//                                                         </a>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="bg-gray-50 p-6 rounded-b-xl">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <h4 className="font-semibold text-gray-900">Need help?</h4>
//                                             <p className="text-sm text-gray-500">Our experts are here to assist you</p>
//                                         </div>
//                                         <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
//                                             Contact Support
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {categories.slice(0, 6).map(category => (
//                             <div
//                                 key={category.id}
//                                 className="relative"
//                                 onMouseEnter={() => setHoveredCategory(category.id)}
//                                 onMouseLeave={() => setHoveredCategory(null)}
//                             >
//                                 <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                                     <span>{category.name}</span>
//                                     <ChevronDown className="w-4 h-4" />
//                                 </button>

//                                 {hoveredCategory === category.id && (
//                                     <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-40">
//                                         <h5 className="font-semibold text-gray-900 mb-3">Popular in {category.name}</h5>
//                                         <div className="space-y-3">
//                                             {subCategories[category.id].slice(0, 6).map((subcat, idx) => (
//                                                 <a
//                                                     key={idx}
//                                                     href="#"
//                                                     className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
//                                                 >
//                                                     <div className="flex items-center space-x-3">
//                                                         <div className={`p-2 rounded-lg ${category.bgColor}`}>
//                                                             <div className={category.color}>
//                                                                 {category.icon}
//                                                             </div>
//                                                         </div>
//                                                         <span className="text-gray-700">{subcat}</span>
//                                                     </div>
//                                                     <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">42</span>
//                                                 </a>
//                                             ))}
//                                         </div>
//                                         <div className="mt-4 pt-4 border-t border-gray-200">
//                                             <a href="#" className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700">
//                                                 View all categories
//                                                 <ChevronRight className="w-4 h-4 ml-1" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}

//                         <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
//                             <div className="flex items-center space-x-2">
//                                 <Tag className="w-4 h-4" />
//                                 <span>Deals</span>
//                             </div>
//                         </a>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                         <span className="text-sm text-gray-500">Hotline:</span>
//                         <a href="tel:1800766748" className="flex items-center space-x-2 text-blue-600 font-semibold">
//                             <Headphones className="w-4 h-4" />
//                             <span>1-800-SHOPHUB</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
//                     <div className="container mx-auto px-4 py-4">
//                         <div className="space-y-2">
//                             {categories.map(category => (
//                                 <div key={category.id} className="border-b border-gray-100 last:border-0">
//                                     <button className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600">
//                                         <div className="flex items-center space-x-3">
//                                             <div className={`p-2 rounded-lg ${category.bgColor}`}>
//                                                 <div className={category.color}>
//                                                     {category.icon}
//                                                 </div>
//                                             </div>
//                                             <span className="font-medium">{category.name}</span>
//                                         </div>
//                                         <ChevronDown className="w-4 h-4" />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// // Hero Section with Banner
// const HeroSection = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % banners.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative overflow-hidden">
//             <div className="container mx-auto px-4 py-6">
//                 <div className="grid lg:grid-cols-3 gap-6">
//                     {/* Category Sidebar */}
//                     <div className="lg:col-span-1">
//                         <div className="bg-white rounded-2xl shadow-lg p-6">
//                             <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
//                                 <Grid className="w-5 h-5 mr-2" />
//                                 Browse Categories
//                             </h3>
//                             <div className="space-y-2">
//                                 {categories.map(category => (
//                                     <div
//                                         key={category.id}
//                                         className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200"
//                                     >
//                                         <div className="flex items-center space-x-3">
//                                             <div className={`p-2 rounded-lg ${category.bgColor}`}>
//                                                 <div className={category.color}>
//                                                     {category.icon}
//                                                 </div>
//                                             </div>
//                                             <span className="font-medium text-gray-900">{category.name}</span>
//                                         </div>
//                                         <div className="flex items-center space-x-2">
//                                             <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                                                 {subCategories[category.id].length}
//                                             </span>
//                                             <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Banner */}
//                     <div className="lg:col-span-2">
//                         <div className="relative h-[400px] rounded-2xl overflow-hidden">
//                             {banners.map((banner, index) => (
//                                 <div
//                                     key={banner.id}
//                                     className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
//                                         }`}
//                                 >
//                                     <div
//                                         className="absolute inset-0 bg-cover bg-center"
//                                         style={{ backgroundImage: `url(${banner.image})` }}
//                                     />
//                                     <div className={`absolute inset-0 ${banner.theme === 'dark'
//                                             ? 'bg-gradient-to-r from-black/70 via-black/50 to-transparent'
//                                             : 'bg-gradient-to-r from-white/80 via-white/60 to-transparent'
//                                         }`} />

//                                     <div className="relative h-full flex items-center p-12">
//                                         <div className={`max-w-lg ${banner.theme === 'dark' ? 'text-white' : 'text-gray-900'
//                                             }`}>
//                                             <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
//                                                 {banner.badge}
//                                             </span>
//                                             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                                                 {banner.title}
//                                             </h1>
//                                             <p className={`text-xl mb-6 ${banner.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
//                                                 }`}>
//                                                 {banner.description}
//                                             </p>
//                                             <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
//                                                 {banner.buttonText}
//                                                 <ArrowRight className="w-4 h-4 inline ml-2" />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}

//                             {/* Banner Navigation */}
//                             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
//                                 {banners.map((_, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setCurrentSlide(idx)}
//                                         className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide
//                                                 ? 'w-8 bg-white'
//                                                 : 'bg-white/50 hover:bg-white/75'
//                                             }`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Product Card Component
// const ProductCard = ({ product, showQuickView = true }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isInWishlist, setIsInWishlist] = useState(false);

//     return (
//         <div
//             className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {/* Product Image */}
//             <div className="relative h-64 overflow-hidden">
//                 <div
//                     className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                     style={{ backgroundImage: `url(${product.image})` }}
//                 />

//                 {/* Badges */}
//                 <div className="absolute top-4 left-4 flex flex-col space-y-2">
//                     {product.discount && (
//                         <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
//                             -{product.discount}%
//                         </span>
//                     )}
//                     {product.tags?.includes('New') && (
//                         <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
//                             NEW
//                         </span>
//                     )}
//                     {product.tags?.includes('Best Seller') && (
//                         <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
//                             BEST SELLER
//                         </span>
//                     )}
//                 </div>

//                 {/* Quick Actions */}
//                 <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-200 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
//                     }`}>
//                     <button
//                         onClick={() => setIsInWishlist(!isInWishlist)}
//                         className={`p-2 rounded-full backdrop-blur-sm transition-colors ${isInWishlist
//                                 ? 'bg-pink-100 text-pink-600'
//                                 : 'bg-white/90 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
//                             }`}
//                     >
//                         <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
//                     </button>
//                     <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
//                         <Eye className="w-4 h-4" />
//                     </button>
//                     <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
//                         <Share2 className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-5">
//                 <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
//                         {product.category}
//                     </span>
//                     <div className="flex items-center space-x-1">
//                         <Star className="w-4 h-4 text-amber-500 fill-current" />
//                         <span className="text-sm font-semibold">{product.rating}</span>
//                         <span className="text-xs text-gray-500">({product.reviews})</span>
//                     </div>
//                 </div>

//                 <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
//                     {product.name}
//                 </h3>

//                 <div className="flex items-center justify-between mb-4">
//                     <div>
//                         <span className="text-2xl font-bold text-gray-900">
//                             ${product.price.toFixed(2)}
//                         </span>
//                         {product.originalPrice && (
//                             <span className="text-sm text-gray-500 line-through ml-2">
//                                 ${product.originalPrice.toFixed(2)}
//                             </span>
//                         )}
//                     </div>
//                     {product.sold && (
//                         <div className="text-xs text-gray-500">
//                             {product.sold}+ sold
//                         </div>
//                     )}
//                 </div>

//                 <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95">
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Section with Banner and Products
// const ProductSection = ({ title, subtitle, products, viewAllLink, badgeIcon, bgColor = "bg-gray-50" }) => {
//     return (
//         <section className={`py-12 ${bgColor}`}>
//             <div className="container mx-auto px-4">
//                 {/* Section Header with Banner */}
//                 <div className="mb-8">
//                     <div className={`rounded-2xl overflow-hidden ${bgColor === 'bg-gray-50' ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'bg-white'}`}>
//                         <div className="p-8">
//                             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//                                 <div className="flex items-center space-x-3 mb-4 md:mb-0">
//                                     {badgeIcon && (
//                                         <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
//                                             {badgeIcon}
//                                         </div>
//                                     )}
//                                     <div>
//                                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
//                                         <p className="text-gray-600 mt-1">{subtitle}</p>
//                                     </div>
//                                 </div>
//                                 <a
//                                     href={viewAllLink}
//                                     className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group"
//                                 >
//                                     <span>View All Products</span>
//                                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                                 </a>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//                                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
//                                     <div className="text-2xl font-bold text-blue-600">4.8</div>
//                                     <div className="text-sm text-gray-600">Average Rating</div>
//                                 </div>
//                                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
//                                     <div className="text-2xl font-bold text-purple-600">24h</div>
//                                     <div className="text-sm text-gray-600">Fast Delivery</div>
//                                 </div>
//                                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
//                                     <div className="text-2xl font-bold text-green-600">98%</div>
//                                     <div className="text-sm text-gray-600">Positive Reviews</div>
//                                 </div>
//                                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
//                                     <div className="text-2xl font-bold text-amber-600">30d</div>
//                                     <div className="text-sm text-gray-600">Return Policy</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {products.map(product => (
//                         <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>

//                 {/* View More Button */}
//                 <div className="text-center mt-8">
//                     <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
//                         Load More Products
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Brand Showcase
// const BrandShowcase = () => {
//     return (
//         <section className="py-12 bg-white">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-8">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Brand</h2>
//                     <p className="text-gray-600">Top brands you can trust</p>
//                 </div>
//                 <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//                     {brands.map(brand => (
//                         <div
//                             key={brand.id}
//                             className="group bg-gray-50 hover:bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
//                         >
//                             <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center mb-4">
//                                 <img
//                                     src={brand.logo}
//                                     alt={brand.name}
//                                     className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>
//                             <h3 className="text-center font-semibold text-gray-900">{brand.name}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Features Section
// const FeaturesSection = () => {
//     const features = [
//         {
//             icon: <Shield className="w-8 h-8" />,
//             title: "Secure Payment",
//             description: "100% secure transactions with encryption",
//             color: "text-green-600",
//             bgColor: "bg-green-50"
//         },
//         {
//             icon: <Truck className="w-8 h-8" />,
//             title: "Free Delivery",
//             description: "Free shipping on orders over $50",
//             color: "text-blue-600",
//             bgColor: "bg-blue-50"
//         },
//         {
//             icon: <RefreshCw className="w-8 h-8" />,
//             title: "Easy Returns",
//             description: "30-day return policy",
//             color: "text-purple-600",
//             bgColor: "bg-purple-50"
//         },
//         {
//             icon: <Award className="w-8 h-8" />,
//             title: "Quality Guarantee",
//             description: "100% authentic products",
//             color: "text-amber-600",
//             bgColor: "bg-amber-50"
//         },
//         {
//             icon: <Headphones className="w-8 h-8" />,
//             title: "24/7 Support",
//             description: "Dedicated customer support",
//             color: "text-pink-600",
//             bgColor: "bg-pink-50"
//         },
//         {
//             icon: <Percent className="w-8 h-8" />,
//             title: "Best Price",
//             description: "Price match guarantee",
//             color: "text-red-600",
//             bgColor: "bg-red-50"
//         }
//     ];

//     return (
//         <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose ShopHub</h2>
//                     <p className="text-gray-600">Experience shopping like never before</p>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {features.map((feature, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                         >
//                             <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}>
//                                 <div className={feature.color}>
//                                     {feature.icon}
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Footer
// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white pt-12 pb-6">
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//                     {/* Company Info */}
//                     <div>
//                         <div className="flex items-center space-x-2 mb-6">
//                             <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
//                                 <ShoppingCart className="w-6 h-6" />
//                             </div>
//                             <span className="text-2xl font-bold">Shop<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hub</span></span>
//                         </div>
//                         <p className="text-gray-400 mb-6">
//                             Your ultimate shopping destination. Quality products, exceptional service, and unbeatable prices.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
//                                 <Facebook className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 bg-gray-800 hover:bg-sky-500 rounded-lg transition-colors">
//                                 <Twitter className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors">
//                                 <Instagram className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors">
//                                 <Youtube className="w-5 h-5" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
//                         <ul className="space-y-3">
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
//                             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//                         </ul>
//                     </div>

//                     {/* Categories */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-6">Top Categories</h3>
//                         <ul className="space-y-3">
//                             {categories.slice(0, 6).map(category => (
//                                 <li key={category.id}>
//                                     <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">
//                                         <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                                         {category.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
//                         <p className="text-gray-400 mb-4">
//                             Subscribe to our newsletter for the latest updates and offers.
//                         </p>
//                         <div className="flex mb-4">
//                             <input
//                                 type="email"
//                                 placeholder="Your email"
//                                 className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
//                             />
//                             <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-r-lg font-semibold transition-opacity">
//                                 <ArrowRight className="w-5 h-5" />
//                             </button>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <CreditCard className="w-8 h-8 text-gray-400" />
//                             <Lock className="w-8 h-8 text-gray-400" />
//                             <Globe className="w-8 h-8 text-gray-400" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="border-t border-gray-800 pt-8">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         <p className="text-gray-400 text-sm">
//                             © 2024 ShopHub. All rights reserved.
//                         </p>
//                         <div className="flex space-x-6 mt-4 md:mt-0">
//                             <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
//                             <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
//                             <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// // Floating Cart Button
// const FloatingCart = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     if (!isVisible) return null;

//     return (
//         <div className="fixed bottom-6 right-6 z-40">
//             <button className="group relative">
//                 <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
//                     <ShoppingCart className="w-6 h-6" />
//                     <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
//                         5
//                     </div>
//                 </div>
//                 <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     View Cart
//                 </div>
//             </button>
//         </div>
//     );
// };

// // Main App Component
// export default function EcommerceHomePage() {
//     const featuredProducts = allProducts.filter(p => p.featured);
//     const latestProducts = allProducts.filter(p => p.isLatest);
//     const popularProducts = allProducts.filter(p => p.isPopular);

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Header />
//             <HeroSection />

//             <ProductSection
//                 title="Featured Products"
//                 subtitle="Handpicked selection of premium products"
//                 products={featuredProducts}
//                 viewAllLink="/featured"
//                 badgeIcon={<Award className="w-6 h-6 text-white" />}
//             />

//             <BrandShowcase />

//             <ProductSection
//                 title="Latest Products"
//                 subtitle="Discover the newest arrivals in our store"
//                 products={latestProducts}
//                 viewAllLink="/latest"
//                 badgeIcon={<Zap className="w-6 h-6 text-white" />}
//                 bgColor="bg-white"
//             />

//             <ProductSection
//                 title="Popular Products"
//                 subtitle="Top selling products loved by our customers"
//                 products={popularProducts}
//                 viewAllLink="/popular"
//                 badgeIcon={<TrendingUp className="w-6 h-6 text-white" />}
//             />

//             <FeaturesSection />
//             <Footer />
//             <FloatingCart />
//         </div>
//     );
// }










import { brands } from "../../productData";

// Brand Showcase
const BrandShowcase = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Shop by Brand
                    </h2>
                    <p className="text-gray-600">Top brands you can trust</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group bg-gray-50 hover:bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        >
                            <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center mb-4">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-center font-semibold text-gray-900">
                                {brand.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;










import { Award, Headphones, Percent, RefreshCw, Shield, Truck } from "lucide-react";

// Features Section
const FeaturesSection = () => {
    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Payment",
            description: "100% secure transactions with encryption",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Free Delivery",
            description: "Free shipping on orders over $50",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: <RefreshCw className="w-8 h-8" />,
            title: "Easy Returns",
            description: "30-day return policy",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality Guarantee",
            description: "100% authentic products",
            color: "text-amber-600",
            bgColor: "bg-amber-50",
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Dedicated customer support",
            color: "text-pink-600",
            bgColor: "bg-pink-50",
        },
        {
            icon: <Percent className="w-8 h-8" />,
            title: "Best Price",
            description: "Price match guarantee",
            color: "text-red-600",
            bgColor: "bg-red-50",
        },
    ];

    return (
        <section className="py-12 bg-linear-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Why Choose ShopHub
                    </h2>
                    <p className="text-gray-600">Experience shopping like never before</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div
                                className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}
                            >
                                <div className={feature.color}>{feature.icon}</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};





import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
// Floating Cart Button
const FloatingCart = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <button className="group relative">
                <div className="p-4 bg-linear-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <FaShoppingCart className="w-6 h-6" />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                        5
                    </div>
                </div>
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    View Cart
                </div>
            </button>
        </div>
    );
};



// import { FaShoppingCart, FaShoppingCart, Grid } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { banners, categories, subCategories } from "../../productData";

// Hero Section with Banner
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-6">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Category Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                                <FaShoppingCart className="w-5 h-5 mr-2" />
                                Browse Categories
                            </h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg ${category.bgColor}`}>
                                                <div className={category.color}>{category.icon}</div>
                                            </div>
                                            <span className="font-medium text-gray-900">
                                                {category.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {subCategories[category.id].length}
                                            </span>
                                            <FaShoppingCart className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Banner */}
                    <div className="lg:col-span-2">
                        <div className="relative h-100 rounded-2xl overflow-hidden">
                            {banners.map((banner, index) => (
                                <div
                                    key={banner.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${banner.image})` }}
                                    />
                                    <div
                                        className={`absolute inset-0 ${banner.theme === "dark"
                                            ? "bg-linear-to-r from-black/70 via-black/50 to-transparent"
                                            : "bg-linear-to-r from-white/80 via-white/60 to-transparent"
                                            }`}
                                    />

                                    <div className="relative h-full flex items-center p-12">
                                        <div
                                            className={`max-w-lg ${banner.theme === "dark" ? "text-white" : "text-gray-900"
                                                }`}
                                        >
                                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                                                {banner.badge}
                                            </span>
                                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                                {banner.title}
                                            </h1>
                                            <p
                                                className={`text-xl mb-6 ${banner.theme === "dark"
                                                    ? "text-gray-200"
                                                    : "text-gray-700"
                                                    }`}
                                            >
                                                {banner.description}
                                            </p>
                                            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                                                {banner.buttonText}
                                                <FaShoppingCart className="w-4 h-4 inline ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Banner Navigation */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                                {banners.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide
                                            ? "w-8 bg-white"
                                            : "bg-white/50 hover:bg-white/75"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


import { Eye, Heart, Share2, Star } from "lucide-react";
import { useState } from "react";

// Product Card Component
const ProductCard = ({ product, showQuickView = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);

    return (
        <div
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.discount && (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
                            -{product.discount}%
                        </span>
                    )}
                    {product.tags?.includes("New") && (
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                            NEW
                        </span>
                    )}
                    {product.tags?.includes("Best Seller") && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            BEST SELLER
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div
                    className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-200 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                >
                    <button
                        onClick={() => setIsInWishlist(!isInWishlist)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${isInWishlist
                            ? "bg-pink-100 text-pink-600"
                            : "bg-white/90 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                            }`}
                    >
                        <Heart
                            className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`}
                        />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                    {product.sold && (
                        <div className="text-xs text-gray-500">{product.sold}+ sold</div>
                    )}
                </div>

                <button className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

// Section with Banner and Products
const ProductSection = ({
    title,
    subtitle,
    products,
    viewAllLink,
    badgeIcon,
    bgColor = "bg-gray-50",
}) => {
    return (
        <section className={`py-12 ${bgColor}`}>
            <div className="container mx-auto px-4">
                {/* Section Header with Banner */}
                <div className="mb-8">
                    <div
                        className={`rounded-2xl overflow-hidden ${bgColor === "bg-gray-50"
                                ? "bg-linear-to-r from-blue-50 to-purple-50"
                                : "bg-white"
                            }`}
                    >
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                                    {badgeIcon && (
                                        <div className="p-3 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl">
                                            {badgeIcon}
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                            {title}
                                        </h2>
                                        <p className="text-gray-600 mt-1">{subtitle}</p>
                                    </div>
                                </div>
                                <a
                                    href={viewAllLink}
                                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group"
                                >
                                    <span>View All Products</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-blue-600">4.8</div>
                                    <div className="text-sm text-gray-600">Average Rating</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-purple-600">24h</div>
                                    <div className="text-sm text-gray-600">Fast Delivery</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-green-600">98%</div>
                                    <div className="text-sm text-gray-600">Positive Reviews</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-amber-600">30d</div>
                                    <div className="text-sm text-gray-600">Return Policy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8">
                    <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                        Load More Products
                    </button>
                </div>
            </div>
        </section>
    );
};




import React from "react";

const Searchbar1 = () => {
    return (
        <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
        </div>
    );
};



 function SidebarFilter() {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-4">Filter</h3>

            <label className="block mb-2">
                <input type="checkbox" /> Mobile
            </label>
            <label className="block mb-2">
                <input type="checkbox" /> Headphone
            </label>
            <label className="block mb-2">
                <input type="checkbox" /> Accessories
            </label>
        </div>
    );
}



import { useEffect, useRef, useState } from "react";
import { allProducts, categories, subCategories } from "../../productData";
// import { FaShoppingCart, FaShoppingCart, FaShoppingCart, FaShoppingCart, FaShoppingCart, FaShoppingCart, FaShoppingCart, Search, ShoppingCart, FaShoppingCart, FaShoppingCart, User } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";



// Header Component
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [cartItems, setCartItems] = useState(5);
    const [wishlistItems, setWishlistItems] = useState(3);
    const [notifications, setNotifications] = useState(7);
    const searchRef = useRef(null);

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            {/* Top Announcement Bar */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <FaShoppingCart className="w-4 h-4" />
                        <span>Free shipping on orders over $50</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <span>Download our app</span>
                        <span>|</span>
                        <span>Need help? Call 1-800-SHOPHUB</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <button
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <FaShoppingCart className="w-6 h-6" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg">
                                <FaShoppingCart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">
                                Shop
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                                    Hub
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Search Bar - Always Visible */}
                    <div
                        ref={searchRef}
                        className="hidden lg:flex flex-1 max-w-2xl mx-8 relative"
                    >
                        <div className="relative w-full">
                            <FaShoppingCart className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowSearchResults(true);
                                }}
                                onFocus={() => setShowSearchResults(true)}
                                placeholder="Search for products, brands, and categories..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                >
                                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                </button>
                            )}

                            {/* Search Results Dropdown */}
                            {showSearchResults && searchQuery && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto">
                                    <div className="p-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-gray-900">
                                                Search Results
                                            </h3>
                                            <span className="text-sm text-gray-500">
                                                {filteredProducts.length} found
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map((product) => (
                                                <div
                                                    key={product.id}
                                                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                                                    onClick={() => {
                                                        setSearchQuery(product.name);
                                                        setShowSearchResults(false);
                                                    }}
                                                >
                                                    <div className="w-12 h-12 rounded-lg bg-gray-100 mr-3 flex items-center justify-center">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-10 h-10 object-cover rounded"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-900 truncate">
                                                            {product.name}
                                                        </h4>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <span className="text-sm font-semibold text-blue-600">
                                                                ${product.price}
                                                            </span>
                                                            {product.originalPrice && (
                                                                <span className="text-sm text-gray-500 line-through">
                                                                    ${product.originalPrice}
                                                                </span>
                                                            )}
                                                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                                {product.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-4 text-center text-gray-500">
                                                <FaShoppingCart className="w-8 h-8 mx-auto mb-2" />
                                                <p>No products found</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 border-t border-gray-100">
                                        <button className="w-full py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors">
                                            View all results
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="ml-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                            <FaShoppingCart className="w-5 h-5" />
                        </button>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
                            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                                <FaShoppingCart className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium">Account</div>
                                <div className="text-xs text-gray-500">Sign In / Register</div>
                            </div>
                        </button>

                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <FaShoppingCart className="w-6 h-6 text-gray-700" />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                    {notifications}
                                </span>
                            )}
                        </button>

                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <FaShoppingCart className="w-6 h-6 text-gray-700" />
                            {wishlistItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {wishlistItems}
                                </span>
                            )}
                        </button>

                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <FaShoppingCart className="w-6 h-6 text-gray-700" />
                            {cartItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="lg:hidden mt-4">
                    <div className="relative">
                        <FaShoppingCart className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Desktop Categories */}
                <div className="hidden lg:flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-8">
                        <div className="relative group">
                            <button className="flex items-center space-x-2 px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
                                <FaShoppingCart className="w-5 h-5" />
                                <span>All Categories</span>
                                <FaShoppingCart className="w-4 h-4" />
                            </button>

                            {/* Mega Menu */}
                            <div className="absolute top-full left-0 mt-2 w-200 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="grid grid-cols-2 p-6 gap-6">
                                    {categories.map((category) => (
                                        <div key={category.id} className="group/cat">
                                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                                                    <div className={category.color}>{category.icon}</div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">
                                                        {category.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        {subCategories[category.id].length} subcategories
                                                    </p>
                                                </div>
                                                <FaShoppingCart className="w-4 h-4 text-gray-400 ml-auto" />
                                            </div>

                                            {/* Subcategories */}
                                            <div className="absolute left-full top-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 p-4 opacity-0 invisible group-hover/cat:opacity-100 group-hover/cat:visible transition-all duration-200">
                                                <h5 className="font-semibold text-gray-900 mb-3">
                                                    Subcategories
                                                </h5>
                                                <div className="space-y-2">
                                                    {subCategories[category.id].map((subcat, idx) => (
                                                        <a
                                                            key={idx}
                                                            href="#"
                                                            className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                                                        >
                                                            <span className="text-gray-700">{subcat}</span>
                                                            <FaShoppingCart className="w-3 h-3 text-gray-400" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50 p-6 rounded-b-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                Need help?
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Our experts are here to assist you
                                            </p>
                                        </div>
                                        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                            Contact Support
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {categories.slice(0, 6).map((category) => (
                            <div
                                key={category.id}
                                className="relative"
                                onMouseEnter={() => setHoveredCategory(category.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    <span>{category.name}</span>
                                    <FaShoppingCart className="w-4 h-4" />
                                </button>

                                {hoveredCategory === category.id && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-40">
                                        <h5 className="font-semibold text-gray-900 mb-3">
                                            Popular in {category.name}
                                        </h5>
                                        <div className="space-y-3">
                                            {subCategories[category.id]
                                                .slice(0, 6)
                                                .map((subcat, idx) => (
                                                    <a
                                                        key={idx}
                                                        href="#"
                                                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                                    >
                                                        <div className="flex items-center space-x-3">
                                                            <div
                                                                className={`p-2 rounded-lg ${category.bgColor}`}
                                                            >
                                                                <div className={category.color}>
                                                                    {category.icon}
                                                                </div>
                                                            </div>
                                                            <span className="text-gray-700">{subcat}</span>
                                                        </div>
                                                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                            42
                                                        </span>
                                                    </a>
                                                ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700"
                                            >
                                                View all categories
                                                <FaShoppingCart className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        <a
                            href="#"
                            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                        >
                            <div className="flex items-center space-x-2">
                                <FaShoppingCart className="w-4 h-4" />
                                <span>Deals</span>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Hotline:</span>
                        <a
                            href="tel:1800766748"
                            className="flex items-center space-x-2 text-blue-600 font-semibold"
                        >
                            <FaShoppingCart className="w-4 h-4" />
                            <span>1-800-SHOPHUB</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <button className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg ${category.bgColor}`}>
                                                <div className={category.color}>{category.icon}</div>
                                            </div>
                                            <span className="font-medium">{category.name}</span>
                                        </div>
                                        <FaShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};



import React from "react";
import { Award, TrendingUp, Zap } from "lucide-react";
import { allProducts } from "../../productData";
import BrandShowcase from "../components/Brand";
import FeaturesSection from "../components/Features";
import FloatingCart from "../components/FloatingCart";
import HeroSection from "../components/Hero";
import ProductSection from "../components/Products";
import Footer from "../layout/Footer";
import Header from "../layout/Navbar";

const Home = () => {
    const featuredProducts = allProducts.filter((p) => p.featured);
    const latestProducts = allProducts.filter((p) => p.isLatest);
    const popularProducts = allProducts.filter((p) => p.isPopular);
    return (
        <>

            <div className="min-h-screen bg-gray-50">
                {/* <Header /> */}
                <HeroSection />

                <ProductSection
                    title="Featured Products"
                    subtitle="Handpicked selection of premium products"
                    products={featuredProducts}
                    viewAllLink="/featured"
                    badgeIcon={<Award className="w-6 h-6 text-white" />}
                />

                <BrandShowcase />

                <ProductSection
                    title="Latest Products"
                    subtitle="Discover the newest arrivals in our store"
                    products={latestProducts}
                    viewAllLink="/latest"
                    badgeIcon={<Zap className="w-6 h-6 text-white" />}
                    bgColor="bg-white"
                />

                <ProductSection
                    title="Popular Products"
                    subtitle="Top selling products loved by our customers"
                    products={popularProducts}
                    viewAllLink="/popular"
                    badgeIcon={<TrendingUp className="w-6 h-6 text-white" />}
                />

                <FeaturesSection />
                <Footer />
                <FloatingCart />
            </div>
        </>
    );
};



