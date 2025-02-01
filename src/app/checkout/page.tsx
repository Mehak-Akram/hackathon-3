"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useCart } from "../../components/CartContext";
import Sevices from "@/components/sevices";
import logo from "../../../public/logo.png";

const Checkout = () => {
  const { checkoutItems } = useCart();

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Sri Lanka",
    address: "",
    city: "",
    province: "Western Province",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex-row sm:justify-center leading-9">
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} alt="logo" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-center text-black">
            Checkout
          </h1>
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              <p className="font-bold text-black">Home</p>
            </Link>
            <RiArrowDropRightLine className="text-3xl font-bold" />
            <p className="text-black">Checkout</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-auto w-[1100px] my-10 sm:flex sm:gap-10">
          <div className="sm:w-[608px] px-6 py-10 sm:py-20 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Billing details
            </h1>

            <div className="sm:flex sm:gap-7 mt-10">
              <div className="flex flex-col">
                <label className="font-bold text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleChange}
                  className="sm:h-[75px] sm:w-[211px] bg-transparent border border-gray rounded-lg px-3 py-3 "
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-black">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={billingDetails.lastName}
                  onChange={handleChange}
                  className="sm:h-[75px] sm:w-[211px] bg-transparent border border-gray rounded-lg px-3 py-3 "
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={billingDetails.company}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
              />
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">Country / Region</label>
              <select
                name="country"
                value={billingDetails.country}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
              >
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Turkey">Turkey</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">Street Address</label>
              <input
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                required
              />
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">City</label>
              <input
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                required
              />
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">Province</label>
              <select
                name="province"
                value={billingDetails.province}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
              >
                <option value="Western Province">Western Province</option>
                <option value="Eastern Province">Eastern Province</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={billingDetails.zip}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                required
              />
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">Phone</label>
              <input
                type="text"
                name="phone"
                value={billingDetails.phone}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                required
              />
            </div>

            <div className="mt-4">
              <label className="font-bold text-black">Email Address</label>
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleChange}
                className=" sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                required
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="sm:w-[608px] flex justify-center items-center">
            <div className="sm:w-[533px] p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-black">
                Order Summary
              </h2>
              {checkoutItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty!</p>
              ) : (
                checkoutItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between border-b pb-2 mt-3"
                  >
                    <p>
                      {item.title} × {item.quantity}
                    </p>
                    <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))
              )}

              <div className="flex justify-between text-lg font-bold mt-4">
                <p>Total</p>
                <p className="text-myColor text-2xl font-bold">
                  Rs. {total.toLocaleString()}
                </p>
              </div>

              <button
                onClick={placeOrder}
                className="w-full mt-6 py-3 text-xl bg-myColor text-white rounded-xl hover:bg-gray-800 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Sevices />
    </div>
  );
};

export default Checkout;
