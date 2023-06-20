import React from "react";
// Outlet => render the root list routes
import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
// import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
      
    </>
  );
};
export default RootLayout;
