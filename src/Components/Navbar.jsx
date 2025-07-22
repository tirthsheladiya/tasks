import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4  text-[#043A53] mx-0 md:mx-15 bg-[#FFFFFF] md:bg-transparent">
      <div className="flex gap-2 items-center">
        <img className="h-6" src="/Logo.png" alt="logo" />
        <img className="h-4" src="/Trustco..png" alt="logo" />
      </div>
      <div className="flex gap-8 font-bold text-sm hidden md:flex">
        <h4>Features</h4>
        <h4>Solutions</h4>
        <h4>Company</h4>
        <h4>Resources</h4>
        <h4>Contact</h4>
      </div>
      <i className="ri-menu-line md:hidden text-2xl"></i>
      <div className="flex gap-2 hidden md:flex">
        <button className="px-4 py-2 bg-[#FFFFFF] rounded-3xl text-sm">
          Sign in
        </button>
        <button className="px-4 py-2 bg-[#043A53] rounded-3xl text-sm text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
