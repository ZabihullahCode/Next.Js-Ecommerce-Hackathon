'use client'
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";

const BestSellAddToCart = ({ slug }: { slug: string }) => {
  //  Calling products
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  // Add to cart
  const dispatch = useAppDispatch();
  // setting cart item
  const [cartItem, setcartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    color: product?.color[0],
  });
  // Toast
  const notify = () =>
  toast.success("🦄 Product Added Successfully!", {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="group bg-gray-700 hover:bg-transparent text-myColor
            hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
            rounded-xl "
          >
            <FaShoppingCart className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-myColor">
          {/* size */}
          <div className="flex mt-4 mb-4 items-center justify-between">
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
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          {/* color selection */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-700">
              Color
            </span>
            {/* Use flex-wrap and justify-center for smaller screens */}
            <div className="flex flex-wrap justify-center">
              {product?.color.map((item, i) => (
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
          {/* Add to cart button */}
          <div className=" w-full" onClick={notify}>
          <Button  onClick={() => dispatch(addToCart(cartItem))}
            className="group mt-5 w-full bg-gray-700 hover:bg-transparent text-myColor
            hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
            rounded-xl "
          >
            <FaShoppingCart className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
            Add to Cart
          </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BestSellAddToCart;
