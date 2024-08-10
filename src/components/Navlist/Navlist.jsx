import React from "react";
import "../../style.css";
import icon from "../../assets/icon/bawah.png";

export default function Navlist() {
  const navItems = ["BERITA", "AKADEMIK", "ADMISI", "BEASISWA", "TENTANG KAMI"];

  return (
    <div className="text-white p-2 z-40">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-16  justify-center items-center">
        {navItems.map((item) => (
          <li
            className="cursor-pointer text-base font-semibold leading-6 text-center p-2.5 flex items-center"
            key={item}
          >
            {item}
            {item === "AKADEMIK" && (
              <img className="w-3 h-2 ml-2" src={icon.src} alt="icon" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
