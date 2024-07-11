import React from "react";
import logo from "../../../assets/Images/logo-1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="w-full bg-[black] mt-4 flex items-center justify-center flex-col p-4 pb-[2rem] text-[white] gap-4">
      <img src={logo} alt="logo" className="h-[6rem] object-conatin" />
      <ul className="flex items-center justify-center gap-4 mobile:flex-wrap">
        <li>Weddings</li>
        <li>Corporate</li>
        <li>Government </li>
        <li>Special </li>
        <li>Community events </li>
      </ul>
      <ul className="flex items-center justify-center gap-4 mobile:flex-wrap">
        <li>Privacy Policy</li>
        <li>Contact Us </li>
        <li>Terms & Conditions </li>
        <li>Careers </li>
        <li>Blog</li>
      </ul>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <FaXTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaInstagram />{" "}
        </li>
        <li>
          <FaFacebookF />
        </li>
      </ul>
      <p className="text-center">
        Copyright © 2024 Designed and Developed by Branding 360
      </p>
    </footer>
  );
}

export default Footer;
