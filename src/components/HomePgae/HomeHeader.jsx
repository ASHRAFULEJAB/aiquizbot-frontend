// import { AuthContext } from "@/context/AuthProvider";
// import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
// import Image from "next/image";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TOP_OFFSET = 66;
const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
        navigate("/login");
      })
      .catch((e) => toast.error(e.message));
  };
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full fixed z-10">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-[#eee] bg-opacity-90" : ""
        }`}
      >
        <div className="relative flex items-center justify-between container mx-auto ">
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center lg:mr-24">
              <img src={logo} alt="Logo" width={150} height={100} />
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex lg:ml-96 justify-between">
              <motion.li

              // whileTap={{ scale: 1.1 }}
              // drag="x"
              // dragConstraints={{ left: -100, right: 100 }}
              >
                <Link
                  to="/"
                  aria-label="Our product"
                  className="font-bold tracking-wide text-[gray-900] transition-colors duration-200
                   "
                >
                  Home
                </Link>
              </motion.li>
              <motion.li>
                <Link
                  to="/dashboard/dashboard"
                  aria-label="Our product"
                  className="font-bold tracking-wide text-gray-900 transition-colors duration-200
                   "
                >
                  Dashboard
                </Link>
              </motion.li>
              {/* <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                >
                  Contact
                </Link>
              </li> */}
              <motion.li>
                <Link
                  to="/about"
                  aria-label="Product pricing"
                  className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                >
                  About
                </Link>
              </motion.li>
              {/* <li>
                <Link
                  to="/marketplace"
                  aria-label="About us"
                  className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/auction"
                  aria-label="About us"
                  className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                >
                  Auction
                </Link>
              </li> */}
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex lg:ml-24">
            {user?.uid ? (
              <>
                <li onClick={handleLogout}>
                  <Link
                    to="/login"
                    className="h-12 px-8 font-bold tracking-wide
                  btn btn-primary text-white  transition-all w-full py-3 rounded-2xl
       duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100 flex justify-center items-center gap-3"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* <li>
              <Link
                to="/login"
                aria-label="Sign in"
                className="font-bold tracking-wide
                 text-[#52C1B9] transition-colors duration-200 "
              >
                Login{" "}
              </Link>
            </li>  */}
                <li>
                  <Link
                    to="/login"
                    className=" 
                 h-12 px-8 font-bold tracking-wide
                  btn btn-primary text-white  transition-all w-full py-3 rounded-2xl
       duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100 flex justify-center items-center gap-3"
                    aria-label="Sign up"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              className="p-2  ml-52 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                  fill="#FC495F"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                  fill="#FC495F"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 15C9 14.4477 9.44772 14 10 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H10C9.44772 16 9 15.5523 9 15Z"
                  fill="#FC495F"
                />{" "}
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-[#eee]  border rounded shadow-sm">
                  <div className="flex items-center text-white justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img src={logo} width={150} height={100} alt="Logo" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <motion.li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          className="font-bold tracking-wide
                           text-gray-900 transition-colors duration-200 "
                        >
                          Home
                        </Link>
                      </motion.li>
                      <motion.li>
                        <Link
                          to="/dashboard/dashboard"
                          aria-label="Our product"
                          className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                        >
                          Dashboard
                        </Link>
                      </motion.li>

                      {/* <li>
                        <Link
                          to="/marketplace"
                          aria-label="About us"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 "
                        >
                          Marketplace
                        </Link>
                      </li> */}
                      <motion.li>
                        <Link
                          to="/about"
                          aria-label="About us"
                          className="font-bold tracking-wide text-gray-900 transition-colors duration-200 "
                        >
                          About
                        </Link>
                      </motion.li>
                      {user?.uid ? (
                        <>
                          <li onClick={handleLogout}>
                            <Link
                              to="/login"
                              className="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100 w-full"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          {/* <li>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              className="font-medium tracking-wide
                               text-[#52C1B9] transition-colors duration-200 "
                            >
                              Log In
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              to="/sign-up"
                              className="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100 w-full "
                              aria-label="Sign up"
                            >
                              Log In
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
