import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Clock, Level } from "../assets/index";
import { Link } from "react-router-dom";
import date from "date-and-time";
import ordinal from "date-and-time/plugin/ordinal";
import { deleteForm } from "../Redux/actions";
import EditForm from "./EditForm";

const Details = () => {
  const params = useParams();
  // console.log(params.id);
  const { FormList } = useSelector((state) => state.challenges);
  // console.log(FormList);
  const targetURL = FormList.filter((items) => {
    return items.id.includes(params.id);
  });
  console.log(targetURL[0]);

  date.plugin(ordinal);
  const time = date.format(
    new Date(targetURL[0].startDate),
    "DDD MMM'YY hh:mm A"
  );
  // console.log(time);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteForm(targetURL[0]));
  };

  return (
    <>
      <div className="detail_section py-28 px-32 bg-[#003145] text-white">
        <div className="deadline_alert text-black flex justify-center items-center bg-[#FFCE5C] font-medium py-1.5 rounded-md px-3 w-[470px]">
          <Clock className="mr-2" />
          Starts on 17th Jun'22 09:00 PM India Standard Time
        </div>
        <div className="heading font-semibold  text-[2.5rem] my-5 leading-[65px]">
          {targetURL[0].name}dvedvev
        </div>
        <div className="font-medium mb-5 text-[1.1rem]">
          Identify the class to which each butterfly belongs to
        </div>
        <button className="flex mt-10 justify-center items-center text-[#003145] font-semibold bg-[#F8F9FD] py-1.5 px-5 rounded-md">
          <Level className="mr-2 mb-1" /> {targetURL[0].level}
        </button>
      </div>
      <div className="overview px-32 flex justify-between items-center h-[64px] py-3 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold  mt-5 mb-3 text-[1.2rem] ">Overview</p>
          <div className="underline w-32 border-b-4 border-[#44924C]"></div>
        </div>
        <div className="buttons">
          <Link to={"/edit/" + targetURL[0].id}>
            <button className="font-semibold text-white border-2 mx-3  border-[#44924C] bg-[#44924C] py-1.5 w-24 rounded-lg">
              Edit
            </button>
          </Link>
          <Link to="/" onClick={handleDelete}>
            <button className="text-[#DC1414] font-semibold border-2 border-[#DC1414] mx-3 py-1.5 w-24 rounded-lg">
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="description py-16 px-32 w-5/6 text-[#64607D] leading-[30px]">
        <p className="my-5 font-medium text-[1.1rem] break-words">
          {targetURL[0].description}
        </p>
      </div>
    </>
  );
};

export default Details;
