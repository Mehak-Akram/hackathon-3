"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useCart } from "../components/CartContext";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Tag, Hash } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  quantity: number;
}

const ShopCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url,
        tags,
        discountPercentage,
        description,
        isNew
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  const showToast = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 md:p-12 bg-white relative">
      <ToastContainer />
      
      {/* --- SYSTEM STATUS BAR --- */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-myColor uppercase mb-2">
            <Hash size={12} />
            Shop
          </div>
          <h1 className="text-4xl font-black text-black tracking-tighter uppercase italic">
            Architectural <span className="text-myColor">Shop</span>
          </h1>
        </div>
        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-black/5">
          Results_Found: {products.length} Units
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col bg-white border border-black/5 rounded-xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Visual Header */}
            <div className="relative h-[380px] w-full overflow-hidden bg-slate-100">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </Link>

              {/* HUD Elements */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discountPercentage > 0 && (
                  <div className="bg-myColor text-white text-[10px] font-mono font-bold px-3 py-1 rounded-sm shadow-xl">
                    -{product.discountPercentage}%_RED
                  </div>
                )}
              </div>

              {/* Action Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                <Link href={`/product/${product._id}`} className="bg-white p-3 rounded-full hover:bg-myColor hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                  <Eye size={20} />
                </Link>
                <button 
                  onClick={() => { addToCart(product); showToast(`System: ${product.title} Added`); }}
                  className="bg-white p-3 rounded-full hover:bg-myColor hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>

              {/* Scanning Line Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-myColor/10 to-transparent h-1/2 w-full -top-full group-hover:top-full transition-all duration-[1.5s] ease-linear pointer-events-none" />
            </div>

            {/* Technical Metadata */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-black text-black tracking-tight uppercase leading-none truncate pr-2">
                  {product.title}
                </h2>
                <div className="text-right">
                  <p className="text-lg font-mono font-bold text-myColor leading-none">
                    ${product.price}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2 italic">
                {product.description}
              </p>

              <div className="mt-auto pt-4 border-t border-black/5 flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest border border-black/5 px-2 py-1 rounded hover:bg-myColor/5 hover:text-myColor transition-colors">
                    <Tag size={8} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button: Deployment Command */}
              <button
                className="group/btn relative w-full h-[54px] bg-black text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden rounded-lg transition-transform active:scale-95"
                onClick={() => {
                  addToCart(product);
                  showToast(`Asset Allocated: ${product.title}`);
                }}
              >
                <div className="absolute inset-0 bg-myColor translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ShoppingCart size={14} />
                  <span>Add_To_Cart</span>
                </div>
              </button>
            </div>

            {/* Corner Bracket (Bottom Right Decoration) */}
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-black/10 rounded-br-lg pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;