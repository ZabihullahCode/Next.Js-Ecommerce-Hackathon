import React from "react";

const Promotion = () => {
  return (
    <div className=" mb-[100px] mt-[100px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* Promotion starts Here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 1st child */}
        <div className="m-4">
          <div className="rounded-xl hero h-[25rem] group" style={{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661765713449-99572ef0f0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)'}}>
            <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className=" group-hover:text-amber-500 duration-700 scroll-m-20 text-4xl font-bold tracking-tight uppercase text-white">
                  GET UPTO <span className="text-orange-600">60% </span> OFF
                </h1>
                <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-white">
                  Flash Sale, get upto 60% off on the Season Variant.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Child */}
        <div className="m-4">
        <div className="hero h-[25rem] group rounded-xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)'}}>
            <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="group-hover:text-amber-500 duration-700 scroll-m-20 text-4xl font-bold tracking-tight uppercase text-white">
                  GET UPTO <span className="text-orange-600"> 30% </span> OFF
                </h1>
                <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-white">
                Flash Sale, get upto 30% off on the New Jewelry Arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
