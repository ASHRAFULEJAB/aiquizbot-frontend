import React from "react";

import demo from "../../assets/demo.mp4";
import HomeHeader from "../../components/HomePgae/HomeHeader";

const About = () => {
  return (
    <div className="">
      <div>
        <HomeHeader />
        <video
          src={demo}
          autoPlay
          loop
          muted
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default About;
