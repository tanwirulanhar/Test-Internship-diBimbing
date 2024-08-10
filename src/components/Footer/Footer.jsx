import React from "react";
import school from "../../assets/icon/school-2.svg";
import facebook from "../../assets/icon/bxl-facebook.png";
import twitter from "../../assets/icon/bxl-twitter.png";
import instagram from "../../assets/icon/bxl-instagram-alt.png";
import youtube from "../../assets/icon/bxl-youtube.png";
import kanan from "../../assets/icon/bx-right-arrow-alt.png";

export default function Footer() {
  return (
    <div className="w-full py-5 px-20 md:px-20 bg-footer">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-11 pb-5 border-b-2 border-slate-400">
        <div className="mb-5 md:mb-0 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img className="w-11 h-11" src={school.src} alt="img" />
            <div className="text-black ml-4">
              <h1 className="text-2xl font-medium">Sinergi</h1>
              <p className="text-lg font-medium">University</p>
            </div>
          </div>
          <p className="font-normal text-sm">
            Jl. Kemang, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
          </p>
          <div className="flex justify-center md:justify-start gap-2.5 mt-2.5">
            <img className="w-6 h-6" src={facebook.src} alt="facebook" />
            <img className="w-6 h-6" src={twitter.src} alt="twitter" />
            <img className="w-6 h-6" src={instagram.src} alt="instagram" />
            <img className="w-6 h-6" src={youtube.src} alt="youtube" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-base flex justify-center md:justify-start gap-1 mb-2.5">
              Academic <img src={kanan.src} alt="kanan" />
            </h1>
            <h1 className="font-semibold text-base flex justify-center md:justify-start gap-1">
              Admission <img src={kanan.src} alt="kanan" />
            </h1>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-base flex justify-center md:justify-start gap-1 mb-2.5">
              News <img src={kanan.src} alt="kanan" />
            </h1>
            <h1 className="font-semibold text-base flex justify-center md:justify-start gap-1">
              About Us <img src={kanan.src} alt="kanan" />
            </h1>
          </div>
        </div>
      </div>

      <p className="text-slate-500 mt-5 mb-11 font-normal text-sm text-center">
        © 2023 Sinergi University. All Rights Reserved.
      </p>
    </div>
  );
}
