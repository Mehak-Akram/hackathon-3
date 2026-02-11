"use client";

import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";
import { motion } from "framer-motion";

const Services = () => {
  const serviceItems = [
    {
      icon: <HiOutlineTrophy />,
      title: "High Quality",
      desc: "crafted from top materials",
      code: "PROTOCOL_01",
    },
    {
      icon: <BiSolidBadgeCheck />,
      title: "Warranty Protection",
      desc: "Over 2 years",
      code: "SECURE_ASSET",
    },
    {
      icon: <AiTwotoneWallet />,
      title: "Free Shipping",
      desc: "Order over 150 $",
      code: "LOGISTICS_VX",
    },
    {
      icon: <RiCustomerService2Line />,
      title: "24 / 7 Support",
      desc: "Dedicated support",
      code: "CORE_RELAY",
    },
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-black/5 py-12 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-6 px-4 lg:px-8 ${
                index !== serviceItems.length - 1
                  ? "lg:border-r border-black/5"
                  : ""
              } group hover:bg-white transition-all duration-300 py-6 rounded-xl lg:rounded-none`}
            >
              {/* --- ICON MODULE --- */}
              <div className="relative">
                <div className="text-4xl text-black group-hover:text-myColor transition-colors duration-300">
                  {service.icon}
                </div>
                {/* Technical Bracket Decor */}
                <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-myColor/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* --- TEXT MODULE --- */}
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-myColor tracking-[0.3em] font-bold mb-1">
                  {service.code}
                </span>
                <h1 className="text-xl font-black text-black tracking-tighter uppercase leading-none mb-1">
                  {service.title}
                </h1>
                <p className="text-xs font-medium text-slate-400 italic">
                  {service.desc}
                </p>
              </div>
              
              {/* Hidden System Line */}
              <div className="hidden lg:block absolute bottom-0 left-0 w-0 h-[2px] bg-myColor group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;