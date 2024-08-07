'use client'
import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import CarouselPlugin from "@/components/CarouselPlugin";

export default function Home() {
  return (
    <div>
      <Banner />
      <Header />
      <CarouselPlugin />
    </div>
  );
}
