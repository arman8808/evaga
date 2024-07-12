import React from "react";
import logo from "../../../assets/Images/logo-1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Footer() {
  const history = useNavigate();
  return (
    <footer className="w-full bg-[black] mt-4 flex items-center justify-center flex-col p-4 pb-[2rem] text-[white] gap-4">
      <img src={logo} alt="logo" className="h-[6rem] object-conatin" />
      <ul className="flex items-center justify-center gap-4 mobile:flex-wrap cursor-pointer">
        <li onClick={() => history("/service")}>Weddings</li>
        <li onClick={() => history("/service")}>Corporate</li>
        <li onClick={() => history("/service")}>Government </li>
        <li onClick={() => history("/service")}>Special </li>
        <li onClick={() => history("/service")}>Community events </li>
      </ul>
      <ul className="flex items-center justify-center gap-4 mobile:flex-wrap cursor-pointer">
        <li>Privacy Policy</li>
        <li onClick={() => history("/contactus")}>Contact Us </li>
        <li>Terms & Conditions </li>
        <li onClick={() => history("/career")}>Careers </li>
        <li onClick={() => history("/blog")}>Blog</li>
      </ul>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <FaXTwitter className="text-[1.2rem]" />
        </li>
        <li>
          <FaLinkedinIn className="text-[1.2rem]" />
        </li>
        <li>
          <FaWhatsapp className="text-[1.2rem]" />
        </li>
        <li>
          <FaInstagram className="text-[1.2rem]" />{" "}
        </li>
        <li>
          <FaFacebookF className="text-[1.2rem]" />
        </li>
      </ul>
      <p className="text-center">
        Copyright © 2024 Designed and Developed by Branding 360
      </p>
    </footer>
  );
}

export default Footer;
