"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NavigationMenuDemo } from "./navlink";
import Image from "next/image";
import Logo from "../../public/Logo.jpg";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-myColor w-full mx-auto px-4 sm:px-10  shadow rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu className="text-gray-800" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow
              bg-orange-400 text-gray-700 text-sm font-semibold tracking-tight rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>New arrival</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/tops"}>Tops</Link>
                    </li>
                    <li>
                      <Link href={"/pants"}>Pants</Link>
                    </li>
                    <li>
                      <Link href={"/accessories"}>Asessories/Jwelry</Link>
                    </li>
                    <li>
                      <Link href={"/shoes"}>Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="normal-case text-2xl font-[Poppins] cursor-pointer
             text-orange-500 hover:text-orange-700 hidden lg:block "
          >
            <Image className="h-8 w-10 inline ml-4" src={Logo} alt="logo" />
            Urban Mart
          </Link>
        </div>
        <div className="navbar-center">
          <Link
            href={"/"}
            className=" normal-case text-2xl font-[Poppins] cursor-pointer
             text-orange-500 hover:text-orange-700 block lg:hidden"
          >
            <Image className="h-8 w-10 inline" src={Logo} alt="logo" />
            Urban Mart
          </Link>
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div></div>
        <div className="navbar-end pr-4 ">
          <Link href={"/cart"}>
            <label
              tabIndex={0}
              className="pr-4 cursor-pointer group text-gray-800"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-orange-500 duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="badge badge-sm indicator-item group-hover:text-white group-hover:bg-slate-500 duration-300 font-semibold bg-orange-400">
                    {cart.length}
                  </span>
                )}
              </div>
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
