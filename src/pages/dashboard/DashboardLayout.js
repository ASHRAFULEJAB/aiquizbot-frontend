import React, { useState } from "react";
import AuthProvider from "../../context/AuthProvider";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer";
import { Toaster } from "react-hot-toast";
import Options from "../../components/Options/Options";
import Header from "../../shared/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import TeacherOptions from "../../components/Options/TeacherOptions";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const pathname = usePathname();
  return (
    <div>
      <div>
        <AuthProvider>
          {pathname !== "/login" &&
          pathname !== "/sign-up" &&
          pathname !== "/about" &&
          pathname !== "/" ? (
            <>
              <div
                className={`${
                  open ? "lg:grid md:grid lg:grid-cols-5 md:grid-cols-5" : null
                } `}
              >
                {open ? (
                  <div className="col-span-1 bg-white font-bold  px-8 py-4 sticky top-0 border-r-2 border-[#eee]">
                    <div className="w-full rounded-2xl bg-gradient-to-r from-[#FC495F] to-[#FFc371] lg:hidden md:hidden block lg:mb-0 md:mb-0 mb-5">
                      <div className="flex items-center justify-between px-4 py-2">
                        <button
                          className={`${
                            open ? "transition-all duration-700" : "ml-2"
                          } w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-700 bg-white`}
                          onClick={() => setOpen(!open)}
                        >
                          <FaBars
                            className={`text-[#FC495F] text-lg ${
                              open ? "rotate-45" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <Sidebar></Sidebar>
                  </div>
                ) : null}
                <div className="col-span-4">
                  <div className="mr-8">
                    <Header open={open} setOpen={setOpen}></Header>
                    {pathname === "/dashboard/generate-questions" ||
                    pathname === "/dashboard/generate-questions/true-false" ||
                    pathname ===
                      "/dashboard/generate-questions/multiple-questions" ||
                    pathname ===
                      "/dashboard/generate-questions/short-answers" ||
                    pathname === "/dashboard/generate-questions/blanks" ||
                    pathname === "/dashboard/generate-questions/matching" ||
                    pathname === "/dashboard/generate-questions/calculations" ||
                    pathname ===
                      "/dashboard/generate-questions/teacher-tool" ? (
                      <>
                        <Options></Options>
                      </>
                    ) : (
                      <></>
                    )}
                    {pathname ===
                      "/dashboard/dashboard/generate-questions/teacher-tool/lesson-planer" ||
                    pathname ===
                      "/dashboard/dashboard/generate-questions/teacher-tool/project-ideas" ||
                    pathname ===
                      "/dashboard/dashboard/generate-questions/teacher-tool/study-points" ? (
                      <>
                        <TeacherOptions className="mt-5"></TeacherOptions>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Outlet />
                </div>
              </div>
            </>
          ) : (
            <>
              <Outlet />
            </>
          )}
          <Footer />
          <Toaster position="bottom-center" reverseOrder={false} />
        </AuthProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
