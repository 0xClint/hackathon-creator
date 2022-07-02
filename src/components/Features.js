import React from "react";
import { Community, Identify, Notebook, Robot } from "../assets";

const Features = () => {
  return (
    <>
      <section className="features_section px-40 py-20">
        <div className="heading font-semibold text-[2.2rem] text-center">
          Why Participate in
          <span className="text-[#44924C]  "> AI Challenges?</span>
        </div>
        <div className="card_container flex">
          <div className="left_container">
            <div className="card flex flex-col justify-center bg-[#F8F9FD] px-8 h-72 rounded-2xl my-10 mx-5">
              <Notebook className="my-2 h-12" />
              <h1 className="text-[1.5rem] font-semibold my-2">
                Prove your skills
              </h1>
              <p className=" text-[#64607D] font-medium">
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </p>
            </div>
            <div className="card flex flex-col justify-center bg-[#F8F9FD] px-8 h-72 rounded-2xl my-10 mx-5">
              <Robot className="my-2 h-12" />
              <h1 className="text-[1.5rem] font-semibold my-2">
                Challenge yourself
              </h1>
              <p className=" text-[#64607D] font-medium">
                There is nothing for you to lose by participating in a
                challenge. You can fail safe, learn out of the entire experience
                and bounce back harder.
              </p>
            </div>
          </div>
          <div className="right_container rounded-2xl">
            <div className="card flex flex-col justify-center bg-[#F8F9FD] px-8 h-72 rounded-2xl my-10 mx-5">
              <Community className="my-2 h-12" />
              <h1 className="text-[1.5rem] font-semibold my-2">
                Learn from community
              </h1>
              <p className=" text-[#64607D] font-medium">
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </p>
            </div>
            <div className="card flex flex-col justify-center bg-[#F8F9FD] px-8 h-72 rounded-2xl my-10 mx-5">
              <Identify className="my-2 h-12" />
              <h1 className="text-[1.5rem] font-semibold my-2">
                Earn recognition
              </h1>
              <p className=" text-[#64607D] font-medium">
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
