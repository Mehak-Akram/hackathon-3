import Link from "next/link";
import React from "react";

//Footer

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center  sm:h-[408px] sm:mt-32 sm:flex sm:flex-row sm:justify-around sm:items-start border-t-2 border-slate-300">
        <div className="sm:mt-12">
          <h1 className="text-center sm:text-start text-4xl font-extrabold text-black">
            Funiro.
          </h1>
          <br />
          <br />

          <h2 className="text-center sm:text-start font-semibold text-gray text-1xl">
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </h2>
        </div>
        <div className="sm:mt-12">
          <ul className=" sm:flex sm:flex-col sm:justify-between sm:gap-12 leading-9 font-semibold  ">
            <h1 className="text-gray">Links</h1>
            <Link href={"/"}>
              {" "}
              <li className="text-black">Home</li>
            </Link>{" "}
            <Link href={"/shop"}>
              {" "}
              <li className="text-black">Shop</li>
            </Link>
            <Link href={"/blog"}>
              {" "}
              <li className="text-black">Blog</li>
            </Link>{" "}
            <Link href={"/contact"}>
              {" "}
              <li className="text-black">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="sm:mt-12">
          <ul className="text-center sm:text-start  sm:flex sm:flex-col sm:justify-between sm:gap-14 leading-10 font-semibold">
            <h1 className="text-gray">Helps</h1>
            <li className="text-black">Payment Options</li>
            <li className="text-black">Returns</li>
            <li className="text-black">Privacy Policies</li>
          </ul>
        </div>

        <div className="sm:mt-12">
          <div>
            <h1 className="text-center sm:text-start text-gray font-semibold mt-4 sm:mt-0">
              Newsletter
            </h1>
            <br />
            <br />
            <div className="flex gap-4 mb-4 sm:mb-0 ">
              <h1 className="text-gray font-semibold border-b-2 border-black">
                Enter Your Email Address
              </h1>
              <h1 className="font-bold border-b-2 border-black text-black">
                SUBSCRIBE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-center">
        <hr className="sm:mt-8 sm:w-[1640px] sm:border-[1px] sm:border-slate-300" />
      </div>
      <h1 className="sm:ml-28  font-semibold mt-9 mb-9 text-center sm:text-start text-black">
        2025 furino. All rights reverved
      </h1>
    </div>
  );
};

export default Footer;
