import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { addToCart } from "@/app/store/features/cart";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/app/store/hooks";


const AddToCartToast = ( { cartItem }: any ) => {
    const dispatch = useAppDispatch();
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
    <>
    <div className="w-fit"    onClick={() => dispatch(addToCart(cartItem))}>
       
     <Button onClick={notify}
              className="group bg-gray-700 hover:bg-transparent text-myColor
      hover:text-gray-700 scroll-m-20 text-base font-semibold tracking-tight
      rounded-xl mt-3 sm:mt-0"
            >
              <FaShoppingCart className="mr-2 w-4 h-4 group-hover:text-orange-500 duration-300" />
              Add to Cart
            </Button>
        
          
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
      </>
  );
};

export default AddToCartToast;
