"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";
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
  productImage: {
    assest: {
      _ref: string;
    };
  };
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
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 relative mt-4">
      <ToastContainer />
      <h1 className="text-center text-3xl font-extrabold text-black">
      Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-grey rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 mt-8"
          >
            <Link href={`/product/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-[400px] rounded-t-lg"
              />
            </Link>
            <div className="mt-4">
              <h1 className="text-xl font-bold pl-3 text-black">
                {product.title}
              </h1>

              <p className="font-semibold text-gray line-clamp-3 my-2 text-start pl-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-xl font-bold text-black">
                    ${product.price}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-myColor/70 text-black rounded-lg x-2 py-2 px-2 hover:bg-white hover:text-myColor cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-myColor text-white py-2 rounded-md"
                onClick={() => {
                  addToCart(product);
                  showToast(`Product added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-9">
        <Link href={"/shop"}>
          <button className="h-[48px] w-[180px] sm:w-[245px] border-[1px] border-myColor text-myColor font-bold text-center">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentProduct;
