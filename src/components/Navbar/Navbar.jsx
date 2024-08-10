import React, { useState } from "react";
import Navlist from "../Navlist/Navlist";
import "../../style.css";
import school from "../../assets/icon/school.svg";
import menuIcon from "../../assets/icon/bx-menu.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto bg-blue-navbar py-5 px-6 lg:px-20 flex justify-between items-center relative">
      <div className="flex gap-1 items-center">
        <img className="w-11 h-11" src={school.src} alt="img" />
        <div className="text-white gap-0">
          <h1 className="text-2xl font-medium">Sinergi</h1>
          <p className="text-lg font-normal">University</p>
        </div>
      </div>

      {/*ini bagian humberger menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <img className="w-8 h-8" src={menuIcon.src} alt="menu" />
        </button>
      </div>

      {/* Navigation List */}
      <div className={`lg:block ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 right-0 bg-blue-navbar lg:static lg:z-40`}>
        <Navlist />
      </div>
    </div>
  );
}
