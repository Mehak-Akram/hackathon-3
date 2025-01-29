"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import Recentproduct from "@/components/recentProduct";
import { useCart } from "@/components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";

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
  const [quantity, setQuantity] = useState(1); // State to track product quantity
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    const fetchProductDetail = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }`;
        const product = await client.fetch(query, { id });
        setProduct(product);
      } catch (error) {
        console.error("Error Fetching Product:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  const showToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Decrease quantity, but not below 1
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Toast Container */}
      <ToastContainer />

      <div className="flex flex-col sm:flex sm:flex-row sm:justify-center border-b-[1px] pb-20 sm:py-8">
        <div className="mt-7">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-xl w-[523px] h-[400px] sm:h-[820px] shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-10">
          <h1 className="text-3xl font-medium mb-2 mt-6">{product.title}</h1>
          <p className="text-gray text-3xl">${product.price}</p>
          <div className="flex gap-3 items-center">
            <div className="flex text-2xl text-yellow-500 gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-gray font-bold text-2xl">|</div>
            <h1 className="text-gray">5 Customer Review</h1>
          </div>
          <p className="text-gray font-semibold text-1xl">
            {product.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-myColor/70 text-black rounded-lg py-2 px-2 hover:bg-white hover:text-myColor cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-gray font-semibold mt-4">Size</h1>
          <br />
          <div className="flex gap-4">
            <div className="bg-myColor h-[30px] w-[30px] rounded-lg text-white text-sm flex justify-center items-center hover:bg-cream2 hover:text-black cursor-pointer">
              L
            </div>
            <div className="hover:bg-cream2 hover:text-black cursor-pointer bg-myColor h-[30px] w-[30px] rounded-lg text-white text-sm flex justify-center items-center">
              XL
            </div>
            <div className="hover:bg-cream2 hover:text-black cursor-pointer bg-myColor h-[30px] w-[30px] rounded-lg text-white text-sm flex justify-center items-center">
              XS
            </div>
          </div>
          <br />
          <h1 className="text-gray">Color</h1>
          <br />
          <div className="flex gap-4">
            <div className="bg-purple-500 h-[30px] w-[30px] rounded-full"></div>
            <div className="bg-black h-[30px] w-[30px] rounded-full"></div>
            <div className="bg-myColor h-[30px] w-[30px] rounded-full"></div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex mt-3 gap-6">
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="w-[40px] h-[40px] rounded-full border-[1px] text-myColor flex justify-center items-center gap-2"
              >
                <FaMinus />
              </button>
              <span className="mx-3 text-xl">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="w-[40px] h-[40px] rounded-full border-[1px] text-myColor flex justify-center items-center gap-2"
              >
                <FaPlus />
              </button>
            </div>
            <button
              className="w-[215px] h-[64px] rounded-2xl border-[1px] text-myColor"
              onClick={() => {
                addToCart({ ...product, quantity }); // Add quantity to cart
                showToast(`Product added to cart!`);
              }}
            >
              Add To Cart
            </button>
            <button className="w-[123px] h-[64px] rounded-2xl border-[1px] text-myColor">
              + Compare
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-52 sm:mt-2">
        <div className="h-[1800px] sm:h-[844px] w-[1440px] flex flex-col items-center justify-center sm:mt-20 border-b-[1px]">
          <div className="flex justify-center gap-14">
            <h1 className="text-1xl sm:text-2xl">Description</h1>
            <h1 className="text-gray text-1xl sm:text-2xl">
              Additional Information
            </h1>
            <h1 className="text-gray text-1xl sm:text-2xl">Reviews [5]</h1>
          </div>
          <br />
          <br />
          <p className="text-gray font-semibold line-clamp-2">
            {product.description}
          </p>
          <br />
          <br />
          <p className="text-gray font-semibold">{product.description}</p>
          <div className=" flex flex-col sm:flex sm:flex-row gap-6 mt-5">
            <div className="">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="h-[358px] w-[605px] bg-cream2 rounded-lg flex justify-center items-center"
              />
            </div>
            <div className="">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="h-[358px] w-[605px] bg-cream2 rounded-lg flex justify-center items-center"
              />
            </div>
          </div>
        </div>
      </div>
      <Recentproduct />
    </div>
  );
};

export default ProductDetail;
