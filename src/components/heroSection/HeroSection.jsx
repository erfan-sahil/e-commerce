import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="h-[40vw] my-8 mx-auto heroSection">
      <div className="absolute flex flex-col items-start gap-7 max-w-[50%] left-[6vw] bottom-[10%] animate-">
        <h2 className="font-semibold text-6xl">
          Order your favourite food here
        </h2>
        <p className="text-lg font-medium fade-in">
          Choose from a diverse manu featuring a delectable array of dishes
          crafted with the flow.Enjoy a delightful dining experience from the
          comfort of your home.
        </p>
        <button className="font-medium text-[#747474] px-6 py-3 bg-white text-lg rounded-3xl">
          {" "}
          View Menu
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
