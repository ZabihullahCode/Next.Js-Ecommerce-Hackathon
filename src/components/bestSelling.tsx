"use client";
import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.slice(0, 3);
  return (
    <div className="mb-[100px] mt-[100px]">
     <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* Best Selling Products Here */}
      <div className="flex flex-wrap justify-center gap-4">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
