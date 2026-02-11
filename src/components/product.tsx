"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Tag, ArrowUpRight } from "lucide-react";

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

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"][0..7] {
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
    <div className="py-20 px-6 relative bg-white overflow-hidden">
      <ToastContainer />
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase">
          Our <span className="text-myColor">Products</span>
        </h1>
        <div className="w-20 h-[2px] bg-black/5" />
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-slate-50 border border-black/5 overflow-hidden rounded-xl transition-all hover:shadow-2xl hover:border-myColor/30"
          >
            {/* Image Container */}
            <div className="relative h-[320px] w-full overflow-hidden bg-white">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
              </Link>
              
              {/* Discount Tag - Tech Style */}
              {product.discountPercentage > 0 && (
                <div className="absolute top-4 left-4 z-20 bg-myColor text-white font-mono text-[10px] font-bold px-3 py-1 rounded-sm shadow-lg">
                  -{product.discountPercentage}%_OFF
                </div>
              )}

              {/* Quick Actions Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                 <Link href={`/product/${product._id}`} className="p-3 bg-white text-black rounded-full hover:bg-myColor hover:text-white transition-colors">
                    <Eye size={20} />
                 </Link>
                 <button 
                  onClick={() => {
                    addToCart(product);
                    showToast(`${product.title} added to system`);
                  }}
                  className="p-3 bg-white text-black rounded-full hover:bg-myColor hover:text-white transition-colors"
                >
                    <ShoppingCart size={20} />
                 </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-black text-black tracking-tight uppercase line-clamp-1">
                  {product.title}
                </h2>
                <span className="font-mono text-sm font-bold text-myColor">
                  ${product.price}
                </span>
              </div>

              <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 italic">
                {product.description}
              </p>

              {/* Tags Area */}
              <div className="flex flex-wrap gap-2 pt-2">
                {product.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="flex items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest border border-black/5 px-2 py-1 rounded">
                    <Tag size={8} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Action Button */}
              <button
                className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-lg font-mono text-[10px] uppercase tracking-[0.2em] overflow-hidden relative group/btn transition-all active:scale-95"
                onClick={() => {
                  addToCart(product);
                  showToast(`Session: ${product.title} initialized`);
                }}
              >
                <div className="absolute inset-0 bg-myColor translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">Add_To_Cart</span>
                <ShoppingCart size={14} className="relative z-10" />
              </button>
            </div>

            {/* Corner Bracket Decor */}
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-black/10 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* --- LOAD MORE SECTION --- */}
      <div className="flex justify-center mt-16">
        <Link href="/shop">
          <button className="group relative flex items-center gap-4 px-10 py-5 border-2 border-myColor text-myColor font-mono text-xs font-bold uppercase tracking-[0.3em] hover:text-white transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-myColor translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Show More</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;