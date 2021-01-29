import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
         {children}
      <Footer />
    </>
  );
};
export default layout;
