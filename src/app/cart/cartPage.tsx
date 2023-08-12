'use client'
import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total, arr)=>{return (total+(arr.price-((arr.price*arr
        .discount)/100))*arr.qty)},0);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
    {/* items */}
    <div className="col-span-2">
      <CartCard />
    </div>

    {/* summary */}
    <div className="bg-gray-700/5 shadow-md p-5 rounded-xl m-5">
      {/* Heading */}
      <div className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-orange-600">
        Summary of your order
        <br />
      </div>
      {/* Divider */}
      <div className="divider mt-0 mb-1"></div>
      {/* pricing */}
      <div className="text-sm font-semibold tracking-tight text-gray-600">
        {/* product price */}
        <div className="flex justify-between items-center capitalize">
          <h2>Sub Total</h2>
          <h2>${total}</h2>
        </div>
        {/* Delivery charges */}
        <div className="flex justify-between items-center capitalize">
          <h2>Delivery charges</h2>
          <h2>TBD</h2>
          </div>
          {/* Delivery charges */}
          <div className="flex justify-between items-center capitalize">
            <h2>sales tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
          {/* Divider */}
      <div className="divider mt-0 mb-1"></div>
       {/* Estimated Toal */}
       <div className="flex justify-between items-center uppercase font-semibold text-sm
       tracking-tight text-gray-700">
            <h2>estimated total</h2>
            <h2>${total}</h2>
          </div>
            {/* Divider */}
      <div className="divider mt-0 mb-1"></div>
      {/* checkout button */}
      <div className="flex items-center justify-center w-full">
        <Button className="bg-gray-800 text-myColor rounded-xl uppercase
        hover:text-gray-700 hover:bg-transparent duration-300 hover:shadow-md font-semibold
        scroll-m-20 text-sm tracking-tight">Proceed to checkout</Button>
      </div>
       {/* Divider */}
       <div className="divider mt-0 mb-1"></div>
       <div>
        <p className="text-xs tracking-tight text-gray-600 font-semibold w-[97%]
        text-center italic">
           {`* Delivery Charges and the Sales Tax will be calculated in the Checkout Page`}</p>
       </div>
      </div>
    </div>
  )
}

export default CartPage
