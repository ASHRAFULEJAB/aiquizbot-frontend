// import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Options = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const pathname = usePathname();
  const buttonOptions = [
    {
      id: 1,
      option: "True/false",
      prompt: "This is True/ False Prompt",
      link: "/dashboard/generate-questions/true-false",
    },
    {
      id: 2,
      option: "Multiple Questions",
      prompt: "This is Multiple Questions Prompt",
      link: "/dashboard/generate-questions/multiple-questions",
    },
    {
      id: 3,
      option: "Short Answers",
      prompt: "This is Short Answers Prompt",
      link: "/dashboard/generate-questions/short-answers",
    },
    {
      id: 4,
      option: "Blanks",
      prompt: "This is Blanks Prompt",
      link: "/dashboard/generate-questions/blanks",
    },
    {
      id: 5,
      option: "Matching",
      prompt: "This is Matching Prompt",
      link: "/dashboard/generate-questions/matching",
    },
    {
      id: 6,
      option: "Calculations",
      prompt: "This is Calculations Prompt",
      link: "/dashboard/generate-questions/calculations",
    },
    {
      id: 7,
      option: "Teacher Tool",
      prompt: "This is Teacher Tool Prompt",
      link: "/dashboard/generate-questions/teacher-tool",
      // // Nested route for LessonPlanner component
      // nestedRoutes: [
      //   { id: 1, option: "Lesson Planner", link: "/lesson-planner" },
      //   // Add other nested routes here if needed
      // ],
    },
  ];

  const teacherToolButtonOptions = [
    {
      id: 1,
      option: "Lesson Planer",
      prompt: "This is Lesson Planer Prompt",
      link: "dashboard/generate-questions/teacher-tool/lesson-planer",
    },
    {
      id: 2,
      option: "Project Ideas",
      prompt: "This is Project Ideas Prompt",
      link: "dashboard/generate-questions/teacher-tool/project-ideas",
    },
    {
      id: 3,
      option: "Study Points",
      prompt: "This is Study Points Prompt",
      link: "dashboard/generate-questions/teacher-tool/study-points",
    },
  ];

  return (
    <div className="">
      {/* Main Links Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-5 bg-[#f9f9f9] rounded-2xl border border-[#eee] mx-8">
        {buttonOptions?.map((buttonOption) => (
          <Link
            to={buttonOption.link}
            key={buttonOption.id}
            className={`${
              pathname === buttonOption.link
                ? "border-b-2 border-b-gradient-color-62 hover:text-gradient-color-62 bg-transparent bg-clip-text font-bold text-[#FC495F]"
                : "hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold"
            } mx-2  py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm `}
            
          >
            {buttonOption.option}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-5 bg-[#f9f9f9] rounded-2xl border border-[#eee] mx-8">
        {pathname === "/dashboard/generate-questions/teacher-tool" ? (
          <>
            {teacherToolButtonOptions.map((p) => (
              <Link
                to={p.link}
                key={p.id}
                className={`${
                  pathname === p.link
                    ? "border-b-2 border-b-gradient-color-62 hover:text-gradient-color-62 bg-transparent bg-clip-text font-bold text-[#FC495F]"
                    : "hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold"
                } mx-2 py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm `}
               
              >
                {p.option}
              </Link>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Options;
