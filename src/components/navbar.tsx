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
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-black/5 h-[88px] sm:h-[100px]">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        
        {/* --- LOGO: WITH ROTATING BOX HOVER --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-10 h-10 flex items-center justify-center border-2 border-black/10 rounded-lg group-hover:border-myColor group-hover:shadow-[0_0_15px_rgba(184,142,47,0.2)] transition-all duration-500"
          >
            <Image src={logo} alt="logo" className="w-6 h-6 object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-black tracking-tighter uppercase leading-none">
              Furniro
            </h1>
            <span className="text-[8px] font-mono text-myColor tracking-[0.3em] uppercase">Architecture_Core</span>
          </div>
        </Link>

        {/* --- DESKTOP NAV: SLIDING LINE HOVER --- */}
        <ul className="hidden md:flex items-center gap-10 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black">
          {["Home", "Shop", "Blog", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link 
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-myColor transition-colors duration-300 py-2 block"
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">
                  {item}
                </motion.span>
                {/* Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-myColor transition-all duration-500 ease-out group-hover:w-full" />
                {/* Ghost text effect for depth */}
                <span className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-10 group-hover:top-0 group-hover:left-0 transition-all duration-500 text-myColor pointer-events-none">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* --- ACTION TERMINAL: MAGNETIC ICON HOVER --- */}
        <div className="hidden md:flex items-center gap-4 text-black">
          {[
            { Icon: IoSearchOutline, link: "#", type: "search" },
            { Icon: GoHeart, link: "/" },
            { Icon: MdOutlineShoppingCart, link: "/cart", badge: cartItemCount },
            { Icon: BsPersonExclamation, link: "/", border: true }
          ].map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2 cursor-pointer transition-colors hover:text-myColor ${action.border ? "border-l border-black/10 pl-4" : ""}`}
            >
              <Link href={action.link}>
                <action.Icon size={22} />
                {action.badge !== undefined && action.badge > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-myColor border-2 border-white text-white text-[9px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg"
                  >
                    {action.badge}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE TRIGGER: ROTATING ICON --- */}
        <div className="md:hidden">
           <motion.button 
             whileTap={{ scale: 0.8 }}
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="text-black relative z-[110]"
           >
             <AnimatePresence mode="wait">
               {isMenuOpen ? (
                 <motion.div
                   key="close"
                   initial={{ rotate: -90, opacity: 0 }}
                   animate={{ rotate: 0, opacity: 1 }}
                   exit={{ rotate: 90, opacity: 0 }}
                 >
                   <AiOutlineClose size={28} />
                 </motion.div>
               ) : (
                 <motion.div
                   key="menu"
                   initial={{ rotate: 90, opacity: 0 }}
                   animate={{ rotate: 0, opacity: 1 }}
                   exit={{ rotate: -90, opacity: 0 }}
                 >
                   <AiOutlineMenu size={28} />
                 </motion.div>
               )}
             </AnimatePresence>
           </motion.button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY: STAGGERED LIST --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] md:hidden p-10 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {["Home", "Shop", "Blog", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter hover:text-myColor flex items-center gap-4 group"
                  >
                    <span className="text-sm font-mono text-black/20 group-hover:text-myColor transition-colors">0{i+1}</span>
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;