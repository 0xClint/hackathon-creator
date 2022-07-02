import React from "react";
import { Dphi } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header h-[64px] px-20 py-3 shadow-sm">
        <Link to="/">
          <Dphi className="h-10 hover:scale-105 duration-100 ease-in" />
        </Link>
      </section>
    </>
  );
};

export default Header;
