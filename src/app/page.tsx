import Categories from "@/components/categories";
import { Decoration } from "@/components/decoration";
import Furniture from "@/components/furniture";
import Hero from "@/components/hero";
import ProductCard from "@/components/product";
import Sevices from "@/components/sevices";



export default function Home() {
  return (
    <div >
      <Hero/>
      <Categories/>
      <ProductCard/>
      <Decoration/>
      <Furniture/>
      <Sevices/>
    </div>
  );
}
