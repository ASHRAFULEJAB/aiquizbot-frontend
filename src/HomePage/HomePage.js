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
          style={{ width: "90%", height: "auto" }}
          className="mt-20"
          src={Banner}
          alt="imgae"
        ></img>
      </div>
      <HomeMiddle />
      <QuizbotWork />
      {/* <ChoosePlan /> */}
    </div>
  );
};

export default HomePage;
