import Image from "next/image";
import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className=" mb-[100px] mt-[100px]">
        {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* Categoties start Here*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {/* category # 1 */}
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={'/tops'}>
            <Image
             src={require('../../public/pictures/overcoat.webp')} 
             alt="Top" 
             height={350} 
             width={350}
             className="rounded-xl duration-500 group-hover:scale-125"
             />
             <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">tops</h1>
             </div>
             <div className="block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">tops</h1>
             </div>
             </Link>
          </div>
            {/* category # 2 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={'/pants'}>
            <Image
             src={require('../../public/pictures/hat.webp')} 
             alt="Pants" 
             height={350} 
             width={350}
             className="rounded-xl duration-500 group-hover:scale-125"
             />
             <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Pants</h1>
             </div>
             <div className="block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Pants</h1>
             </div>
             </Link>
          </div>
            {/* category # 3 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={'/asessories'}>
            <Image
             src={require('../../public/pictures/accessories.webp')} 
             alt="Asessories" 
             height={350} 
             width={350}
             className="rounded-xl duration-500 group-hover:scale-125"
             />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Categories</h1>
             </div>
             <div className="block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Categories</h1>
             </div>
             </Link>
          </div>
            {/* category # 4 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={'/shoes'}>
            <Image
             src={require('../../public/pictures/shoes.webp')} 
             alt="Shoes" 
             height={350} 
             width={350}
             className="rounded-xl duration-500 group-hover:scale-125"
             />
             <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Shoes</h1>
             </div>
             <div className="block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold
              tracking-tight text-center text-myColor bg-gray-800/70 w-full duration-500">
                <h1 className="uppercase">Shoes</h1>
             </div>
             </Link>
          </div>
      </div>
    </div>
  );
};

export default Category;
