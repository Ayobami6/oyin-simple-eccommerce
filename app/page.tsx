'use client'
import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import CarouselPlugin from "@/components/CarouselPlugin";
import PopularProduct from "@/components/PopularProduct";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
}
