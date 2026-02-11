import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import logo from "../../../public/logo.png";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog3.png";
import post1 from "../../../public/post1.png";
import post2 from "../../../public/post2.png";
import post3 from "../../../public/post3.png";
import post4 from "../../../public/post4.png";
import post5 from "../../../public/post5.png";
import { BsPersonFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="  text-3xl sm:text-5xl font-bold text-center text-black">Blog</h1>
          <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold text-black">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl" />
            <p className="text-black">Blog</p>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-center gap-72 mt-28">
        <div className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-around">
          <div>
            <div className="sm:w-[820px] sm:h-[794px] ">
              <Image src={blog1} alt="blog" className="rounded-lg" />
              <div className="flex gap-4 mt-5">
                <div className="flex gap-2">
                  <BsPersonFill className="text-2xl text-gray" />
                  <h1 className="text-gray">Admin</h1>
                </div>
                <div className="flex gap-2">
                  <FaCalendar className="text-2xl text-gray" />
                  <h1 className="text-gray">14 Oct 2022</h1>
                </div>
                <div className="flex gap-2">
                  <FaTag className="text-2xl text-gray" />
                  <h1 className="text-gray">Wood</h1>
                </div>
              </div>

              <h1 className="mt-5 font-semibold text-3xl text-black">
                Going all-in with millennial design
              </h1>

              <p className="text-gray font-medium mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </p>

              <button className="h-[36px] w-[89px] border-b-[2px] border-b-black mt-5 text-black">
                Read more
              </button>
            </div>
            <div className="sm:w-[820px] sm:h-[794px]  mt-7">
              <Image src={blog2} alt="blog" className="rounded-lg" />
              {/* icons div */}
              <div className="flex gap-4 mt-5">
                <div className="flex gap-2">
                  <BsPersonFill className="text-2xl text-gray" />
                  <h1 className="text-gray">Admin</h1>
                </div>
                <div className="flex gap-2">
                  <FaCalendar className="text-2xl text-gray" />
                  <h1 className="text-gray">14 Oct 2022</h1>
                </div>
                <div className="flex gap-2">
                  <FaTag className="text-2xl text-gray" />
                  <h1 className="text-gray">Handmade</h1>
                </div>
              </div>

              <h1 className="mt-5 font-semibold text-3xl text-black">
                Exploring new ways of decorating
              </h1>

              <p className="text-gray font-medium mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </p>

              <button className="h-[36px] w-[89px] border-b-[2px] border-b-black mt-5 text-black">
                Read more
              </button>
            </div>
            <div className="sm:w-[820px] sm:h-[794px]  mt-7">
              <Image src={blog3} alt="blog" className="rounded-lg" />
              {/* icons div */}
              <div className="flex gap-4 mt-5">
                <div className="flex gap-2">
                  <BsPersonFill className="text-2xl text-gray" />
                  <h1 className="text-gray">Admin</h1>
                </div>
                <div className="flex gap-2">
                  <FaCalendar className="text-2xl text-gray" />
                  <h1 className="text-gray">14 Oct 2022</h1>
                </div>
                <div className="flex gap-2">
                  <FaTag className="text-2xl text-gray" />
                  <h1 className="text-gray">Wood</h1>
                </div>
              </div>

              <h1 className="mt-5 font-semibold text-3xl text-black">
                Handmade pieces that took time to make
              </h1>

              <p className="text-gray font-medium mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </p>

              <button className="h-[36px] w-[89px] border-b-[2px] border-b-black mt-5 text-black">
                Read more
              </button>
            </div>
          </div>
          <div>
            <div className="w-[393px] h-[537px] ">
              <div className="flex justify-center my-4">
                <input
                  type="search"
                  id="site-search"
                  name="q"
                  placeholder="Search"
                  className="text-gray font-medium pb-5 text-xl h-[58px] w-[311px] border-[1px] border-gray rounded-lg px-3 py-3"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-[251px] h-[353px]">
                  <h1 className="text-3xl font-semibold my-8 text-black">Categories</h1>
                  <div className="flex justify-between my-9 text-gray">
                    <h1>Crafts</h1>
                    <h1>2</h1>
                  </div>
                  <div className="flex justify-between my-9 text-gray">
                    <h1>Design</h1>
                    <h1>8</h1>
                  </div>
                  <div className="flex justify-between my-9 text-gray">
                    <h1>Handmade</h1>
                    <h1>7</h1>
                  </div>
                  <div className="flex justify-between my-9 text-gray">
                    <h1>Interior</h1>
                    <h1>1</h1>
                  </div>
                  <div className="flex justify-between my-9 text-gray">
                    <h1>Wood</h1>
                    <h1>6</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[393px] h-[650px]  mt-7 flex justify-center">
              <div className="w-[252px] h-[618px] ">
                <h1 className=" font-semibold text-3xl text-black">Recent Posts</h1>
                <div className="flex my-9 gap-2 items-center">
                  <Image src={post1} alt="post1" />
                  <div className="font-medium">
                    <p className="text-black">
                      Going all-in with <br /> millennial design
                    </p>
                    <p className="text-gray">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex my-9 gap-2 items-center">
                  <Image src={post2} alt="post1" />
                  <div className="font-medium">
                    <p className="text-black">
                      Exploring new ways <br /> of decorating
                    </p>
                    <p className="text-gray">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex my-9 gap-2 items-center">
                  <Image src={post3} alt="post1" />
                  <div className="font-medium">
                    <p className="text-black">
                      Handmade pieces <br /> that took time to make
                    </p>
                    <p className="text-gray">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex my-9 gap-2 items-center">
                  <Image src={post4} alt="post1" />
                  <div className="font-medium">
                    <p className="text-black">
                      Modern home in <br />
                      Milan
                    </p>
                    <p className="text-gray">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex my-9 gap-2 items-center">
                  <Image src={post5} alt="post1" />
                  <div className="font-medium">
                    <p className="text-black">
                      Colorful office <br /> redesign
                    </p>
                    <p className="text-gray">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-6">
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center text- hover:text-white">
          {" "}
          1
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          2
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          3
        </div>
        <div className="bg-cream text-black hover:bg-myColor h-[60px] w-[98px] rounded-lg flex items-center justify-center hover:text-white">
          {" "}
          Next
        </div>
      </div>
    </div>
  );
};

export default Blog;
