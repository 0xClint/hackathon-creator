import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Downarrow, Search, Uparrow } from "../assets";
import Card from "./Card";
import { levelSorter, statusSorter } from "./sorter";

const Challenge = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { FormList } = useSelector((state) => state.challenges);
  const [updatedList, setUpdatedList] = useState(FormList);
  console.log(FormList);

  function handleStatus(e) {
    const { id, checked } = e.target;

    if ((id == "All" && checked) || !checked) {
      setUpdatedList(FormList);
    } else {
      var checkboxes = document.getElementsByName("status");
      checkboxes.forEach((item) => {
        if (item.id !== id) {
          item.checked = false;
        }
      });
      setUpdatedList(statusSorter(FormList, id));
    }
  }

  function handleSearch(query) {
    console.log(query);
    const filteredList = FormList.filter((items) => {
      return items.name.includes(query);
    });
    console.log(filteredList);
    setUpdatedList(filteredList);
  }

  function handleLevel(e) {
    const { id, checked } = e.target;
    if (!checked) {
      setUpdatedList(FormList);
    } else {
      var checkboxes = document.getElementsByName("level");
      checkboxes.forEach((item) => {
        if (item.id !== id) {
          item.checked = false;
        }
      });
      setUpdatedList(levelSorter(FormList, id));
    }
  }
  return (
    <>
      <div className="search bg-[#002A3B] text-white py-12">
        <h1 className="text-center text-[1.9rem] font-semibold py-7">
          Explore Challenges
        </h1>
        <div className="menu flex justify-center  py-7 px-32">
          <div className="search_container h-12 flex items-center bg-white rounded-xl mx-4 px-10 w-[60%] py-2.5">
            <Search className="mr-2" />
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
              className="focus:outline-none shadow-sm text-black text-[1rem]"
            />
          </div>
          {filterOpen ? (
            <div className="filter_Container w-48 rounded-xl text-black absolute left-[76%] h-[325px] pl-4 bg-white">
              <div
                onClick={() => setFilterOpen(!filterOpen)}
                className="bg-white rounded-xl  h-12 flex justify-between pr-4 cursor-pointer text-[1.2rem]  items-center"
              >
                <p className=" font-normal">Filter</p>
                <Uparrow className="ml-4 mt-1 scale-110 cursor-pointer" />
              </div>
              <div className="status">
                <h1 className="text-[#666666] py-2">Status</h1>
                <div className="checkbox_container flex">
                  <input
                    type="checkbox"
                    name="status"
                    id="All"
                    onClick={(e) => handleStatus(e)}
                  />
                  <label className="text-[#858585] ml-2 text-[0.95rem]">
                    All
                  </label>
                </div>
                <div className="checkbox flex">
                  <input
                    type="checkbox"
                    name="status"
                    id="Active"
                    className=""
                    // checked={true}
                    onClick={(e) => handleStatus(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 text-[0.95rem]">
                    Active
                  </label>
                </div>
                <div className="checkbox flex">
                  <input
                    type="checkbox"
                    name="status"
                    id="Upcoming"
                    className=""
                    onClick={(e) => handleStatus(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 text-[0.95rem]">
                    Upcoming
                  </label>
                </div>
                <div className="checkbox flex">
                  <input
                    type="checkbox"
                    name="status"
                    id="Past"
                    className=""
                    onClick={(e) => handleStatus(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 text-[0.95rem]">
                    Past
                  </label>
                </div>
              </div>
              <div className="level">
                <h1 className="text-[#666666] py-2">Level</h1>
                <div className="checkbox_container flex">
                  <input
                    type="checkbox"
                    name="level"
                    id="Easy"
                    className=""
                    onClick={(e) => handleLevel(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 mt- text-[0.95rem]">
                    Easy
                  </label>
                </div>
                <div className="checkbox flex">
                  <input
                    type="checkbox"
                    name="level"
                    id="Medium"
                    className=""
                    onClick={(e) => handleLevel(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 text-[0.95rem]">
                    Medium
                  </label>
                </div>
                <div className="checkbox flex">
                  <input
                    type="checkbox"
                    name="level"
                    id="Hard"
                    className=""
                    onClick={(e) => handleLevel(e)}
                  />
                  <label className="text-[#858585] ml-2 my-0.5 text-[0.95rem]">
                    Hard
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-white rounded-xl w-48 text-black h-12 absolute left-[76%] flex cursor-pointer justify-between px-4 text-[1.2rem]  items-center"
            >
              <p className=" font-normal">Filter</p>
              <Downarrow className="ml-4 mt-1 scale-110 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
      <div className="Cards flex flex-wrap px-32 bg-[#003145] py-10">
        {updatedList.map((items) => {
          return <Card items={items} />;
        })}
      </div>
    </>
  );
};

export default Challenge;
