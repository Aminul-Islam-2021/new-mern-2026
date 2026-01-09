import React, { useState } from "react";
import { mockProducts } from "../data/mockProductsData";
import Card1 from "../components/card/Card1";
import Card2 from "../components/card/Card2";
import Card3 from "../components/card/Card3";

const ProductPage = () => {
     const [products, setProducts] = useState(mockProducts);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center my-8">Card-1</h1>
        <div className="container-custom py-12 px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <Card1 key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center my-8">Card-2</h1>
        <div className="container-custom py-12 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card2 key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center my-8">Card-3</h1>
        <div className="container-custom py-12 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card3 key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
