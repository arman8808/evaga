import React, { useEffect, useState } from "react";
import logo from "../../../assets/Images/logo-1.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Navbar() {
  let activeStyle = {
    color: "#9253A6",
    fontweight: "600",
    textDecoration: "none",
    borderBottom: "2px solid #9253A6",
  };
  let unActiveStyle = {
    color: "#B0B0B0",
    fontweight: "600",
    textDecoration: "none",
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    console.log(scrolled);
  }, [scrolled]);
  return (
    <nav
      className={`w-full flex items-center justify-center sticky top-[1rem] z-50 ${
        scrolled ? "navbarAnimation" : "invisible"
      }`}
    >
      <div className="w-11/12 flex items-center justify-around p-3 border-2  rounded-full bg-[white]">
        <img src={logo} alt="logo" className="h-[4.5rem]" />
        <ul className="flex gap-4 text-[1.1rem] text-marqueColor font-semibold cursor-pointer">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="buttonNormal text-marqueColor flex items-center gap-1 text-[1.1rem] font-medium">
          Call Back Request <MdOutlinePhoneInTalk />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
