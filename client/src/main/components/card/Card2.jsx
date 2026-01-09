import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../store/features/cart/cartSlice";

const Card2 = ({ product }) => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    // dispatch(addToCart(product));
  };
  const handleClick = () => {
    navigate(`/products/${product._id}`, { state: { product } });
  };
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover object-center transition-transform duration-500 hover:scale-140 "
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                ${product.discountedPrice || product.price}
              </span>
              {product.discountedPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              )}
            </div>
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
          </div>
          {product.category && (
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                {product.category}
              </span>
              {product.subcategory?.name && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {product.subcategory.name}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
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
  );
};

export default Card2;
