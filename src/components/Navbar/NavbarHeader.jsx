import React, { useState } from "react";
import Indonesia from "../../assets/icon/indonesia.png";
import England from "../../assets/icon/england.png";
import "../../style.css";

export default function NavbarHeader() {
  return (
    <div class="w-full h-auto bg-white py-4 px-20  lg:block hidden ">
      <div class="gap-6 flex items-center font-normal font-rubik text-center text-sm">
        <p class="flex gap-x-1  ">
          {" "}
          <img class="w-8 h-5" src={Indonesia.src} alt="img" /> ID
        </p>
        <p class="flex gap-x-1 ">
          {" "}
          <img class="w-8 h-5  " src={England.src} alt="img" /> EN
        </p>
      </div>
    </div>
  );
}
