import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[100vh] custom-img">
        <div className="hero-overlay bg-opacity-20"></div>
        <div
          className="hero-content text-center text-neutral-content border-2 border-orange-600
        rounded shadow-lg shadow-orange-500/50 opacity-100 bg-black/50 m-4"
        >
          <div className="max-w-md">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl
    mb-5 text-myColor"
            >
              Ultimate <span className="text-orange-500">Finds</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-lg font-semibold tracking-tight text-myColor">
              Welcome to our online emporium shopper&apos;s paradise where dreams
              come true! Explore a curated collection of premium products for
              you.
            </p>
            <Link href="#shop">
              <Button
                className=" outline outline-myColor outline-offset-2 hover:outline-orange-600
       text-myColor rounded group"
              >
                <AiOutlineShopping
                  className="mr-2 h-8 w-6 text-myColor group-hover:text-orange-600
       group-hover:animate-bounce"
                />
                Shop now
                <BsArrowRightShort className="ml-2 h-6 w-6 text-myColor" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
