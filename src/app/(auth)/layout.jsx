import StoreContextProvider from "@/context/StoreContext";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <StoreContextProvider>{children}</StoreContextProvider>
    </>
  );
};

export default layout;
