import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import Image from "next/image";
import pic from "../../../public/pic.png";
import dot from "../../../public/dot.png";
import square from "../../../public/square.png";
import Support from "../../components/sevices";
import ShopCard from "@/components/shopProduct";

const Shop = () => {
  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center"></div>{" "}
          <h1 className="  text-3xl sm:text-5xl font-bold text-center text-black">Shop</h1>
          <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl" />
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className="bg-cream2 sm:h-[100px] sm:flex sm:items-center sm:justify-around py-3">
        <div className="flex justify-between items-center sm:flex sm:items-center sm:gap-7">
          <Image src={pic} alt="pic" />
          <h1 className="text-xl text-black">Filter</h1>
          <Image src={dot} alt="pic" />
          <Image src={square} alt="pic" />
          <div className="text-3xl font-bold text-gray">|</div>
          <p className="text-black">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex justify-between gap-5 items-center mt-10 sm:mt-0 sm:flex sm:items-center sm:gap-7">
          <h1 className="text-xl">Show</h1>
          <div className="bg-white h-[44px] w-[55px] text-gray flex justify-center items-center">
            {" "}
            16
          </div>
          <h1 className="text-xl">Short by</h1>
          <div className="bg-white w-[120px] h-[44px] sm:w-[188px] text-gray flex justify-center items-center">
            {" "}
            Default
          </div>
        </div>
      </div>
      <ShopCard />
      <div className="flex justify-center gap-5 mt-11">
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center text- hover:text-white">
          {" "}
          1
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          2
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          3
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[98px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          Next
        </div>
      </div>
      <Support />
    </div>
  );
};

export default Shop;
