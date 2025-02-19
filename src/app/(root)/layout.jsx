import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import StoreContextProvider from "@/context/StoreContext";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <StoreContextProvider>
        <div className="w-[90%] mx-auto">
          <Navbar />
          {children}
        </div>
        <Footer />
      </StoreContextProvider>
    </>
  );
};

export default layout;
