"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaMinus, FaPlus, FaStar, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Recentproduct from "@/components/recentProduct";
import { useCart } from "@/components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import { client } from "@/sanity/lib/client";
import { ShoppingCart, Layers, Ruler, Palette, ChevronRight } from "lucide-react";

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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    const fetchProductDetail = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0] {
          _id, title, price, description, discountPercentage,
          "imageUrl": productImage.asset->url, tags
        }`;
        const data = await client.fetch(query, { id });
        setProduct(data);
      } catch (error) {
        console.error("Error Fetching Product:", error);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center font-mono">LOADING_ASSET_DATA...</div>;

  const showToast = (message: string) => {
    toast.dark(message, { position: "bottom-right", autoClose: 2000 });
  };

  return (
    <div className="bg-white min-h-screen">
      <ToastContainer />
      
      {/* --- BREADCRUMB --- */}
      <div className="bg-slate-50 py-4 border-b border-black/5">
        <div className="container mx-auto px-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">
          <span>Home</span> <ChevronRight size={12} />
          <span>Shop</span> <ChevronRight size={12} />
          <span className="text-black font-bold italic">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: VISUAL PROJECTION --- */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 group shadow-2xl"
            >
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-myColor animate-pulse" />
                <span className="font-mono text-[9px] font-bold tracking-widest text-black uppercase">Asset_View_01</span>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: SPECIFICATION PANEL --- */}
          <div className="lg:col-span-5 space-y-10">
            <header>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-myColor text-sm">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                    Customer Reviews
                </span>
              </div>
              <h1 className="text-5xl font-black text-black tracking-tighter uppercase italic leading-none mb-4">
                {product.title}
              </h1>
              <p className="text-4xl font-light text-myColor tracking-tighter italic">
                ${product.price.toLocaleString()}
              </p>
            </header>

            <p className="text-slate-500 font-medium italic border-l-4 border-myColor/20 pl-6 leading-relaxed">
              {product.description}
            </p>

            {/* Configurator: Size */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <Ruler size={14} /> Dimensional_Scale
              </div>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <button key={size} className="w-12 h-12 rounded-xl border border-black/5 bg-slate-50 hover:bg-black hover:text-white transition-all font-mono text-xs font-bold">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Configurator: Color */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <Palette size={14} /> Chroma_Selection
              </div>
              <div className="flex gap-4">
                {["#8b5cf6", "#000000", "#B88E2F"].map((color) => (
                  <button key={color} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform" />
                ))}
              </div>
            </div>

            {/* Interaction Module */}
            <div className="pt-10 flex flex-wrap gap-4 border-t border-black/5">
              <div className="flex items-center bg-slate-50 rounded-2xl border border-black/5 p-2">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-12 h-12 flex items-center justify-center hover:text-myColor transition-colors">
                  <FaMinus size={12} />
                </button>
                <span className="w-12 text-center font-mono font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:text-myColor transition-colors">
                  <FaPlus size={12} />
                </button>
              </div>

              <button 
                onClick={() => {
                  addToCart({ ...product, quantity });
                  showToast(`Asset added to manifest.`);
                }}
                className="flex-1 min-w-[200px] h-[64px] bg-black text-white rounded-2xl font-mono text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-myColor transition-colors flex items-center justify-center gap-3 group"
              >
                <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
                Add To Cart
              </button>

              <button className="w-16 h-[64px] flex items-center justify-center border border-black/10 rounded-2xl hover:bg-slate-50 transition-colors">
                <FaShareAlt className="text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* --- TECHNICAL DOCUMENTATION TABS --- */}
        <div className="mt-32">
          <div className="flex justify-center gap-12 border-b border-black/5 mb-12">
            {["description", "additional information", "reviews [5]"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-mono text-[10px] uppercase tracking-[0.3em] font-black transition-all ${activeTab === tab ? "text-myColor border-b-2 border-myColor" : "text-slate-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-500 font-medium italic leading-relaxed">
                {product.description}
              </p>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-black/5 space-y-4">
                <div className="flex items-center gap-2 text-myColor">
                  <Layers size={16} /> <span className="font-mono text-[10px] font-bold tracking-widest uppercase">Structural_Specs</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                  <div className="text-slate-400">Primary_Material:</div> <div className="text-black italic">Solid Oak / Fabric</div>
                  <div className="text-slate-400">Assembly_Logic:</div> <div className="text-black italic">Pre-Integrated</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg">
                <Image src={product.imageUrl} alt="sub" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg mt-8">
                <Image src={product.imageUrl} alt="sub" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Recentproduct />
    </div>
  );
};

export default ProductDetail;