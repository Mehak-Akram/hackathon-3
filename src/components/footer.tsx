"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cpu, Terminal, Globe, ShieldCheck } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState("");

  // Real-time clock logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour12: false, 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-black/10 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
        <Cpu size={300} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- BRAND SECTOR --- */}
          <div className="lg:col-span-4 space-y-6">
            <h1 className="text-4xl font-black text-black tracking-tighter uppercase italic">
              Furniro<span className="text-myColor">.</span>
            </h1>

            {/* Real-Time Terminal Status */}
            <div className="flex items-center gap-3 font-mono text-[10px] text-myColor bg-slate-50 self-start px-4 py-2 rounded-full border border-black/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-myColor opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-myColor"></span>
              </span>
              SYSTEM_TIME: {time}
            </div>
          </div>

          {/* --- LINKS SECTOR --- */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              Links_Registry
            </h3>
            <ul className="space-y-4">
              {["Home", "Shop", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-bold text-black uppercase tracking-tight hover:text-myColor transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-0 h-[1px] bg-myColor group-hover:w-3 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- HELP SECTOR --- */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              Support_Protocols
            </h3>
            <ul className="space-y-4 text-sm font-bold text-black uppercase tracking-tight">
              <li className="hover:text-myColor cursor-pointer transition-colors">Payment Options</li>
              <li className="hover:text-myColor cursor-pointer transition-colors">Returns</li>
              <li className="hover:text-myColor cursor-pointer transition-colors">Privacy Policies</li>
            </ul>
          </div>

          {/* --- NEWSLETTER SECTOR --- */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              Newsletter_Subscription
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                className="flex-1 bg-slate-50 border-b-2 border-black/10 focus:border-myColor px-2 py-3 text-xs font-mono outline-none transition-colors"
                placeholder="Enter Your Email Address"
              />
              <button className="group relative font-black text-[11px] tracking-widest text-black uppercase py-3 px-6 border-b-2 border-black hover:text-myColor transition-colors">
                <span className="relative z-10">Subscribe_</span>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-myColor group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>

        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            © 2025 furino. All rights reserved
          </p>
          
          <div className="flex gap-8 text-slate-300">
            <Globe size={16} className="hover:text-myColor cursor-pointer" />
            <ShieldCheck size={16} className="hover:text-myColor cursor-pointer" />
            <Terminal size={16} className="hover:text-myColor cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;