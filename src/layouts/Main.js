import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Footer from '../shared/Footer/Footer'
// import Header from '../shared/Header/Header'
// import "./globals.css";

import Header from "../shared/Header";
// import { usePathname } from "next/navigation";
// import AuthProvider from "@/context/AuthProvider";
import "../index.css";
// import { Varela_Round } from "next/font/google";
// import Footer from "@/components/Shared/Footer";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import Options from "@/components/Options/Options";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import AuthProvider from "../context/AuthProvider";
// import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Options from "../components/Options/Options";
import HomeHeader from "../components/HomePgae/HomeHeader";

// const varela_round = Varela_Round({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const Main = () => {
  const [open, setOpen] = useState(true);
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const pathname = usePathname();
  const excludePaths = ["/register"];
  const shouldExclude = excludePaths.some((path) => pathname === path);

  if (shouldExclude) {
    return <Outlet />;
  }
  return (
    <>
      {" "}
      <HomeHeader />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
    
  );
};

export default Main;
