import React, { useState } from "react";
import { Downarrow, Upload } from "../assets";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addForm } from "../Redux/actions";

const CreateForm = () => {
  const leveldata = [
    { id: "1", level: "easy" },
    { id: "2", level: "medium" },
    { id: "3", level: "hard" },
  ];

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  // let [img, setImg] = useState("----");
  let imgFile;
  const [level, setlevel] = useState("");
  const [levelOpen, setLevelOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLevel = (level) => {
    setlevel(level);
    setLevelOpen(false);
  };
  function handleFile(e) {
    // console.log(e.target.files[0]);
    const reader = new FileReader();

    reader.addEventListener("load", async () => {
      imgFile = reader.result;

      await console.log(imgFile);
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleSubmit = () => {
    if (
      name === "" ||
      startDate === "" ||
      endDate === "" ||
      description === "" ||
      level === ""
    ) {
      console.log("Please enter valid data!");
      document.querySelector("#create-btn").innerHTML =
        "Please enter valid data!";
      return;
    }
    const data = {
      name,
      startDate,
      endDate,
      description: description,
      img: imgFile,
      level: level,
      id: new Date().getTime().toString(),
    };

    dispatch(addForm(data));
  };

  return (
    <>
      <div className="heading text-[1.3rem] z-0 pl-32 font-semibold bg-[#F8F9FD] py-12">
        Challenge Details
      </div>
      <div className="form_container px-32 py-8">
        <div className="name flex flex-col my-2">
          <label className="my-2">Challenge Name</label>
          <input
            className="block bg-white my-2 border border-slate-300 rounded-md w-1/3 p-2 shadow-sm focus:outline-none sm:text-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="start-date flex flex-col my-5">
          <label className="my-2">Start Date</label>
          <input
            className="block bg-white my-2 border border-slate-300 rounded-md w-1/3 p-2 shadow-sm focus:outline-none sm:text-sm"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="end-date flex flex-col my-5">
          <label className="my-2">End Date</label>
          <input
            className="block bg-white my-2 border border-slate-300 rounded-md w-1/3 p-2 shadow-sm focus:outline-none sm:text-sm"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="description flex flex-col my-5">
          <label className="my-2">Description</label>
          <textarea
            className="block bg-white my-2 border border-slate-300 p-2 focus:outline-none sm:text-sm rounded-md w-2/3 h-60 shadow-sm "
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="image flex flex-col my-5">
          <label className="my-2">Image</label>
          <label className="border-2 my-2 cursor-pointer text-[1.1rem] border-slate-300 bg-[#F4F4F4] text-[#666666] w-60 flex items-center justify-center py-3 rounded-md">
            Upload
            <Upload className="ml-1" />
            <input
              type="file"
              name="file"
              onChange={(e) => handleFile(e)}
              className="hidden"
              id=""
            />
          </label>
        </div>
        <div className="h-52 ">
          <div className="level flex flex-col my-5">
            <label className="my-2">Level Type</label>
            <div
              className="level_Container flex border border-slate-300 w-60 bg-[#F4F4F4] items-center justify-between px-5  rounded-md"
              onClick={() => setLevelOpen(!levelOpen)}
            >
              <label className="my-2">{level ? level : "Level"}</label>
              <Downarrow className="ml-10 mt-1 scale-110 cursor-pointer" />
            </div>
            <div className="dropdown bg-[#F4F4F4] px-5 duration-150 ease-in rounded-br-md rounded-bl-md w-60">
              {levelOpen &&
                leveldata.map((items) => {
                  return (
                    <div
                      className="my-2 cursor-pointer"
                      key={items.id}
                      onClick={() => handleLevel(items.level)}
                    >
                      {items.level}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Link to="/">
          <button
            onClick={handleSubmit}
            id="create-btn"
            className="create-btn bg-[#44924C] my-5 text-white py-3 px-8 text-[1.1rem] rounded-[10px]"
          >
            Create Challenge
          </button>
        </Link>
      </div>
    </>
  );
};

export default CreateForm;
