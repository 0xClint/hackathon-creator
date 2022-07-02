import React, { useEffect, useState } from "react";
import { TickMark } from "../assets";
import { Link } from "react-router-dom";
import Counter from "./Counter";

const Card = ({ items }) => {
  const [timer, setTimer] = useState("");

  const status = () => {
    const now = new Date();

    const startDate = new Date(items.startDate);
    const endDate = new Date(items.endDate);

    if (now < startDate && now < endDate) {
      setTimer(items.startDate);
    }
    if (now > startDate && now < endDate) {
      setTimer(items.endDate);
    }
    if (now < startDate && now < endDate) {
      setTimer(items.endDate);
    }
  };
  useEffect(() => {
    status();
  });

  return (
    <div className="m-7">
      <div className="Card rounded-2xl h-[490px] shadow-lg w-[354px] bg-white">
        <div>
          <img
            id="imgPreview"
            src={require("../assets/cardimage/2.png")}
            alt="Preview"
          />
          {/* <img id="imgPreview" src={require({ imgDataUrl })} alt="Preview" /> */}
        </div>
        <div className="content flex flex-col justify-center px-8 items-center">
          <div className="status py-1 bg-[#FCF1D2] text-sm px-2 rounded-lg my-5">
            {items.level ? items.level : "easy"}
          </div>
          <div className="Title_name font-semibold text-center mb-5 text-[1.05rem] ">
            {items.name}
          </div>
          <div className="timer flex flex-col justify-center items-center font-semibold my-2 text-[#444444]">
            <p id="challenge_status">Starts in</p>
            <Counter timer={timer} />
            <div className="time_label flex font-sans justify-between w-36 items-center text-xs">
              <p>Days</p>
              <p>Hours</p>
              <p>Mins</p>
            </div>
          </div>
          <Link
            to={"/details/" + items.id}
            element={<Card name={items.name} />}
          >
            <button className="bg-[#44924C] font-semibold my-3 text-white px-5 rounded-xl flex justify-center items-center py-2.5">
              <TickMark className="mr-3 h-[25px] w-auto" />
              Participate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
