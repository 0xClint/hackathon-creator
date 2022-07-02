import React from "react";
import { AI, AIChallengeHost, Scientist } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero_section flex p-36  text-white bg-[#003145]">
        <div className="left_bar h-32 w-2 bg-[#FFCE5C]"></div>
        <div className="middle_content flex flex-col ml-12 w-[55%]">
          <div className="heading font-semibold  text-[3.2rem] leading-[65px]">
            Accelerate Innovation with Global AI Challenges
          </div>
          <div className="content font-medium mt-12 text-[1.1rem] w-[80%]">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <Link to="/create-challenge">
            <button className="font-semibold shadow-lg hover:bg-slate-200 duration-100 ease-in text-[#003145] bg-white w-52 py-3 text-[1.1rem] rounded-[10px] my-9">
              Create Challenge
            </button>
          </Link>
        </div>
        <div className="right_picture flex items-center hover:-translate-y-5 duration-200 w-[36%] justify-center">
          <img
            src={require("../assets/icons/Rocket.png")}
            className="h-80 ml-10 "
          />
        </div>
      </section>
      <section className="constomers px-40 py-16 bg-[#002A3B] text-white flex justify-between items-center">
        <div className="submissions flex justify-center items-center">
          <AI className="mr-8" />
          <div>
            <h1 className="font-semibold text-[1.7rem]">100K+</h1>
            <p>AI model submissions</p>
          </div>
        </div>
        <div className="line h-12 w-[1px] bg-white"></div>
        <div className="submissions flex justify-center items-center">
          <Scientist className="mr-8" />
          <div>
            <h1 className="font-semibold text-[1.7rem]">50K+</h1>
            <p>Data Scientists</p>
          </div>
        </div>
        <div className="line h-12 w-[1.5px] bg-white"></div>
        <div className="submissions flex justify-center items-center">
          <AIChallengeHost className="mr-8" />
          <div>
            <h1 className="font-semibold text-[1.7rem]">100+</h1>
            <p>AI Challenges hosted</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
