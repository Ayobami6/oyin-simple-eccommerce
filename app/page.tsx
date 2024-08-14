'use client'
import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import CarouselPlugin from "@/components/CarouselPlugin";
import PopularProduct from "@/components/PopularProduct";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { fetchBanner } from "@/api/banner";
import { fetchAdvert } from "@/api/advert";

export default function Home() {
  const [bannerText, setBannerText] = useState("");
  const [advertData, setAdvertData] = useState([]);
  const categories = ["Men's Clothing", "Women's Clothing", "Slides", "Bags"];
  const [bannerLoading, setBannerLoading] = useState(false);
  const [advertLoading, setAdvertLoading] = useState(false);
  const catFilter = () => {
    // Filter logic goes here
    console.log("Filtering")
  }
  const bannerFetch = async () => {
    try {
      setBannerLoading(true);
      const response = await fetchBanner();
      if (response.status === "success") {
        setBannerLoading(false);
        setBannerText(response?.data.text);
      }
    } catch (error) {
      setBannerLoading(false);
      console.log(error);
    }
  }
  const advertFetch = async () => {
    try {
      setAdvertLoading(true);
      const response = await fetchAdvert();
      if (response.status === "success") {
        console.log(response)
        setAdvertLoading(false);
        setAdvertData(response?.data);
      }
    } catch (error) {
      setAdvertLoading(false);
      console.log(error);
    }
  }
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    bannerFetch();
    advertFetch();
  }, []);
  const handleSearch = () => {
    console.log(searchText);
    // Search logic goes here
    console.log("Searching")
  }
  return (
    <div>
      <Banner bannerText={bannerText} loading={bannerLoading} />
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        handlePress={handleSearch}
      />
      <div className="flex justify-center font-Inter text-sm gap-5 p-4">
        {
          categories.map((cat, index) => (
            <h2 key={index} className="cursor-pointer hover:underline hover:text-submain" onClick={catFilter}>
              {cat}

            </h2>
          ))
        }
      </div>
      <CarouselPlugin data={advertData} loading={advertLoading} />
      <PopularProduct type="Popular Products" />
      <div className="my-4">
        <PopularProduct type="Products" />

      </div>
      <div className="my-8 p-4">
        <h1 className="text-center font-bold text-2xl my-10">Need Something Like This For An Affordable Price?</h1>
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
