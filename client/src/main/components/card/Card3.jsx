
import { useState } from "react";
import { FaHeart, FaEye, FaShoppingCart, FaStar } from "react-icons/fa";

const Card3 = ({ product }) => {
 
  const [quantity, setQuantity] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => setQuantity(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div
      className="relative border border-gray-200 h-fit w-40 bg-gray-50  rounded-md shadow-2xl cursor-pointer overflow-hidden transition-transform hover:scale-105 duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image & Hover Drawer Container */}
      <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
        {/* Hover Drawer (Overlapping the image) */}
        <div
          className={`absolute top-0 right-0 h-full w-1/3 transition-transform duration-600 ${
            hovered ? "translate-x-0" : "translate-x-full"
          } z-20 flex flex-col items-center justify-center space-y-2 p-2 bg-opacity-80 backdrop-blur-sm`}
        >
          <button className="p-1.5 rounded-full bg-gray-200 hover:bg-white shadow-md transition">
            <FaHeart className="text-red-600 text-base" />
          </button>
          <button className="p-1.5 rounded-full bg-gray-200 hover:bg-white shadow-md transition">
            <FaEye className="text-blue-600 text-base" />
          </button>
          <button className="p-1.5 rounded-full bg-gray-200 hover:bg-white shadow-md transition">
            <FaShoppingCart className="text-green-700 text-base" />
          </button>
        </div>

        {/* Product Image (Blur on Hover) */}

        <img
          src={product.image}
            alt={product.name}
          className="  mb-1 h-32 w-full object-cover rounded-md"
        />
      </div>
      <p className=" text-center">Title</p>
      <p className=" text-center text-sm">Brand</p>
      <div className=" flex justify-between px-4 py-2">
        <p className=" text-center text-sm">price</p>
        <p className=" text-center text-sm">rate</p>
      </div>
      <div className=" text-center px-1">
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className=" bg-teal-400 w-full  mb-1 text-white p-1 rounded-md cursor-pointer"
          >
            Add To Cart
          </button>
        ) : (
          <div className=" flex items-center justify-between gap-1  mb-1  text-white rounded-md font-semibold text-md ">
            <button
              onClick={decrementQuantity}
              className="w-[33%] bg-red-400 p-1 rounded-md cursor-pointer"
            >
              -
            </button>
            <span className="w-[33%] bg-teal-400 p-1 rounded-md ">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="w-[33%] bg-green-400 p-1 rounded-md  cursor-pointer"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card3;
