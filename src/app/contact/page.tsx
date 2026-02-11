"use client";

import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Sevices from "../../components/sevices";

const Contact = () => {
  return (
    <div className="bg-white">

      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
             <br />
             <div>
               <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
                 <Image src={logo} alt="logo" className="" />
               </div>{" "}
               <h1 className="  text-3xl sm:text-5xl font-bold text-center text-black">Contact</h1>
               <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
                 <Link href={"/"}>
                   <p className="font-bold text-black">Home</p>
                 </Link>
                 <RiArrowDropRightLine className="font-bold text-3xl" />
                 <p className="text-black">Contact</p>
               </div>
             </div>
           </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">

        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tighter uppercase italic mb-6">
            Get In Touch With <span className="text-myColor">Our Studio</span>
          </h2>
          <p className="text-slate-500 font-medium italic leading-relaxed">
            For more information about our architectural assets & specialized services. 
            Our staff is available for technical support and design consultations. 
            Initialize communication via the terminal below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          

          <div className="lg:col-span-5 space-y-12">
            
            {/* Address */}
            <div className="group flex gap-6 p-8 rounded-3xl border border-black/5 hover:bg-slate-50 transition-all duration-500">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-myColor border border-black/5 group-hover:scale-110 transition-transform">
                <FaLocationDot size={24} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black mb-2">Location</h3>
                <p className="text-black font-bold italic leading-relaxed">
                  236 5th SE Avenue, XYZ <br /> NY10000, ABC
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex gap-6 p-8 rounded-3xl border border-black/5 hover:bg-slate-50 transition-all duration-500">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-myColor border border-black/5 group-hover:scale-110 transition-transform">
                <FaPhoneVolume size={24} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black mb-2">Phone</h3>
                <p className="text-black font-bold italic">Mobile: 12345678910</p>
                <p className="text-black font-bold italic">Hotline: 12345678910</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="group flex gap-6 p-8 rounded-3xl border border-black/5 hover:bg-slate-50 transition-all duration-500">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-myColor border border-black/5 group-hover:scale-110 transition-transform">
                <MdAccessTimeFilled size={24} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black mb-2">Time</h3>
                <p className="text-black font-bold italic">Mon-Fri: 09:00 - 22:00</p>
                <p className="text-black font-bold italic">Sat-Sun: 09:00 - 21:00</p>
              </div>
            </div>

          </div>

          {/* --- RIGHT: COMMUNICATION TERMINAL (FORM) --- */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black pl-2 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-myColor" /> Input_Identity
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-16 bg-slate-50 border border-black/5 rounded-2xl px-6 font-bold italic outline-none focus:border-myColor focus:ring-4 focus:ring-myColor/5 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black pl-2 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-myColor" /> Input_Comms_Link
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full h-16 bg-slate-50 border border-black/5 rounded-2xl px-6 font-bold italic outline-none focus:border-myColor focus:ring-4 focus:ring-myColor/5 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black pl-2 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-myColor" /> Inquiry_Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-16 bg-slate-50 border border-black/5 rounded-2xl px-6 font-bold italic outline-none focus:border-myColor focus:ring-4 focus:ring-myColor/5 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black pl-2 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-myColor " /> Message_Manifest
                </label>
                <textarea
                  placeholder="Describe your inquiry..."
                  rows={5}
                  className="w-full bg-slate-50 border border-black/5 rounded-2xl p-6 font-bold italic outline-none focus:border-myColor focus:ring-4 focus:ring-myColor/5 transition-all resize-none"
                />
              </div>

              <button className="w-full sm:w-auto h-20 px-12 bg-black text-white rounded-2xl font-mono text-xs font-black uppercase tracking-[0.3em] hover:bg-myColor transition-all group flex items-center justify-center gap-4">
                Submit
                <RiArrowDropRightLine className="text-3xl group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <Sevices />
    </div>
  );
};

export default Contact;