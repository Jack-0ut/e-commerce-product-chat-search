'use client';
import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";
import { Button } from './ui/button';
import CartProductCard from "./CartProductCard";
import LocalStorage from '@/services/LocalStorage';
import Product from "@/models/Product";

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Initialize LocalStorage for the cart
    const cartStorage = new LocalStorage();

    // Get all products from the cart
    const storedProducts = cartStorage.getAllProducts('cart');

    // Set the products state with the stored products
    setProducts(storedProducts);

    // Calculate the total price of all products
    const totalPrice = storedProducts.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(totalPrice);
  }, []); 

  const handleBuy = () => {
    console.log("Buy button clicked!");
  };

  return (
    <>
      <ScrollArea className="h-[75vh] overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div className="flex justify-between items-center py-4">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-center"> 
        <Button onClick={handleBuy}>Buy Now</Button>
      </div>
    </>
  );
};

export default Cart;
