import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="px-4"> 
      <div className="grid grid-cols-2 gap-4"> 
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
