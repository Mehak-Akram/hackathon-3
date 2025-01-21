import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Sevices from "../../components/sevices";

const Contact = () => {
  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="  text-3xl sm:text-5xl font-bold text-center text-black">
            Contact
          </h1>
          <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold text-black">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl text-black" />
            <p className="text-gray">Contact</p>
          </div>
        </div>
      </div>
      <div className=" sm:h-[1144px]">
        <div className="mt-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center mt-8 text-black">
            Get In Touch With Us
          </h1>
          <br />
          <p className="text-gray text-center sm:mt-4 font-semibold">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </div>
        <div className="sm:flex sm:justify-center sm:gap-8 mt-20 sm:mt-0">
          <div className=" sm:h-[537px] sm:w-[393px] px-6 py-12 sm:mt-14">
            <div className="flex flex-col gap-11">
              <div>
                <div className="flex gap-3">
                  <FaLocationDot className="text-4xl text-black" />
                  <h1 className="text-2xl font-semibold text-black">Address</h1>
                </div>
                <p className="ml-9 text-black">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />
                  States
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <BiSolidPhone className="text-4xl text-black" />
                  <h1 className="text-2xl font-semibold text-black">Phone</h1>
                </div>
                <p className="ml-9 text-black">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <MdAccessTimeFilled className="text-4xl text-black" />
                  <h1 className="text-2xl font-semibold text-black">
                    Working Time
                  </h1>
                </div>
                <p className="ml-9 text-black">
                  Monday-Friday: 9:00 - <br /> 22:00 Saturday-Sunday: 9:00 -{" "}
                  <br />
                  21:00
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] sm:h-[923px] sm:w-[635px] sm:flex sm:flex-col sm:items-center sm:justify-center mt-10 sm:mt-0 ml-9 sm:ml-0">
            <div>
              <label htmlFor="name" className="font-bold text-black">
                Your name
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[50px] w-[290px] sm:h-[75px] sm:w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>

            <br />
            <br />
            <div>
              <label htmlFor="name" className="font-bold text-black">
                Email
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[50px] w-[290px] sm:h-[75px] sm:w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>

            <br />
            <br />
            <div>
              <label htmlFor="name" className="font-bold text-black">
                Subject
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[50px] w-[290px] sm:h-[75px] sm:w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>
            <br />
            <br />

            <div>
              <label htmlFor="msg" className="font-bold text-black">
                Message
              </label>
              <br />
              <br />
              <textarea
                className="h-[80px] w-[290px] sm:h-[120px] sm:w-[529px] bg-transparent border border-gray rounded-lg"
                id="msg"
                rows={6}
              ></textarea>
            </div>
            <div>
              <button className="bg-myColor w-[60px] h-[55px] sm:w-[237px] rounded-md text-center font-bold mt-11 sm:mt-7 text-white mr-72 hover:bg-black hover:text-myColor">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sevices />
    </div>
  );
};

export default Contact;
