import React, { useRef } from "react";
import kiri from "../../../assets/icon/kiri.png";
import kanan from "../../../assets/icon/kanan.png";
import gambar1 from "../../../assets/img-1.jpg";
import gambar2 from "../../../assets/img-2.jpg";
import gambar3 from "../../../assets/img-3.jpg";
import gambar4 from "../../../assets/img-4.jpg";
import gambar5 from "../../../assets/img-5.jpg";

const dataCard = [
  { id: 1, title: "Mini Degree", time: "26-29 April 2024", image: gambar1.src },
  { id: 2, title: "Admission Talk", time: "19 April 2024", image: gambar2.src },
  { id: 3, title: "Open House", time: "23 Maret 2024", image: gambar3.src },
  { id: 4, title: "Career Launchpad: Empowering Vocational Future", time: "1 Maret 2024", image: gambar4.src },
  { id: 5, title: "Mini Degree 3.0", time: "26-29 April 2024", image: gambar5.src },
];

const data = [
  ...dataCard,
  ...dataCard.map(event => ({
    ...event,
    id: event.id + 5,
  }))
];

function CardEvent({ title, time, image }) {
  return (
    <div className="w-72 h-304 pb-6 m-2 flex-shrink-0 lg:z-0">
      <img className="w-72 lg:z-0 h-60 rounded-xl object-cover" src={image} alt={title} />
      <div className="font-semibold text-base w-full text-white mt-2.5 line-clamp-2">
        {title}
      </div>
      <p className="font-normal text-white text-sm pb-11">{time}</p>
    </div>
  );
}

export default function Event() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-auto h-auto bg-background-event py-10 px-20 lg:z-0">
      <div className="flex justify-between border-b-2 border-yellow-600">
        <div className="pb-2.5">
          <h1 className="font-semibold text-2xl text-white">Event Kami</h1>
          <p className="text-white font-normal text-lg leading-5">
            Informasi terbaru tentang Event Universitas Sinergi
          </p>
        </div>
        <div className="flex gap-x-2.5">
          <img
            className="w-7 h-7 cursor-pointer"
            src={kiri.src}
            alt="Back"
            onClick={() => scroll('left')}
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src={kanan.src}
            alt="Next"
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      <div className="relative mt-10 mb-16">
        <div
          className="flex gap-x-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 overflow-y-hidden scrollbar-track-gray-100 p-4"
          ref={scrollRef}
        >
          {data.map((card) => (
            <CardEvent
              key={card.id}
              title={card.title}
              time={card.time}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
