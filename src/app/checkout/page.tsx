import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { RiArrowDropRightLine } from "react-icons/ri";
import Sevices from "@/components/sevices";

const Checkout = () => {
  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="  text-3xl sm:text-5xl font-bold text-center">
            Checkout
          </h1>
          <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl" />
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" h-[1614px] w-[1100px] my-10 sm:flex sm:gap-10">
          <div className="sm:h-[1730px] sm:w-[608px]  px-6 py-10 sm:py-20">
            <h1 className="text-2xl sm:text-3xl font-bold">Billing details</h1>
            <div className="sm:flex sm:gap-7 mt-16">
              <div>
                <label htmlFor="name" className="font-bold">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  className=" sm:h-[75px] sm:w-[211px] bg-transparent border border-gray rounded-lg px-3 py-3"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold mt-3 sm:mt-0 ">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  className=" sm:h-[75px] sm:w-[211px] bg-transparent border border-gray rounded-lg mt-3 sm:mt-0 px-3 py-3"
                  id="name"
                />
              </div>
            </div>

            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Company Name (Optional)
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>

            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Country / Region
              </label>
              <br />
              <select
                name="country"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg text-gray px-3 py-3"
              >
                <option value="srilanka">Sri Lanka</option>
                <option value="pakistan">Pakistan</option>
                <option value="turkey">Turkey</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Street address{" "}
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>

            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Town / City{" "}
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>

            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Province{" "}
              </label>
              <br />
              <select
                name="province"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg text-gray px-3 py-3"
              >
                <option value="western province">Western Province</option>
                <option value="eastern province">Eastern Province</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                ZIP code{" "}
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Phone{" "}
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Email address{" "}
              </label>
              <br />
              <input
                type="text"
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                id="name"
              />
            </div>
            <br />
            <br />
            <input
              type="text"
              placeholder="Additional information"
              className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
              id="name"
            />
          </div>
          <div className="h-[789px] sm:w-[608px]  flex justify-center items-center">
            <div className=" sm:h-[616px] sm:w-[533px]">
              <div className="border-b-[1px] border-gray flex flex-col gap-5">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-2xl">Product</h1>
                  <h1 className="font-semibold text-2xl">Subtotal</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold  text-gray">Asgaard sofa x 1</h1>
                  <h1 className="">Rs. 250,000.00</h1>
                </div>{" "}
                <div className="flex justify-between">
                  <h1>Subtotal</h1>
                  <h1>Rs. 250,000.00</h1>
                </div>
                <div className="flex justify-between mb-4">
                  <h1>Total</h1>
                  <h1 className="text-myColor text-2xl font-bold">
                    Rs. 250,000.00
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-3 my-5 items-center">
                  <div className="bg-black rounded-full h-[14px] w-[14px]"></div>
                  <h1>Direct Bank Transfer</h1>
                </div>
                <p className="text-gray">
                  Make your payment directly into our bank account. Please use{" "}
                  <br /> your Order ID as the payment reference. Your order will
                  not be <br /> shipped until the funds have cleared in our
                  account.
                </p>
                <div className="flex gap-3 my-7 items-center">
                  <div className="border-[1px] border-gray rounded-full h-[14px] w-[14px]"></div>
                  <h1 className="text-gray">Direct Bank Transfer</h1>
                </div>
                <div className="flex gap-3 my-7 items-center">
                  <div className="border-[1px] border-gray rounded-full h-[14px] w-[14px]"></div>
                  <h1 className="text-gray">Cash On Delivery</h1>
                </div>
                <p className="text-gray">
                  Your personal data will be used to support your experience{" "}
                  <br /> throughout this website, to manage access to your
                  account, and <br /> for other purposes described in our{" "}
                  <span className="text-black font-semibold">
                    privacy policy
                  </span>
                  .
                </p>
              </div>
              <div className="flex justify-center mt-5">
                <button className="h-[64px] w-[318px] border-[1px] border-black text-center text-xl rounded-2xl">
                  Place order
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Sevices />
    </div>
  );
};

export default Checkout;
