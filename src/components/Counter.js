import React, { useEffect, useState, useRef } from "react";

const Counter = ({ timer }) => {
  // console.log(timer);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  // const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDate = new Date(timer).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      // const textSecond = Math.floor((gap % minute) / second);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setDays(textDay);
        setHours(textHour);
        setMinutes(textMinute);
        // setSeconds(textSecond);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="text-[1.5rem] flex w-36 justify-between items-center">
        <p>{days}</p>:<p>{hours}</p>:<p>{minutes}</p>
        {/* : {seconds} */}
      </div>
    </>
  );
};

export default Counter;
