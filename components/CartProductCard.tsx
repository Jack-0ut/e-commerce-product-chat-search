import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Product from '@/models/Product';

interface CartProductCardProps {
  product: Product;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ product }) => {
  const quantity = 1;

  return (
    <Card className="flex-shrink-0 w-90 h-48 flex items-center border-0"> 
      <div className="w-1/2 h-full relative"> 
        <Image
          src={product.image}
          alt={product.name}
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <CardContent className="flex-1 flex flex-col justify-between pl-2 overflow-hidden"> {/* Add overflow-hidden to prevent text overflow */}
        <div className="text-md mb-4">{product.name}</div> 
        <div className="flex justify-between items-center"> {/* Ensure text elements don't take more than 50% of card width */}
          <div className="flex flex-col"> 
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartProductCard;
