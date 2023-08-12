import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-myColor body-font w-full mx-auto px-4 sm:px-10">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-700  hover:text-orange-600 hover:animate-bounce duration-500">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-700 hover:text-orange-600 hover:animate-bounce duration-500">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Marketing
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-700  hover:text-orange-600 hover:animate-bounce duration-500">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Term of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Privecy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-700 hover:text-orange-600 hover:animate-bounce duration-500">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="text-xs font-semibold tracking-tight text-gray-700 hover:text-gray-500"
                  >
                    your Email Here!
                  </label>
                  <div className="flex justify-center">
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-100 mt-3 lg:w-full md:w-full bg-myColor rounded border bg-opacity-40 
                                border-gray-500 focus:bg-transparent focus:ring-2
                                focus:ring-orange-800 focus:border-orange-500 
                                  text-base outline-none text-gray-700 py-1 px-3 
                                  leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <button className="mt-3 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-myColor bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  Get Notified
                </button>
              </div>
              <p className="mt-2 md:text-left text-center text-sm font-semibold tracking-tight text-gray-700 hover:text-gray-500">
                Spacializes in providing high-quality
                <br className="lg:block hidden" />
                product for your wardrobe
              </p>
            </div>
          </div>
        </div>
        <div className="bg-myColor bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              href={"#"}
              className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-500"
            >
              <Link
                href={"#"}
                className="normal-case text-2xl font-[Poppins] cursor-pointer text-orange-600 hidden lg:block "
              >
                <Image
                  className="h-8 w-10 inline transform transition-transform hover:-translate-y-2 duration-300"
                  src={Logo}
                  alt="logo"
                />
                Urban Mart
              </Link>
              <Link
                href={"#"}
                className=" normal-case text-2xl font-[Poppins] cursor-pointer text-orange-600 block lg:hidden"
              >
                <Image
                  className="h-8 w-10 inline hover:-translate-y-1 transition-transform"
                  src={Logo}
                  alt="logo"
                />
                Urban Mart
              </Link>
            </Link>
            <p className="text-sm sm:ml-6 sm:mt-0 mt-4 md:text-left text-center font-semibold tracking-tight text-gray-700 hover:text-gray-500 neutral-content">
              © 2023 Urban Mart by @Zabihash —
              <Link
                href="https://tailwindcss-and-nextjs-portfolio-blond.vercel.app"
                className="text-gray-500 ml-1 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hackathon-Pro
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link
                className="text-blue-600 transform transition-transform hover:-translate-y-2 duration-300"
                href={"#"}
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                href={"#"}
                className="ml-3 text-blue-400 transform transition-transform hover:-translate-y-2 duration-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                href={"#"}
                className="ml-3 text-red-400 transform transition-transform hover:-translate-y-2 duration-300"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link
                href={"#"}
                className="ml-3 text-blue-500 transform transition-transform hover:-translate-y-2 duration-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
