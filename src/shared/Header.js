import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
// import pervezHossainImage from "../../../public/pervez hossain.jpg";
// import Image from "next/image";
// import { AuthContext } from "@/context/AuthProvider";
import avater from "../assets/avater.avif";

const Header = ({ open, setOpen }) => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-between">
      <div className="lg:block md:block hidden">
        <button
          className={`${
            open ? "transition-all duration-700" : ""
          } bg-gradient-to-r from-[#FC495F] to-[#FFc371] w-10 h-10 
          rounded-full lg:flex md:flex items-center justify-center cursor-pointer transition-all duration-700 hidden ml-8`}
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-white text-lg" />
        </button>
      </div>
      {/* Mobile Code */}
      <div className="lg:hidden md:hidden block">
        <button
          className={`${
            open ? "transition-all duration-700" : ""
          } bg-gradient-to-r from-[#FC495F] to-[#FFc371] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-700 ml-8`}
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-white text-lg hover:text-black" />
        </button>
      </div>
      <div className="flex justify-end items-center gap-8 pt-4 py-2 z-0 relative">
        {user && <h2>{user?.user?.displayName}</h2>}
        <div className="rounded-full bg-gradient-to-r from-[#FC495F] to-[#FFc371] p-1">
          {user?.user?.photoURL === null ? (
            <img
              src="https://img.freepik.com/free-icon/user_318-219687.jpg"
              alt="avataer"
              className="rounded-full h-16 w-16"
            ></img>
          ) : (
            <img
              src={user?.user?.photoURL}
              alt={user?.user?.displayName}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
