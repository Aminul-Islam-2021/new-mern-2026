import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cart/cartSlice"; // Adjust the import path as necessary

const Card1 = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className="group relative border border-gray-200 bg-white rounded-lg shadow-2xl hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="block">
        <div className="relative overflow-hidden  rounded-lg bg-gray-100 aspect-3/4">
          {/* Main product image */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-140"
          />

          {/* Secondary hover image */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Product badges */}
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
              New
            </div>
          )}

          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}

          {/* Action buttons */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex justify-center space-x-1 p-2 bg-white bg-opacity-90 transition-all duration-300 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 flex items-center justify-center p-2 bg-teal-400 text-white rounded hover:bg-primary-700 transition-colors"
            >
              <FiShoppingCart className="w-4 h-4 mr-1 " />
              <span className="text-md font-semibold ">Add to Cart</span>
            </button>

            <button
              onClick={toggleFavorite}
              className={`p-2 rounded transition-colors ${
                isFavorite
                  ? "bg-red-200 text-red-500 "
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FiHeart className="w-4 h-4" />
            </button>

            <div className="p-3 bg-gray-100 text-gray-600  rounded hover:bg-gray-200 transition-colors">
              <FiEye className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-3 pl-4 pr-3 pb-4">
          {product.brand && (
            <h4 className="text-xs text-gray-500">{product.brand}</h4>
          )}

          <h3 className="text-sm font-medium text-gray-900 mt-1">
            {product.name}
          </h3>

          {/* Ratings */}
          {product.rating && (
            <div className="mt-1 flex items-center">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-1 flex items-center">
            {product.originalPrice && product.originalPrice > product.price ? (
              <>
                <span className="text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-xs text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className=" md:hidden block">
        <div className=" flex justify-center gap-2 p-2 w-full bottom-3">
          <div className=" bg-blue-600 px-4  sm:px-6 py-2 rounded-md text-white ">
            <FiShoppingCart />
          </div>
          <div className=" bg-green-600 px-4 sm:px-6 py-2 rounded-md text-white">
            <FiHeart />
          </div>
          <div className=" bg-teal-600 px-4 sm:px-6 py-2 rounded-md text-white">
            <FiEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
