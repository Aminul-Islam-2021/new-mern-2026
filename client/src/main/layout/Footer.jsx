import {
  ArrowRight,
  ChevronRight,
  CreditCard,
  Globe,
  ShoppingCart,
} from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { categories } from "../../productData";

// Footer
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg">
                  <FaShoppingCart className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">
                  Shop
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                    Hub
                  </span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Your ultimate shopping destination. Quality products,
                exceptional service, and unbeatable prices.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Top Categories</h3>
              <ul className="space-y-3">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.id}>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition-colors group"
                    >
                      <FaShoppingCart className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-r-lg font-semibold transition-opacity">
                  <FaShoppingCart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <FaShoppingCart className="w-8 h-8 text-gray-400" />
                <FaShoppingCart className="w-8 h-8 text-gray-400" />
                <FaShoppingCart className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ShopHub. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
