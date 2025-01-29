"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { BsPersonExclamation } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useCart } from "../components/CartContext"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header className="bg-white h-[88px] sm:h-[100px] flex justify-between items-center sm:justify-around">
        <div className="flex text-2xl font-extrabold ml-2 sm:flex sm:items-center sm:gap-1 sm:text-3xl sm:font-extrabold">
          <Image src={logo} alt="logo" />
          <h1 className="text-black">Furniro</h1>
        </div>

        <ul className="hidden sm:flex sm:justify-between sm:font-semibold sm:w-[430px] text-black">
          <Link href={"/"}>
            <li className="hover:text-myColor">Home</li>
          </Link>
          <Link href={"/shop"}>
            <li className="hover:text-myColor">Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li className="hover:text-myColor">Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:text-myColor">Contact</li>
          </Link>
        </ul>

        <div className="hidden sm:flex sm:gap-8 sm:text-4xl text-black relative">
          <Link href={"/cart"}>
            <div className="relative">
              <MdOutlineShoppingCart className="hover:text-myColor" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-myColor border-[2px] border-black text-white text-sm rounded-full h-5 w-6 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
          <Link href={"/"}>
            <BsPersonExclamation className="hover:text-myColor" />
          </Link>
          <button onClick={toggleSearch} className="focus:outline-none">
            <IoSearchOutline className="hover:text-myColor" />
          </button>
          <Link href={"/"}>
            <GoHeart className="hover:text-myColor" />
          </Link>
        </div>

        <div className="md:hidden text-black" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </header>

      {isSearchOpen && (
        <div className="absolute top-[80px] right-20 w-[300px] bg-white px-4 py-2 rounded-lg shadow-md hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-myColor rounded-lg focus:outline-myColor focus:ring-2 focus:ring-myColor"
          />
        </div>
      )}

      {isMenuOpen && (
        <ul className="flex flex-col text-xl px-3 gap-8 mt-4 font-semibold md:hidden text-myColor">
          <Link href={"/"} onClick={toggleMenu}>
            <li className="my-3">Home</li>
          </Link>
          <Link href={"/shop"} onClick={toggleMenu}>
            <li className="my-3">Shop</li>
          </Link>
          <Link href={"/blog"} onClick={toggleMenu}>
            <li className="my-3">Blog</li>
          </Link>
          <Link href={"/contact"} onClick={toggleMenu}>
            <li className="my-3">Contact</li>
          </Link>
          <div className="flex gap-10 justify-center mt-4 text-4xl">
            <Link href={"/"} onClick={toggleMenu}>
              <BsPersonExclamation />
            </Link>
            <Link href={"/"}>
              <IoSearchOutline />
            </Link>
            <Link href={"/"}>
              <GoHeart />
            </Link>
            <Link href={"/cart"} onClick={toggleMenu}>
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
