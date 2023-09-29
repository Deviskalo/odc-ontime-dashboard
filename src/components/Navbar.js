import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Ontime Logo.png";
import UserProfileImage from "../images/icons2.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#000] p-4 flex justify-between items-center z-10">
      <div className="bg-white p-3 rounded-[10px]">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-15 h-6" />
        </Link>
      </div>

      <div className="text-white text-300 font-bold hover:orange space-x-6">
        <Link to="/" className="hover:text-orange-300">
          Dashboard
        </Link>
        <Link to="/attendance" className="hover:text-orange-300">
          Attendance
        </Link>
        <Link to="/events" className="hover:text-orange-300">
          Events
        </Link>
        <Link to="/activities" className="hover:text-orange-300">
          Activities
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border overflow-hidden">
            <img
              src={UserProfileImage}
              alt="user-profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-white opacity-50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
