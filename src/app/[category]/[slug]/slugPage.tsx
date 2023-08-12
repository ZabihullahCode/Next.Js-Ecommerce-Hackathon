"use client";
import { Button } from "@/components/ui/button";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import SlugData from "@/components/slugData";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/addToCartToast";


const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug == params.slug);
  
 
  const [cartItem, setcartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image:  slug[0]?.image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    color: slug[0].color[0],
  });

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <SlugData image={slug[0].image} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* category */}
          <h2
            className="text-gray-500 tracking-widest scroll-m-20 text-md
          uppercase font-semibold mt-6"
          >
            {slug[0].category}
          </h2>
          {/* product title */}
          <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-gray-800">
            {slug[0].title}
          </h1>
          {/* rating stars */}
          <div className="rating rating-sm mt-2">
            {/* Add responsive classes to the star ratings */}
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-500"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-500"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-500 sm:inline"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-500 sm:inline"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-500 sm:inline"
            />
          </div>

          {/* description */}
          <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-slate-600">
            {slug[0].description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              {/* color selection */}
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-700">
                Color
              </span>
              {/* Use flex-wrap and justify-center for smaller screens */}
              <div className="flex flex-wrap justify-center">
                {slug[0].color.map((item, i) => (
                  <button
                    onClick={() => setcartItem({ ...cartItem, color: item })}
                    key={i}
                    className="border-2 border-gray-300 mr-1  rounded-full w-6 h-6 focus:outline-none
             active:border-orange-600  focus:border-orange-600"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
            </div>
            {/* size */}
            <div className="flex mt-4 mb-4 lg:mb-0 sm:mt-0 ml-0 sm:ml-6 items-center justify-between">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-700">
                Size
              </span>

              <div className="form-control w-full max-w-xs ">
                <select
                  onChange={(e) =>
                    setcartItem({ ...cartItem, size: e.target.value })
                  }
                  className="select select-bordered bg-myColor"
                >
                  <option disabled selected>
                    Select Size
                  </option>
                  {slug[0].size.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* Quantity button */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-lg font-semibold tracking-tight text-gray-700">
              Quantity
            </span>
            <Button
              onClick={() =>
                setcartItem({
                  ...cartItem,
                  qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                })
              }
              className="group bg-gray-700 hover:bg-transparent text-myColor
      hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
      rounded-xl h-fit w-fit"
            >
              <FaMinus className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
              Less
            </Button>
            <div className="mr-2 ml-2 scroll-m-20 text-xl font-semibold tracking-tight">
              {cartItem.qty}
            </div>
            <Button
              onClick={() => setcartItem({ ...cartItem, qty: ++cartItem.qty })}
              className="group bg-gray-700 hover:bg-transparent text-myColor
      hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
      rounded-xl h-fit w-fit"
            >
              <FaPlus className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
              Add
            </Button>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* product price */}
            <div>
              <span
                className={`scroll-m-20 text-xl font-semibold tracking-tight
             text-gray-700 ${
               cartItem.discount > 0 &&
               "line-through decoration-2 decoration-orange-600"
             } `}
              >
                ${cartItem.price * cartItem.qty}
              </span>
              {/* Discount Value */}
              {cartItem.discount > 0 && (
                <span
                  className="ml-3 scroll-m-20 text-xl font-semibold
              tracking-tight text-gray-700"
                >
                  $
                  {(cartItem.price -
                    (cartItem.price * cartItem.discount) / 100) *
                    cartItem.qty}
                </span>
              )}
            </div>
            {/* Add to art */}
            <AddToCartToast cartItem={cartItem} />
          </div>
          <Button
            className="w-full mt-3 group bg-gray-700 hover:bg-transparent text-myColor
      hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
      rounded-xl"
          >
            <FaHeart className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
