import React from "react";
import ChatInterface from "@/components/ChatInterface";
import ProductCarousel from "@/components/ProductCarousel";
import { ShoppingBag, Heart }  from 'react-feather'; 
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import Cart from '../components/Cart';

export default function Home() {
  const storeName = "@КроСівки";

  const products = [
    {
      id: 1,
      name: "Air Force 1 '07",
      image: "https://originalstore.com.ua/6140-large_default/krosivki-nike-air-force-1-07-lv8-dv0789-100.jpg",
      price: 99.99,
      discount: 10,
    },
    {
      id: 2,
      name: "Air Jordan 1 Retro High OG",
      image: "https://werare.com.ua/image/catalog/i/aa/hp/b921bc8ad62958e7db1a1a05203a67b4.jpg",
      price: 159.99,
      discount: 15,
    },
    {
      id: 3,
      name: "Air Max 270 React",
      image: "https://intertop.ua/load/CF231/1600x2133/MAIN.jpg",
      price: 119.99,
      discount: 20,
    },
    {
      id: 4,
      name: "Nike React Element 87",
      image: "https://intertop.ua/load/CF231/1600x2133/MAIN.jpg",
      price: 139.99,
      discount: 0,
    },
    {
      id: 5,
      name: "Adidas Ultraboost",
      image: "https://intertop.ua/load/CF231/1600x2133/MAIN.jpg",
      price: 129.99,
      discount: 10,
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col px-4 lg:px-8">
      <header className="rounded-full bg-transparent py-2 text-white font-bold text-3xl flex items-center justify-center">
        <span className="mr-2 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#b71c1c] to-[#e53935]">
          {storeName}
        </span>
      </header>
      <div className="mt-2 lg:mt-4">
        <ProductCarousel products={products} />
      </div>
      <div className="mt-2 lg:mt-4">
        <ChatInterface />
      </div>
      <div className="absolute bottom-8 right-8 flex flex-col space-y-4">
        <Sheet>
            <SheetTrigger asChild>
              <button className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mb-4">Your Shopping Bag</SheetTitle>
              </SheetHeader>
              <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
