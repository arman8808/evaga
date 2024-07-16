import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assets/Images/logo-1.png";
import logo1 from "../../../assets/Images/logo-2.png";
import logo2 from "../../../assets/Images/favicon.png";
import girlImage from "../../../assets/Images/Rectangle 103.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { Backdrop, Box, Modal, Slide, Typography } from "@mui/material";
import { HomePagePopup } from "../../utils/Style/Style";
function Navbar() {
  let activeStyle = {
    color: "#9253A6",
    fontweight: "500",
    fontFamily: "tan-pearl",
    fontSize: "1.2rem",
    textDecoration: "none",
    borderBottom: "2px solid #9253A6",
  };
  let unActiveStyle = {
    color: "#B0B0B0",
    fontFamily: "tan-pearl",
    fontSize: "1.2rem",
    fontweight: "400",
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
  const history = useNavigate();
  return (
    <nav
      className={`w-full flex items-center justify-center  sticky top-[0.7rem]  ${
        scrolled ? "navbarAnimation" : "invisible"
      }`}
      style={{ zIndex: "999" }}
    >
      <div className="w-11/12 flex items-center justify-around p-3 border-2  rounded-full bg-[white] mobile:justify-between tablet:justify-between">
        <img
          src={logo}
          alt="logo"
          className="h-[4.5rem] mobile:h-[3.5rem] cursor-pointer"
          onClick={() => history("/")}
        />
        <ul className="flex gap-4 text-[1.1rem] text-marqueColor font-semibold cursor-pointer mobile:hidden tablet:hidden">
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
          className="buttonNormal text-marqueColor hover:bg-marqueColor hover:text-[white] hover:transition ease-in-out delay-150 hover:scale-105 flex items-center gap-1 text-[1.1rem] font-medium mobile:hidden tablet:hidden hover:animate-bounceIn"
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
        <Slide direction="up" in={open}>
          <Box
            sx={HomePagePopup}
            className="w-[800px] mobile:w-[380px] grid grid-cols-2 gap-4 mobile:grid-cols-1"
          >
            <div className="flex items-start justify-center flex-col gap-3">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="flex items-center justify-center gap-4"
              >
                <img
                  src={logo1}
                  alt="logo"
                  className="h-[5rem] object-contain"
                />
                <p className="text-[0.8rem] text-textColor">
                  We’re an award-winning creative agency that executes
                  exceptional events and brand experiences worldwide.
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
              <div className="w-full mt-3 flex items-center justify-center gap-1">
                <img
                  src={logo2}
                  alt="logo"
                  className="h-[4rem] object-contain"
                />
                <h6 className="text-para text-marqueColor font-semibold">
                  The Evaga Entertainment
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={girlImage}
                alt="girlImage"
                className="rounded-md boxShadow h-[25rem] mobile:hidden"
              />
            </div>
          </Box>
        </Slide>
      </Modal>
    </nav>
  );
}

export default Navbar;
