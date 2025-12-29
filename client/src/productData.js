import { Dumbbell, Gift, Home, Shirt, ShoppingBag, Smartphone, Sparkles, Truck } from "lucide-react";

export const categories = [
    { id: 1, name: "Electronics", icon: "", color: "text-blue-600", bgColor: "bg-blue-50" },
    { id: 2, name: "Fashion", icon: "", color: "text-purple-600", bgColor: "bg-purple-50" },
    { id: 3, name: "Home & Garden", icon: "", color: "text-green-600", bgColor: "bg-green-50" },
    { id: 4, name: "Beauty & Health", icon:"", color: "text-pink-600", bgColor: "bg-pink-50" },
    { id: 5, name: "Sports & Outdoors", icon: "", color: "text-orange-600", bgColor: "bg-orange-50" },
    { id: 6, name: "Grocery", icon:"", color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { id: 7, name: "Toys & Games", icon: "", color: "text-rose-600", bgColor: "bg-rose-50" },
    { id: 8, name: "Automotive", icon: "", color: "text-gray-600", bgColor: "bg-gray-50" }
];




export const subCategories = {
    1: ["Smartphones", "Laptops", "Tablets", "Headphones", "Wearables", "Cameras", "Gaming", "Smart Home"],
    2: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories", "Watches", "Bags", "Jewelry", "Activewear"],
    3: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting", "Garden Tools", "Storage", "Appliances"],
    4: ["Skincare", "Makeup", "Haircare", "Fragrances", "Vitamins", "Personal Care", "Wellness", "Men's Grooming"],
    5: ["Exercise Equipment", "Outdoor Gear", "Team Sports", "Yoga", "Cycling", "Camping", "Fitness", "Water Sports"],
    6: ["Fresh Produce", "Dairy", "Beverages", "Snacks", "Frozen Foods", "Bakery", "Meat", "Organic"],
    7: ["Action Figures", "Board Games", "LEGO", "Educational", "Outdoor Toys", "Video Games", "Puzzles", "Dolls"],
    8: ["Car Parts", "Car Care", "Tools", "Interior", "Exterior", "Audio", "Performance", "Motorcycle"]
};


export const allProducts = [
    // Featured Products
    { id: 1, name: "Apple iPhone 15 Pro Max", category: "Electronics", price: 1299, originalPrice: 1399, discount: 7, rating: 4.8, reviews: 1243, sold: 890, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop", tags: ["New", "Trending", "Best Seller"], featured: true },
    { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Electronics", price: 1199, originalPrice: 1299, discount: 8, rating: 4.7, reviews: 892, sold: 567, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop", tags: ["AI Powered", "New"], featured: true },
    { id: 3, name: "Sony WH-1000XM5", category: "Electronics", price: 349, originalPrice: 399, discount: 13, rating: 4.9, reviews: 2345, sold: 1289, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop", tags: ["Noise Cancelling", "Best Seller"], featured: true },
    { id: 4, name: "Nike Air Max 270", category: "Fashion", price: 149, originalPrice: 179, discount: 17, rating: 4.5, reviews: 678, sold: 456, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop", tags: ["Limited Edition"], featured: true },

    // Latest Products
    { id: 5, name: "MacBook Pro M3 Max", category: "Electronics", price: 3299, originalPrice: 3499, discount: 6, rating: 4.9, reviews: 456, sold: 234, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop", tags: ["New"], isLatest: true },
    { id: 6, name: "Dyson Airwrap Complete", category: "Beauty & Health", price: 599, originalPrice: 649, discount: 8, rating: 4.6, reviews: 1234, sold: 789, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop", tags: ["New", "Trending"], isLatest: true },
    { id: 7, name: "Nintendo Switch OLED", category: "Toys & Games", price: 349, originalPrice: 379, discount: 8, rating: 4.7, reviews: 2345, sold: 1567, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&auto=format&fit=crop", tags: ["New"], isLatest: true },
    { id: 8, name: "Vitamix Professional 750", category: "Home & Garden", price: 699, originalPrice: 799, discount: 13, rating: 4.8, reviews: 890, sold: 456, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop", tags: ["Professional"], isLatest: true },

    // Popular Products
    { id: 9, name: "Apple AirPods Pro 2", category: "Electronics", price: 249, originalPrice: 279, discount: 11, rating: 4.7, reviews: 4567, sold: 3456, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop", tags: ["Best Seller"], isPopular: true },
    { id: 10, name: "Instant Pot Duo Plus", category: "Home & Garden", price: 129, originalPrice: 149, discount: 13, rating: 4.6, reviews: 6789, sold: 4567, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop", tags: ["Best Seller"], isPopular: true },
    { id: 11, name: "Fitbit Charge 6", category: "Sports & Outdoors", price: 159, originalPrice: 179, discount: 11, rating: 4.4, reviews: 2345, sold: 1890, image: "https://images.unsplash.com/photo-1576243336142-81d589a81b80?w=800&auto=format&fit=crop", tags: ["Health", "Best Seller"], isPopular: true },
    { id: 12, name: "Kindle Paperwhite", category: "Electronics", price: 139, originalPrice: 149, discount: 7, rating: 4.8, reviews: 8901, sold: 6789, image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=800&auto=format&fit=crop", tags: ["Best Seller"], isPopular: true }
];

export const banners = [
    {
        id: 1,
        title: "Black Friday Sale",
        subtitle: "Up to 70% Off",
        description: "Don't miss the biggest sale of the year",
        image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&auto=format&fit=crop",
        buttonText: "Shop Now",
        theme: "dark",
        badge: "Limited Time"
    },
    {
        id: 2,
        title: "New Tech Collection",
        subtitle: "Latest Gadgets",
        description: "Discover cutting-edge technology",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&auto=format&fit=crop",
        buttonText: "Explore",
        theme: "light",
        badge: "Just Launched"
    },
    {
        id: 3,
        title: "Summer Fashion",
        subtitle: "50% Off Summer Wear",
        description: "Refresh your wardrobe with our summer collection",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop",
        buttonText: "View Collection",
        theme: "light",
        badge: "Hot Trend"
    }
];

export const brands = [
    { id: 1, name: "Apple", logo: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=100&h=100&fit=crop" },
    { id: 2, name: "Samsung", logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop" },
    { id: 3, name: "Sony", logo: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=100&h=100&fit=crop" },
    { id: 4, name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" },
    { id: 5, name: "Adidas", logo: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=100&h=100&fit=crop" },
    { id: 6, name: "Dyson", logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop" }
];