import React from "react";
import { Link } from "react-scroll";
import SplashSection from "../components/SplashSection";

const Home = () => {
  return (
    <div name="about" id="about" className="w-full h-screen pt-0 pb-0">
      {/* Container */}
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="hi  text-2xl left-animate font-semibold">Hi, There👋</p>

         {/* <SplashSection splashMessage={"I'm Pyansu Nahak"} isErrorMode={false} /> */}
        <h2 className="web text-4xl sm:text-7xl font-bold text-[#8892b0] left-animate">
          I'm Pyansu Nahak
        </h2>
        <p className="about text-[#8892b0] font-semibold py-4 max-w-screen-md right-animate">
          I do Web Development. Currently, I’m focused on building responsive full-stack
          web applications.
        </p>
        <p className="about font-semibold left-animate">Let’ Connect!</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
              View Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
