export default function ProductCard1() {
  return (
    <div className="border border-gray-200 rounded-lg p-3 hover:shadow transition">
      <div className="h-32 flex items-center justify-center bg-gray-50 rounded">
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="object-contain h-full"
        />
      </div>
      <h4 className="text-sm mt-2 font-medium">The Product name</h4>
      <p className="text-xs text-gray-500">From USD 99</p>
          <p className="text-xs text-gray-500">From USD 99</p>
    </div>
  );
}
