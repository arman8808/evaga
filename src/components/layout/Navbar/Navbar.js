import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assets/Images/logo-1.png";
import logo1 from "../../../assets/Images/logo-2.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function Navbar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "0px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: "8px",
  };
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const comRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!comRef.current.contains(e.target)) {
        document.getElementById("menu__toggle").checked = false;
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <nav
      className={`w-full flex items-center justify-center  sticky top-[1rem]  ${
        scrolled ? "navbarAnimation" : "invisible"
      }`}
      style={{ zIndex: "999999" }}
    >
      <div className="w-11/12 flex items-center justify-around p-3 border-2  rounded-full bg-[white] mobile:justify-between">
        <img src={logo} alt="logo" className="h-[4.5rem] mobile:h-[3.5rem]" />
        <ul className="flex gap-4 text-[1.1rem] text-marqueColor font-semibold cursor-pointer mobile:hidden">
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
        <button
          className="buttonNormal text-marqueColor flex items-center gap-1 text-[1.1rem] font-medium mobile:hidden"
          onClick={handleOpen}
        >
          Call Back Request <MdOutlinePhoneInTalk />
        </button>
        <div className="hamburger-menu hidden mobile:flex tablet:flex">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            ></span>
          </label>
          <ul className="menu__box" ref={comRef}>
            <li>
              <NavLink
                to="/"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Career
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contactus"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Conatct
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="flex items-center justify-center gap-4"
            >
              <img src={logo1} alt="logo" className="h-[5rem] object-contain" />
              <p className="text-para text-textColor">
                We’re an award-winning creative agency that executes exceptional
                events and brand experiences worldwide.
              </p>
            </Typography>
            <form className="w-full mt-4 flex items-start justify-start flex-col gap-4">
              <input
                type="text"
                placeholder="Event"
                className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
              />
              <button className="w-full h-[2.3rem] outline-none border-2 border-[#A9A9A9] rounded-md text-[#A9A9A9]">
                Enquiry Now
              </button>
            </form>
            <div className="w-full mt-3 flex items-center justify-between">
              <p>+91 9044542535</p>
              <p>test@gmail.com</p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </nav>
  );
}

export default Navbar;
