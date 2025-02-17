"use client";

import ExploreMenu from "@/components/exploreMenu/ExploreMenu";
import FoodDisplay from "@/components/foodDisplay/FoodDisplay";
import HeroSection from "@/components/heroSection/HeroSection";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <HeroSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
}
