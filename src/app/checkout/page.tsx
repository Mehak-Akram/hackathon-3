"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useCart } from "../../components/CartContext";
import Sevices from "@/components/sevices";
import logo from "../../../public/logo.png";
import { client } from "../../sanity/lib/client";

interface BillingDetails {
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  SreetAddress: string;
  city: string;
  province: string;
  ZipCode: string;
  phone: string;
  EmailAddress: string;
}

const Checkout = () => {
  const { checkoutItems } = useCart();

  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: "",
    lastName: "",
    company: "",
    country: "Sri Lanka",
    SreetAddress: "",
    city: "",
    province: "Western Province",
    ZipCode: "",
    phone: "",
    EmailAddress: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(billingDetails).forEach((key) => {
      if (!billingDetails[key as keyof BillingDetails] && key !== "company") {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    if (validateForm()) {
      const orderData = {
        _type: "order",
        customerName: `${billingDetails.firstName} ${billingDetails.lastName}`,
        email: billingDetails.EmailAddress,
        phone: billingDetails.phone,
        address: `${billingDetails.SreetAddress}, ${billingDetails.city}, ${billingDetails.province}, ${billingDetails.country}`,
        totalAmount: total,
        items: checkoutItems.map((item) => ({
          _type: "item",
          _key: crypto.randomUUID(),
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
        status: "Pending",
      };
  
      try {
        await client.create(orderData);
        alert("Order placed successfully!");
      } catch (error) {
        console.error("Order placement failed:", error);
        alert("Something went wrong. Please try again.");
      }
    }
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
            {Object.keys(billingDetails).map((key) => (
              <div key={key} className="mt-4">
                <label className="font-bold text-black">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                {key === "country" || key === "province" ? (
                  <select
                    name={key}
                    value={billingDetails[key as keyof BillingDetails]}
                    onChange={handleChange}
                    className="sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                  >
                    {key === "country" ? (
                      <>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Turkey">Turkey</option>
                        <option value="USA">USA</option>
                      </>
                    ) : (
                      <>
                        <option value="Western Province">
                          Western Province
                        </option>
                        <option value="Eastern Province">
                          Eastern Province
                        </option>
                      </>
                    )}
                  </select>
                ) : (
                  <input
                    type={key === "EmailAddress" ? "email" : "text"}
                    name={key}
                    value={billingDetails[key as keyof BillingDetails]}
                    onChange={handleChange}
                    className="sm:h-[75px] sm:w-[453px] bg-transparent border border-gray rounded-lg px-3 py-3"
                  />
                )}
                {errors[key] && <p className="text-red-500">{errors[key]}</p>}
              </div>
            ))}
          </div>

          <div className="sm:w-[608px] flex justify-center items-center">
            <div className="sm:w-[533px] p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-black">
                Order Summary
              </h2>
              {checkoutItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty!</p>
              ) : (
                checkoutItems.map((item) => {
                  const imageUrl = item.imageUrl || "/default-placeholder.png"; 

                  if (!item.imageUrl) {
                    console.warn(`Missing image for item: ${item.title}`);
                  }

                  return (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 border-b pb-2 mt-3"
                    >
                      <Image
                        src={imageUrl}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/default-placeholder.png";
                        }}
                      />
                      <p>
                        {item.title} × {item.quantity}
                      </p>
                      <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  );
                })
              )}
              <div className="flex justify-between text-lg font-bold mt-4 text-black">
                <p>Total</p>
                <p className="text-myColor text-2xl font-bold">
                  Rs. {total.toLocaleString()}
                </p>
              </div>
              <button
                onClick={placeOrder}
                className="w-full mt-6 py-3 text-xl bg-myColor hover:bg-myColor/70 text-white rounded-xl hover:bg-gray-800 transition"
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
