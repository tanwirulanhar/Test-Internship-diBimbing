import img1 from "../../../assets/m-1.jpeg";
import img2 from "../../../assets/m-2.jpeg";
import img3 from "../../../assets/m-3.jpeg";
import img4 from "../../../assets/m-4.jpeg";
import img5 from "../../../assets/m-5.jpeg";
import img6 from "../../../assets/avatar1.jpeg";
import img7 from "../../../assets/m-6.jpeg";

export default function Mahasiswa() {
  const dataMahasiswa = [
    {
      id: 1,
      image: img1.src,
      title: "Your Must-Read Roadmap to Optimize for New HTS Codes",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 2,
      image: img2.src,
      title:
        "Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 3,
      image: img3.src,
      title: "IMF World Economic Outlook Revises Growth Forecasts",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 4,
      image: img4.src,
      title: "We’re moving Masks for NHS Heroes and we need your support",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 5,
      image: img5.src,
      title: "We’re moving Masks for NHS Heroes and we need your support",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 6,
      image: img6.src,
      title: "We’re moving Masks for NHS Heroes and we need your support",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 7,
      image: img7.src,
      title: "We’re moving Masks for NHS Heroes and we need your support",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
    {
      id: 8,
      image: img1.src,
      title: "We’re moving Masks for NHS Heroes and we need your support",
      time: "21 Sept 2023 . Oleh Jhon Doe ",
    },
  ];

  return (
    <div className="w-full h-auto py-10 px-4 lg:px-20">
      <div className="border-b-2 border-yellow-600">
        <h1 className="font-semibold text-2xl">Mahasiswa</h1>
        <p className="font-normal text-sm pb-2.5">
          Berita terkini mengenai aktivitas, prestasi, dan riset mahasiswa
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5 w-full h-auto">
        {dataMahasiswa.map((data) => (
          <div
            className="flex flex-row md:flex-col gap-4 w-auto h-auto rounded-xl "
            key={data.id}
          >
            <img
              className="w-auto h-36 lg:h-37 rounded-xl object-cover"
              src={data.image}
              alt="img"
            />
            <div>
              <h1 className="mt-2.5 font-semibold text-base line-clamp-2">
                {data.title}
              </h1>
              <p className="mt-2.5 font-normal text-sm mb-5">{data.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
