import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { FaRegCommentDots } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { BsReverseLayoutSidebarReverse, BsSave } from "react-icons/bs";
import { AiOutlineGift, AiOutlineFileText } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
// import { AuthContext } from "@/context/AuthProvider";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import {
  Link,
  useLocation,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const router = useRouteError();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully!!");
        navigate("/login");
      })
      .catch((e) => toast.error(e.message));
  };
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const pathname = usePathname();
  const header = [
    {
      id: 1,
      name: "Generate Questions",
      link: `/dashboard/generate-questions/true-false`,
    },

    {
      id: 2,
      name: "Saved Questions",
      link: "/dashboard/saved-questions",
    },
  ];
  const AccountSettings = [
    {
      id: 1,
      name: "Membership",
      link: "/dashboard/membership",
    },
    {
      id: 2,
      name: "Transaction",
      link: "/dashboard/transaction",
    },
    {
      id: 3,
      name: "Account Settings",
      link: "/dashboard/account-settings",
    },
  ];
  return (
    <>
      {/* Desktop and Tablet  Code */}
      <div className="mt-5 sticky top-10 lg:block md:block hidden">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="mb-10"
          />
        </Link>
        <Link
          to="/dashboard/dashboard"
          className={` ${
            pathname === "/dashboard/dashboard"
              ? ` bg-transparent bg-clip-text font-semibold text-[#FC495F] mt-5`
              : ""
          }`}
        >
          <div className="flex items-center gap-2  font-normal">
            <RxDashboard className="text-[20px]"></RxDashboard>
            <span>Dashboard</span>
          </div>
        </Link>
        <div className="flex flex-col justify-between ">
          <div>
            <h2 className=" font-bold mt-10 mb-5  ">Ai Content</h2>
            {header?.map((header) => {
              return (
                <Link
                  to={`${header.link} `}
                  className={` ${
                    pathname === header.link
                      ? ` bg-transparent bg-clip-text font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-3 mb-5 `}
                  key={header.id}
                >
                  {header.name === "Generate Questions" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <FiHome className="text-[20px]"></FiHome>{" "}
                        <span>{header.name}</span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {header.name === "Saved Questions" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <BsSave className="text-[20px]"></BsSave> {header.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
          </div>
          <div>
            {/* <h2 className=" font-bold mb-5 mt-16  ">Account</h2>
            {AccountSettings.map((item) => {
              return (
                <Link
                  to={`${item.link} `}
                  className={` ${
                    pathname === item.link
                      ? `  font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-3 mb-5 `}
                  key={item.id}
                >
                  {item.name === "Membership" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <AiOutlineGift className="text-[20px]"></AiOutlineGift>{" "}
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.name === "Transaction" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <AiOutlineFileText className="text-[20px]"></AiOutlineFileText>{" "}
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.name === "Account Settings" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <IoSettingsOutline className="text-[20px]"></IoSettingsOutline>
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })} */}
            <div className="flex items-center gap-3 cursor-pointer mt-96">
              <LuLogOut className="text-[20px] "></LuLogOut>{" "}
              <span onClick={handleLogout} className="font-normal">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Code */}

      <div className="lg:hidden md:hidden block bg-gradient-to-b
       from-[#F0F0F0] via-[#F5F5F5] to-white py-10 px-5  ">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="mb-10"
          />
        </Link>
        <Link
          to="/dashboard/dashboard"
          className={` ${
            pathname === "/dashboard"
              ? ` bg-transparent bg-clip-text font-semibold text-[#FC495F] mt-5`
              : ""
          }`}
        >
          <div className="flex items-center gap-2  font-normal">
            <RxDashboard className="text-[20px]"></RxDashboard>
            <span>Dashboard</span>
          </div>
        </Link>
        <div className="flex flex-col justify-between ">
          <div>
            <h2 className=" font-bold mt-10 mb-5  ">Ai Content</h2>
            {header?.map((header) => {
              return (
                <Link
                  to={`${header.link} `}
                  className={` ${
                    pathname === header.link
                      ? ` bg-transparent bg-clip-text font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-3 mb-5 `}
                  key={header.id}
                >
                  {header.name === "Generate Questions" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <FiHome className="text-[20px]"></FiHome>{" "}
                        <span>{header.name}</span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {header.name === "Saved Questions" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <BsSave className="text-[20px]"></BsSave> {header.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
          </div>
          <div>
            {/* <h2 className=" font-bold mb-5 mt-16  ">Account</h2>
            {AccountSettings.map((item) => {
              return (
                <Link
                  to={`${item.link} `}
                  className={` ${
                    pathname === item.link
                      ? `  font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-3 mb-5 `}
                  key={item.id}
                >
                  {item.name === "Membership" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <AiOutlineGift className="text-[20px]"></AiOutlineGift>{" "}
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.name === "Transaction" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <AiOutlineFileText className="text-[20px]"></AiOutlineFileText>{" "}
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.name === "Account Settings" ? (
                    <>
                      <div className="flex items-center gap-3 justify-center font-normal">
                        <IoSettingsOutline className="text-[20px]"></IoSettingsOutline>
                        {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })} */}
            <div className="flex items-center gap-3 cursor-pointer">
              <LuLogOut className="text-[20px] "></LuLogOut>{" "}
              <span onClick={handleLogout} className="font-normal">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
