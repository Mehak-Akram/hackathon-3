"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Trash2, ShoppingBag, ReceiptText, ShieldCheck } from "lucide-react";
import { useCart } from "../../components/CartContext";
import Support from "../../components/sevices";

const Cart = () => {
  const router = useRouter();
  const { cart, removeFromCart, checkoutCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER: LEDGER MODULE --- */}
 <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">

        <br />

        <div>

          <h1 className="text-3xl sm:text-5xl font-bold text-center text-black">

            Cart

          </h1>

          <div className="flex items-center sm:justify-center">

            <Link href={"/"}>

              <p className="font-bold text-black">Home</p>

            </Link>

            <RiArrowDropRightLine className="font-bold text-3xl text-black" />

            <p className="text-gray">Cart</p>

          </div>

        </div>

      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: ITEM MANIFEST --- */}
          <div className="lg:col-span-8">
            <div className="hidden md:grid grid-cols-12 pb-6 border-b border-black/5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
              <div className="col-span-6">Asset_Description</div>
              <div className="col-span-2 text-center">Unit_Price</div>
              <div className="col-span-2 text-center">Qty</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            <div className="mt-8 space-y-6">
              <AnimatePresence mode="popLayout">
                {cart.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-black/5"
                  >
                    <ShoppingBag size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Manifest is currently empty.</p>
                  </motion.div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      layout
                      key={item._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-6 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:shadow-black/[0.02] transition-all group"
                    >
                      <div className="col-span-6 flex items-center gap-6">
                        <div className="relative w-24 h-24 shrink-0 bg-slate-50 rounded-xl overflow-hidden">
                          <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="text-lg font-black text-black uppercase tracking-tight italic">{item.title}</h3>
                          <span className="font-mono text-[9px] text-myColor uppercase tracking-widest font-bold">ID_{item._id.slice(-6)}</span>
                        </div>
                      </div>

                      <div className="col-span-2 text-center font-bold text-slate-400">
                        Rs. {item.price.toLocaleString()}
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <div className="px-4 py-2 bg-slate-50 rounded-lg font-mono text-xs font-black border border-black/5">
                          {item.quantity.toString().padStart(2, '0')}
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center justify-end gap-6">
                        <span className="font-black text-black italic">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          onClick={() => removeFromCart(item._id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- RIGHT: FINALIZATION MODULE --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-black p-10 rounded-[2.5rem] text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <ReceiptText size={20} className="text-myColor" />
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Cart_Summary</h2>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center text-slate-400 font-mono text-[10px] uppercase">
                  <span>Gross_Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 font-mono text-[10px] uppercase">
                  <span>Tax_Calculated</span>
                  <span>Rs. 0.00</span>
                </div>
                
                <div className="h-[1px] bg-white/10 my-6" />

                <div className="flex justify-between items-end">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-myColor font-bold mb-1">Final_Amount</span>
                  <span className="text-4xl font-black italic tracking-tighter">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    checkoutCart();
                    router.push("/checkout");
                  }}
                  className="w-full mt-10 py-6 bg-myColor hover:bg-white hover:text-black text-white font-black uppercase text-sm tracking-widest rounded-2xl transition-all duration-500 shadow-lg shadow-myColor/20"
                >
                  Confirm_Transaction
                </button>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3 text-slate-500">
                  <ShieldCheck size={16} />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Secure_Protocol_Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Support />
    </div>
  );
};

export default Cart;