import { useState, useEffect, useRef } from "react";
import {
  FiX,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
} from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
// import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import PromoCard from "../components/PromoCard";
import ProductCard1 from "../components/ProductCard1";




function Section({ promo }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
      <PromoCard promo={promo} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard1 key={i} />
        ))}
      </div>
    </div>
  );
}











export default function Home() {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

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
    <div className="bg-white text-gray-800">
      {/* ================= Responsive Navbar with left hamburger and toggle searchbar in small device ================= */}
      <Navbar />
      {/* ================= Banner ================= */}

      <Hero />

      {/* ================= Category Logo================= */}

      {/* ================= Brand ================= */}
   
      <section className="max-w-7xl mx-auto px-4 py-10 flex justify-between items-center overflow-x-auto space-x-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center min-w-20 cursor-pointer"
          >
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">{category.icon}</span>
            </div>
            <span className="text-xs">{category.name}</span>
          </div>
        ))}
      </section>
    

      {/* ================= Promo Section ================= */}
      <div className="space-y-10">
        <Section
          title="Deals and offers"
          promo={{
            title: "Deals and offers",
            subtitle: "Hygiene equipments",
            timer: ["04", "13", "34", "56"],
          }}
        />

        <Section
          title="Home and outdoor products"
          promo={{
            title: "Home and outdoor products",
            button: "Explore now",
            image: "/promo-home.jpg",
          }}
        />

        <Section
          title="Consumer electronics and gadgets"
          promo={{
            title: "Consumer electronics and gadgets",
            button: "Explore now",
            image: "/promo-electronics.jpg",
          }}
        />
      </div>

      {/* ================= TABS ================= */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <div className="flex gap-6 text-sm font-medium">
            <span className="border-b-2 border-red-500 pb-2">New Arrivals</span>
            <span className="text-gray-400">Featured</span>
            <span className="text-gray-400">Special</span>
          </div>
          <div className="flex gap-2 text-gray-400">‹ ›</div>
        </div>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="text-center border border-gray-200 p-1 relative"
          >
            {i === 2 && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
                SALE
              </span>
            )}
            {i === 4 && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1">
                NEW
              </span>
            )}
            <div className="h-40 bg-gray-100 mb-4" />
            <p className="text-xs text-gray-400">Macbook, Laptop</p>
            <p className="text-sm font-medium">Apple Macbook Retina 23”</p>
            <p className="text-red-500 font-semibold mt-2">$290.00</p>
            <button className="mt-3 text-xs border border-gray-200 px-4 py-2">
              ADD TO CART
            </button>
          </div>
        ))}
      </section>

      {/* ================= PROMO BANNERS ================= */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 pb-10">
        <div className="bg-linear-to-r from-blue-500 to-blue-400 text-white p-8 flex justify-between items-center">
          <div>
            <p className="text-sm">BEST DIGITAL</p>
            <h3 className="text-xl font-bold">SALE SMARTWATCH</h3>
            <p className="mt-2">
              $620.00 <span className="line-through text-sm">$660.00</span>
            </p>
          </div>
          <div className="h-24 w-24 bg-white/30 rounded-full" />
        </div>

        <div className="bg-linear-to-r from-green-500 to-green-400 text-white p-8 flex justify-between items-center">
          <div>
            <p className="text-sm">STRONG PRICES</p>
            <h3 className="text-xl font-bold">LENOVO YOGA TABLET 2</h3>
            <p className="mt-2">
              $900.00 <span className="line-through text-sm">$960.00</span>
            </p>
          </div>
          <div className="h-24 w-32 bg-white/30" />
        </div>
      </section>

      {/* ================= BESTSELLER ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h3 className="font-semibold">Bestseller Products</h3>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>Cell Phones</span>
            <span>Laptop</span>
            <span>Desktop</span>
            <span>TV & Video</span>
            <span>Tablets</span>
            <div className="flex gap-2 text-gray-400">‹ ›</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="text-center border border-gray-200 p-1">
              <div className="h-36 bg-gray-100 mb-4" />
              <p className="text-xs text-gray-400">Macbook, Laptop</p>
              <p className="text-sm font-medium">Apple Macbook Retina 23”</p>
              <p className="text-red-500 font-semibold mt-2">$290.00</p>
              <button className="mt-3 text-xs border border-gray-200 px-4 py-2">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LARGE BANNER ================= */}
      <section className="bg-gray-100 py-12 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="h-40 w-full md:w-1/3 bg-gray-300 " />
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-bold">Backpacks For Men’s</h3>
            <p className="text-sm text-gray-500 mt-2">
              Designed to be the pack that does it all
            </p>
          </div>
          <div className="h-40 w-full md:w-1/3 bg-gray-300" />
        </div>
      </section>

      {/* ================= 3 COLUMN PRODUCT LIST ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {["TopSeller", "On-Sale", "Top Rated"].map((title) => (
          <div key={title}>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
              <h4 className="font-semibold">{title} Products</h4>
              <span className="text-gray-400">‹ ›</span>
            </div>

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-200" />
                <div>
                  <p className="text-sm">Apple Macbook Retina 23”</p>
                  <p className="text-red-500 font-semibold">$290.00</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ================= BRAND STRIP ================= */}
      <section className="border-t border-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-gray-400 text-sm">
          <span>graphicriver</span>
          <span>audiojungle</span>
          <span>codecanyon</span>
          <span>themeforest</span>
          <span>activeden</span>
        </div>
      </section>
    </div>
  );
}
