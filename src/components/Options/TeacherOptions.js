import React from "react";
import { Link, useLocation } from "react-router-dom";

const TeacherOptions = () => {
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
    },
    {
      id: 8,
      option: "Lesson Planer",
      prompt: "This is Lesson Planer Prompt",
      link: "/dashboard/dashboard/generate-questions/teacher-tool/lesson-planer",
    },
    {
      id: 9,
      option: "Project Ideas",
      prompt: "This is Project Ideas Prompt",
      link: "/dashboard/dashboard/generate-questions/teacher-tool/project-ideas",
    },
    {
      id: 10,
      option: "Study Points",
      prompt: "This is Study Points Prompt",
      link: "/dashboard/dashboard/generate-questions/teacher-tool/study-points",
    },
  ];

  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7
     gap-5 mt-5 bg-[#f9f9f9] rounded-2xl border border-[#eee] lg:mx-8">
      {buttonOptions?.map((buttonOption) => (
        <Link
          to={buttonOption.link}
          key={buttonOption.id}
          className={`${
            pathname === buttonOption.link
              ? "border-b-2 border-b-gradient-color-62 hover:text-gradient-color-62 bg-transparent bg-clip-text font-bold text-[#FC495F]"
              : "hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold"
          } mx-2  py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm `}
          style={{ height: "70px" }}
        >
          {buttonOption.option}
        </Link>
      ))}
    </div>
  );
};

export default TeacherOptions;
