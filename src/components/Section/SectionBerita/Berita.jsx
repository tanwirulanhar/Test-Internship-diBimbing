import React from "react";
import bgBerita from "../../../assets/bgBerita.jpeg";
import pemadam from "../../../assets/pemadam.jpeg";
import avatar1 from "../../../assets/avatar1.jpeg";
import avatar2 from "../../../assets/avatar2.jpeg";
import avatar3 from "../../../assets/avatar3.jpeg";
import avatar4 from "../../../assets/avatar4.jpeg";
import "../../../style.css";

const dataBerita = [
  {
    id: 1,
    title: "Your Must-Read Roadmap to Optimize for New HTS Codes",
    time: "21 Sept 2023 . Oleh Jhon Doe",
    image: avatar1.src,
  },
  {
    id: 2,
    title:
      "Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane",
    time: "21 Sept 2023 . Oleh Jhon Doe",
    image: avatar3.src,
  },
  {
    id: 3,
    title: "IMF World Economic Outlook Revises Growth Forecasts",
    time: "21 Sept 2023 . Oleh Jhon Doe",
    image: avatar2.src,
  },
  {
    id: 4,
    title: "We’re moving Masks for NHS Heroes and we need your support",
    time: "21 Sept 2023  .  Oleh Jhon Doe",
    image: avatar4.src,
  },
];

function CardBerita({ title, time, image }) {
  return (
    <div className="flex flex-row md:flex-col gap-4 w-auto h-full rounded-xl">
      <img
        className="w-full h-36 md:w-24 md:h-24 lg:w-auto lg:h-36 rounded-xl object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col md:flex-col md:justify-between w-full">
        <div className="font-semibold text-base text-black my-2.5 line-clamp-2 md:order-1 md:my-0">
          {title}
        </div>
        <p className="font-normal text-black text-sm mb-10 md:order-2 md:mb-0">
          {time}
        </p>
      </div>
    </div>
  );
}



export default function Berita() {
  return (
    <div
      className="bg-cover w-full py-10 px-4 lg:px-20 bg-[url('./assets/bg2.png')]"
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-black text-4xl font-bold border-b-2 px-2 text-center border-yellow-600 pb-2">
          Berita Terbaru
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 w-full gap-10">
   
        <div className="w-full lg:w-1/2 h-auto">
          <a href="/detailcard" className="block">
            <img
              className="w-full h-64 lg:h-399 rounded-xl object-cover cursor-pointer"
              src={pemadam.src}
              alt="Port Workers"
            />
            <h1 className="text-black font-semibold text-xl mt-2.5">
              Port Workers Portray the Reality of Bottlenecks
            </h1>
            <p className="text-black font-normal text-sm mt-2.5">
              21 Sept 2023 . Oleh Jhon Doe
            </p>
          </a>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-1/2">
          {dataBerita.map((berita) => (
            <CardBerita
              key={berita.id}
              title={berita.title}
              time={berita.time}
              image={berita.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

