"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import { Plus, Tag, ArrowUpRight, Sparkles } from "lucide-react";

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

const RecentProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"][0..3] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url,
        tags,
        discountPercentage,
        description
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  const showToast = (message: string) => {
    toast.success(message, {
      position: "bottom-right", // Adjusted to not block headers
      autoClose: 2000,
      theme: "dark",
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-20 relative">
      <ToastContainer />
      
      {/* --- HEADER MODULE --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-myColor" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
              Discovery_Relay
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-none">
            Related <span className="text-myColor">Products</span>
          </h1>
        </div>
        
        <Link href="/shop" className="group flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
          View_All_Assets <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-myColor" />
        </Link>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white border border-black/5 rounded-[2rem] overflow-hidden p-3 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-50">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              
              {/* Technical Overlay Label */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-myColor animate-pulse" />
                <span className="font-mono text-[8px] font-bold tracking-widest text-black">REL_ID: {product._id.slice(-4)}</span>
              </div>

              {product.discountPercentage > 0 && (
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full font-mono text-[10px] font-bold">
                  -{product.discountPercentage}%
                </div>
              )}
            </div>

            {/* Content Module */}
            <div className="mt-6 px-2 pb-2">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-black text-black uppercase tracking-tight italic">
                  {product.title}
                </h2>
                <span className="text-lg font-bold text-myColor">
                  ${product.price}
                </span>
              </div>

              <p className="text-xs text-slate-400 font-medium line-clamp-2 italic mb-4">
                {product.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>

              {/* Technical Interaction Button */}
              <button
                onClick={() => {
                  addToCart(product);
                  showToast(`Asset added to queue.`);
                }}
                className="w-full relative group/btn flex items-center justify-center gap-3 bg-slate-50 border border-black/5 py-4 rounded-xl overflow-hidden transition-all hover:bg-black"
              >
                <div className="absolute inset-0 bg-myColor translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300 opacity-20" />
                <Plus size={16} className="text-myColor group-hover/btn:rotate-90 transition-transform" />
                <span className="relative z-10 font-mono text-[10px] font-bold uppercase tracking-widest text-black group-hover/btn:text-white">
                  Add To Cart
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="flex justify-center mt-20">
        <Link href="/shop" className="relative group overflow-hidden px-12 py-5 rounded-2xl border-2 border-black">
          <div className="absolute inset-0 bg-myColor translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 font-mono text-[11px] font-black uppercase tracking-[0.3em] text-black group-hover:text-white transition-colors">
            Show More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RecentProduct;