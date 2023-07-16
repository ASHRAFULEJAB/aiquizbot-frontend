import React from "react";
import HomeHeader from "../components/HomePgae/HomeHeader";
import HomeMiddle from "../components/HomePgae/HomeMiddle";
import QuizbotWork from "../components/HomePgae/QuizbotWork";
import ChoosePlan from "../components/HomePgae/ChoosePlan";
import Banner from "../assets/Home.png";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      {/* Hero Image */}
      <div className="flex justify-center ">
        <img
          className="w-11/12 h-[56.25vw]  mt-20"
          src={Banner}
          alt="imgae"
        ></img>
      </div>
      <HomeMiddle />
      <QuizbotWork />
      <ChoosePlan />
    </div>
  );
};

export default HomePage;
