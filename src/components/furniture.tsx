import React from "react";
import Image from "next/image";
import frame4 from "../../public/frame4.png";
import Rectangle38 from "../../public/Rectangle 38.png";
import Rectangle39 from "../../public/Rectangle 39.png";
import dining from "../../public/dining1.png";
import Rectangle37 from "../../public/Rectangle 37.png";
import Rectangle41 from "../../public/Rectangle 41.png";
import Rectangle43 from "../../public/Rectangle 43.png";
import Rectangle44 from "../../public/Rectangle 44.png";
import Rectangle45 from "../../public/Rectangle 45.png";

function Furniture() {
  return (
    <div className="sm:flex sm:justify-center mt-16">
      <div className=" sm:w-[1540px] sm:h-[980px]">
        <p className="font-semibold text-gray text-1xl text-center">
          Share your setup with
        </p>
        <h1 className="text-center text-3xl font-extrabold">
          #FuniroFurniture
        </h1>
        <div className=" mt-6 ">
          <div className="flex">
            <div>
              <div className="flex flex-col items-center sm:flex sm:flex-row gap-2">
                <Image src={frame4} alt="pic" className=" " />
                <Image src={Rectangle38} alt="pic" className="sm:h-[312px]" />
              </div>
              <div className="sm:flex sm:gap-2 ">
                <Image src={Rectangle37} alt="pic" className="sm:h-[323px]" />
                <Image src={Rectangle39} alt="pic" className="sm:h-[242px]" />
              </div>
            </div>

            <Image
              src={dining}
              alt="pic"
              className=" ml-2 mt-36  h-[200px] sm:h-[392px] sm:w-[295px]  "
            />
            <div className="ml-2">
              <div className="flex  flex-wrap items-center sm:flex sm:flex-row gap-2">
                <Image src={Rectangle43} alt="pic" className="" />
                <Image src={Rectangle45} alt="pic" className="mb-5" />
              </div>
              <div className="sm:flex sm:gap-2">
                <Image src={Rectangle41} alt="pic" className="" />
                <Image src={Rectangle44} alt="pic" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
