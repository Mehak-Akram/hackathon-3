"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { BsPersonExclamation } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

//Navbar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="bg-white h-[88px] sm:h-[100px]  sm:bg-white  flex justify-between  items-center  sm:flex sm:justify-around sm:items-center">
        <div className=" flex text-2xl font-extrabold ml-2 sm:flex sm:items-center sm:gap-1 sm:text-3xl sm:font-extrabold">
          <Image src={logo} alt="logo" className="" />
          <h1 className="text-black">Furniro</h1>
        </div>

        <ul className=" sm:flex sm:justify-between sm:font-semibold hidden sm:w-[430px] text-black">
          <Link href={"/"}>
            {" "}
            <li className="hover:text-myColor">Home</li>
          </Link>{" "}
          <Link href={"/shop"}>
            {" "}
            <li className="hover:text-myColor">Shop</li>
          </Link>
          <Link href={"/blog"}>
            {" "}
            <li className="hover:text-myColor">Blog</li>
          </Link>{" "}
          <Link href={"/contact"}>
            {" "}
            <li className="hover:text-myColor">Contact</li>
          </Link>{" "}
        </ul>
        <div className="hidden sm:flex sm:gap-8 sm:text-4xl text-black">
          <Link href={"/cart"}>
            <BsPersonExclamation className="hover:text-myColor" />
          </Link>
          <Link href={"/cart"}>
            <IoSearchOutline className="hover:text-myColor" />
          </Link>
          <Link href={"/cart"}>
            <GoHeart className="hover:text-myColor" />
          </Link>
          <Link href={"/cart"}>
            <MdOutlineShoppingCart className="hover:text-myColor" />
          </Link>{" "}
        </div>
        <div className="md:hidden text-black" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </header>
      {isMenuOpen && (
        <ul className="felx flex-col text-xl px-3 gap-8 mt-4 font-semibold md:hidden text-myColor">
          <Link href={"/"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Home</li>
          </Link>{" "}
          <Link href={"/shop"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Shop</li>
          </Link>
          <Link href={"/blog"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Blog</li>
          </Link>{" "}
          <Link href={"/contact"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Contact</li>
          </Link>{" "}
          <div className="flex gap-10 justify-center sm:flex sm:gap-8  mt-4 sm:mt-0 text-4xl">
            <Link href={"/cart"} onClick={toggleMenu}>
              <BsPersonExclamation />
            </Link>
            <Link href={"/cart"} onClick={toggleMenu}>
              <IoSearchOutline />
            </Link>
            <Link href={"/cart"} onClick={toggleMenu}>
              <GoHeart />
            </Link>
            <Link href={"/cart"} onClick={toggleMenu}>
              <MdOutlineShoppingCart />
            </Link>{" "}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
