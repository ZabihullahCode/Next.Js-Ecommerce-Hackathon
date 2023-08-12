import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-myColor">
      <section className=" body-font mb-[100px] mt-[100px]">
        <div className="container px-5 mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
              Discover Our Services
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Delivery Section */}
            <div className=" p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full
                mb-5 flex-shrink-0 group">
                <Image
                  src={require("../../public/pictures/van.webp")}
                  alt="Dilivery"
                  width={100}
                  height={100}
                  className="w-20 h-20  group-hover:-translate-y-2 transition-transform"
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-gray-800 group-hover:text-orange-500 duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize">
                  Free Delivery
                </h2>
                <p className= "text-gray-700 group-hover:text-gray-500 scroll-m-20 text-base font-semibold tracking-tight transition-colors line-clamp-2 mt-3">
                  Free Delivery on Order Above $1000
                </p>
              </div>
            </div>

             {/* 24/7 Services */}
             <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center
                            group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full
                              mb-5 flex-shrink-0">
                <Image
                  src={require("../../public/pictures/customer-service.webp")}
                  alt="Dilivery"
                  width={100}
                  height={100}
                  className="w-20 h-20 group-hover:-translate-y-2 transition-transform"
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-gray-800 group-hover:text-orange-500 duration-300
                 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize">
                24/7 Customer Service
                </h2>
                <p className= "text-gray-700 group-hover:text-gray-500 scroll-m-20 text-base font-semibold tracking-tight transition-colors line-clamp-2 mt-3">
                For Queries and Questions Feel Free to Contact
                </p>
              </div>
            </div>

             {/* Moneyback */}
             <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
                <Image
                  src={require("../../public/pictures/money.webp")}
                  alt="Dilivery"
                  width={100}
                  height={100}
                  className="w-20 h-20 group-hover:-translate-y-2 transition-transform"
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-gray-800 group-hover:text-orange-500 duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize">
                Money Back Guarantee
                </h2>
                <p className= "text-gray-700 group-hover:text-gray-500 scroll-m-20 text-base font-semibold tracking-tight transition-colors line-clamp-2 mt-3">
                Get Money Back Guarantee on Damage Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
