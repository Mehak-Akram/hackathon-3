import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";

const Sevices = () => {
  return (
    <div>
      <div className=" flex flex-col sm:flex sm:flex-row sm:justify-center my-4">
        <div className="bg-cream2 h-[500px] sm:h-[270px] sm:w-[1440px] mt-16 flex flex-col justify-around sm:flex sm:flex-row items-center  sm:items-center sm:justify-around">
          <div className="flex text-black">
            <HiOutlineTrophy className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                High Quality
              </h1>

              <p className="text-gray">crafted from top materials</p>
            </div>
          </div>
          <div className="flex text-black">
            <BiSolidBadgeCheck className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                Warranty Protection
              </h1>

              <p className="text-gray">Over 2 years</p>
            </div>
          </div>
          <div className="flex text-black">
            <AiTwotoneWallet className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                Free Shipping
              </h1>

              <p className="text-gray">Order over 150 $</p>
            </div>
          </div>
          <div className="flex text-black">
            <RiCustomerService2Line className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                24 / 7 Support
              </h1>

              <p className="text-gray">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sevices;
