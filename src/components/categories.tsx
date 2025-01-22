import React from "react";
import Image from "next/image";
import Link from "next/link";
import bed from "../../public/bed.jpeg";
import office from "../../public/office.jpeg";
import living from "../../public/living-room.jpeg";
import dinning from "../../public/dinning.jpeg";

const Categories = () => {
  return (
    <div className=" mb-[90px] mt-[90px]">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-center text-black">
          Browse The Range
        </h1>
        <br />
        <p className="text-center text-gray sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shop"}>
            <Image
              src={bed}
              alt={"bed"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Bedroom Furniture</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Bedroom Furniture</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shop"}>
            <Image
              src={living}
              alt={"living-room"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className=" hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Living-Room</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Living-Room</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shop"}>
            <Image
              src={office}
              alt={"Office"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Office Furniture</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Office Furniture</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shop"}>
            <Image
              src={dinning}
              alt={"product"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Dinning-Room</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myColor/70 text-center text-myWhite w-full">
              <h1>Dinning-Room</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
