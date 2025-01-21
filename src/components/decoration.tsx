import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import frame2 from "../../public/frame2.png";
import frame3 from "../../public/frame3.png";

export const Decoration = () => {
  return (
    <div className="sm:flex sm:justify-center sm:mt-16">
      <div className="bg-light flex flex-col items-center mt-12 gap-10  sm:mt-0 sm:w-[1440px] sm:h-[670px] sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-0">
        <div className="ml-12">
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold">
            50+ Beautiful rooms <br /> inspiration
          </h2>
          <br />
          <p className="font-semibold text-gray text-1xl">
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
          <button className="bg-myColor h-[48px] w-[176px] text-center font-semibold mt-9  text-white hover:bg-white hover:text-myColor">
            Explore More
          </button>
        </div>
        <div className="photo w-[404px] h-[582px]">
          <div className="flex sm:items-end ml-7 mt-[400px]">
            <div className="bg-white w-[217px] h-[130px]">
              <h1 className="text-gray font-semibold text-center mt-6">
                01--Bed Room
              </h1>
              <br />
              <h1 className="text-2xl font-bold text-center text-black">
                Inner Peace
              </h1>
            </div>
            <div className="bg-myColor w-[48px] h-[48px] mt-20 flex justify-center items-center text-2xl text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="">
          <Image src={frame2} alt="pic" />
        </div>
        <div className="hidden">
          <Image src={frame3} alt="pic" />
        </div>
      </div>
    </div>
  );
};
