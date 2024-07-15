'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from 'react-feather';
import { Button } from './ui/button';
import LocalStorage from '@/services/LocalStorage';
import Product from '@/models/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const productStorage = useMemo(() => new LocalStorage(), []);

  const handleAddToCart = () => {
    productStorage.addProduct(product, 'cart'); 
  };

  return (
    <Card className="flex-shrink-0 w-60 h-64 relative"> {/* Set fixed width and height */}
      <div className="image-container rounded-lg overflow-hidden w-full h-36"> {/* Set fixed width and height for image container */}
        <Image
          src={product.image}
          alt={product.name}
          width={256}
          height={200}
          layout="responsive" 
          className="rounded-md object-cover w-full h-full" 
        />
      </div>
      <CardContent className="flex-1 flex flex-col justify-between px-2">
        <div className="text-sm font-medium mt-2 mb-1">{product.name}</div>

        <div className="flex justify-between">
          <p>${product.price.toFixed(2)}</p>
          {product.discount && product.discount !== 0 && (
            <p>{product.discount}% OFF</p>
          )}
        </div>
      </CardContent>

      <CardFooter className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-2 py-2">
        <div className="flex items-center">
          <Button variant="outline" className='px-2' onClick={handleAddToCart}>
            <ShoppingCart size={20} className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
        <div className="flex items-center">
          <Heart size={20} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
