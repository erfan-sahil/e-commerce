import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
