import React from 'react'
import { Button } from "./ui/button";
import {  FaHeart } from "react-icons/fa"
import Image from "next/image";
import Link from 'next/link';
import BestSellAddToCart from './bestSellAddToCart';


const BestSellingCard = ({
    src,
    alt, 
    title, 
    description, 
    price,
    category,
    slug,
    discount
}: {src:string
    alt:string 
    title:string 
    description:string 
    price:number
    category:string
    slug:string
    discount: number
}) => {
  return (
    <div className="w-[350px] h-[35rem] p-4 shadow-md group rounded-xl mx-auto relative ">
      {/* Image Div */}
       <Link href={`/${category}/${slug}`}>
        <div className="block overflow-hidden h-[23rem] rounded">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
          />
        </div>
        {/* Typoghraphy Div */}
        <div className="mt-4">
         
         {
          title && (
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight
            text-gray-700 line-clamp-1">{title}</h2>
          )
         }
          {description && (
             <p className="scroll-m-20 text-sm font-semibold tracking-tight
             text-gray-500 line-clamp-1">{description}</p>
          )}
          {
             price && (
              <div className='flex gap-3'>
              <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight
          text-gray-700 line-clamp-1
           ${discount > 0 && "line-through decoration-2 decoration-orange-600"}`}>${price}</p>
           {/* Discount Value */}
             {discount > 0 &&  <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight
          text-gray-700 line-clamp-1">${price - ((price*discount)/100)}</p> }
         
          </div>
             )
          }
         </div>
         </Link>
          {/* Button Div */}
          <div>
            <div className='absolute bottom-2 right-2'>
              <BestSellAddToCart slug={slug} />
            </div>
                <Button className="group bg-red-600 hover:bg-transparent text-myColor
            hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
            rounded-xl absolute bottom-2 left-2">
                <FaHeart className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
                Buy Now
                </Button>
                {discount > 0 && (
                <div className='scroll-m-20 text-xs font-semibold tracking-tight 
                text-myColor bg-orange-600 absolute top-0 left-2 w-[87px] p-2 
                text-center uppercase rounded-tl-xl rounded-bl-xl transform: rotate(-90deg)'>
                  {`${discount}% off`}
                  </div>
                )}
          </div>
        
      </div>
  )
}

export default BestSellingCard
