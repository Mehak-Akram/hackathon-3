"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbTrashFilled } from "react-icons/tb";
import { useCart } from "../../components/CartContext";
import Sevices from "../../components/sevices";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const Cart = () => {
  const usingRount = useRouter();
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total: number, item: CartItem) => total + item.price,
    0
  );

  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-center text-black">
              Cart
            </h1>
          </div>
          <div className="flex items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold text-black">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl text-black" />
            <p className="text-gray">Cart</p>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:justify-center">
        <div className="sm:w-[1440px] sm:flex sm:gap-5 mt-20">
          <div className="sm:w-[817px]">
            <div className="bg-cream2 sm:h-[55px]">
              <ul className="flex justify-around items-center font-semibold text-black h-[55px]">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>

            {cart.length === 0 ? (
              <p className="text-center text-gray mt-10">Your cart is empty!</p>
            ) : (
              cart.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-around items-center sm:flex sm:justify-around sm:items-center mt-4"
                >
                  <div>
                    <Link href={`/product/${item._id}`}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="bg-cream2 rounded-lg h-[105px] w-[105px] flex justify-center items-center"
                      />
                    </Link>
                  </div>
                  <h1 className="text-gray">{item.title}</h1>
                  <h1 className="text-black">
                    Rs. {item.price.toLocaleString()}
                  </h1>
                  <div className="h-[32px] w-[32px] border-[1px] border-gray rounded-lg flex justify-center items-center">
                    1
                  </div>
                  <h1 className="text-black">
                    Rs. {item.price.toLocaleString()}
                  </h1>
                  <button
                    className="font-bold text-3xl text-myColor"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <TbTrashFilled />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bg-cream2 h-[350px] sm:h-[390px] w-[393px] mb-6">
            <h1 className="text-4xl font-bold text-center mt-6 text-black">
              Cart Totals
            </h1>
            <br />
            <br />
            <div className="flex justify-around mt-3">
              <h1 className="font-semibold text-black">Subtotal</h1>
              <h1 className="text-gray">Rs. {subtotal.toLocaleString()}</h1>
            </div>
            <br />
            <div className="flex justify-around mt-3">
              <h1 className="font-semibold text-black">Total</h1>
              <h1 className="text-myColor text-2xl">
                Rs. {subtotal.toLocaleString()}
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => usingRount.push("/checkout")}
                className="h-[59px] w-[222px] border-[1px] border-black text-black text-center rounded-2xl text-2xl mt-16"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sevices />
    </div>
  );
};

export default Cart;
