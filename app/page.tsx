'use client'
import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import CarouselPlugin from "@/components/CarouselPlugin";
import PopularProduct from "@/components/PopularProduct";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const categories = ["Men's Clothing", "Women's Clothing", "Slides", "Bags"];
  const catFilter = () => {
    // Filter logic goes here
    console.log("Filtering")
  }
  return (
    <div>
      <Banner />
      <Header />
      <div className="flex justify-center font-Inter text-sm gap-5 p-4">
        {
          categories.map((cat, index) => (
            <h2 key={index} className="cursor-pointer hover:underline hover:text-submain" onClick={catFilter}>
              {cat}

            </h2>
          ))
        }
      </div>
      <CarouselPlugin />
      <PopularProduct type="Popular Products" />
      <div className="my-4">
        <PopularProduct type="Products" />

      </div>
      <div className="my-8">
        <h1 className="text-center font-bold text-3xl my-10">Need Something Like This For An Affordable Price?</h1>
        <div className="flex justify-center">
          <a href="mailto:ayobamidele006@gmail.com">
            <Button className="w-[200px] font-Poppins h-[60px] shadow-md text-[16px] text-white bg-main" type="button">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
