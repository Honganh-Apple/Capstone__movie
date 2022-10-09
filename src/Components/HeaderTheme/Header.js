import React from "react";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="shadow">
      <div className="h-20 flex justify-between  items-center mx-auto container">
        <span className="text-yellow-500 text-2xl font-medium animate-bounce">
          CyberMovie
        </span>
        <div className="flex space-x-10 text-xl">
          <NavLink to="/">
            <h3 className="cursor-pointer hover:text-blue-800 transition">
              Home
            </h3>
          </NavLink>
          <h3 className="cursor-pointer  hover:text-blue-800 transition">
            Details
          </h3>
          <h3 className="cursor-pointer  hover:text-blue-800 transition">
            News
          </h3>
        </div>
        <UserNav />
      </div>
      <div className="slider"></div>
    </div>
  );
}
