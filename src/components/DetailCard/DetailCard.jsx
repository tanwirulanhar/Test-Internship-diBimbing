import React from "react";
import image1 from "../../assets/icon/bx-chevron-right.png";
import image2 from "../../assets/icon/bx-calendar.png";
import image3 from "../../assets/pemadam.jpeg";
import user from "../../assets/icon/bx-user.png";
import linkedin from "../../assets/icon/bxl-linkedin.png";
import instagram from "../../assets/icon/bxl-instagram.png";
import whatsapp from "../../assets/icon/bxl-whatsapp.png";
import twitter from "../../assets/icon/bxl-twitter-2.png";
import share from "../../assets/icon/bx-share-alt.png";
import kalender from "../../assets/icon/bx-calendar.png";

export default function DetailCard() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-5">
        <div className="flex items-center gap-2.5">
          <p className="font-normal text-base text-blue-400">Berita</p>
          <img className="w-6 h-6" src={image1.src} alt="arrow" />
          <p className="font-normal text-base text-slate-500">
            Port Workers Portray the Reality of Bottlenecks
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-10">
        <div className="flex-1">
          <h1 className="font-semibold text-2xl">Port Workers Portray the Reality of Bottlenecks</h1>
          <p className="mt-5 flex items-center gap-4 text-slate-500">
            Oleh Kartika Nofiyanti.{" "}
            <img className="w-5 h-5" src={image2.src} alt="calendar" /> 26 Sep 2022
          </p>
          <img
            className="object-cover rounded-xl w-full h-auto mt-10"
            src={image3.src}
            alt="main"
          />
          <p className="mt-10 font-normal text-base text-justify">
            Lorem ipsum dolor sit amet consectetur. Eu egestas amet venenatis
            volutpat. Ultricies orci sagittis quis mi. Arcu nulla nibh lacinia
            vulputate molestie sed odio. Diam ultricies ipsum dolor cursus
            gravida viverra. Vestibulum ultrices dolor quam ut quis in blandit.
            At odio integer scelerisque orci tellus mi curabitur. <br /> Nisi facilisis
            dolor purus massa lacus sit. Libero est elementum egestas
            adipiscing. Ultrices volutpat malesuada pharetra aenean nunc fames
            est. Fusce orci in tortor ultricies diam id. Sed lacus et quam
            malesuada. Erat molestie sit at amet sit aliquet massa nulla
            aliquam. In erat integer etiam interdum. Aliquet amet aliquam
            aliquam id est nulla sem malesuada pulvinar. Fames tempor lobortis
            aliquam accumsan. Mus congue senectus amet a vehicula facilisis
            porttitor. Mauris leo ipsum urna ac auctor tincidunt purus semper.<br />
            Aliquet morbi turpis tellus dictum nunc tempus arcu turpis. Libero
            quam volutpat facilisis hac semper imperdiet diam donec in. Sagittis
            non massa tellus morbi quisque. Adipiscing in ultricies turpis
            adipiscing aliquet felis nisl eget. Malesuada in faucibus blandit
            nunc tellus arcu tristique vitae viverra. Eget nunc amet etiam
            senectus urna duis egestas eget ullamcorper. Rhoncus dolor mauris
            vitae turpis elementum scelerisque. Ipsum odio semper porttitor quis
            tincidunt nec. Pellentesque purus ornare at nullam adipiscing nec
            duis. Morbi pellentesque mi ut aliquam id scelerisque. Ornare
            dignissim vitae ipsum arcu dictum odio integer. Ornare tellus nisi
            lacus duis luctus. <br /> Duis ullamcorper amet amet ut. Facilisi sapien
            consequat in nec iaculis in lectus est. Aliquam nibh tellus orci
            turpis erat leo donec non. Et purus aliquam nam urna. Eget quam
            augue sapien laoreet pretium augue. Feugiat et sit senectus erat
            convallis habitant. Quisque vestibulum risus adipiscing imperdiet
            vivamus congue tincidunt tellus at. Eget nunc posuere risus cras
            mollis sit eu vel. Tellus consequat rhoncus gravida quisque in eget.
            Maecenas ipsum pharetra quis sed. Nunc placerat viverra sit quis. Id
            lectus ullamcorper sed suspendisse varius tristique. Quam placerat
            egestas suspendisse nisi. Blandit et viverra nisl augue et.
            Elementum posuere condimentum facilisis ante viverra. Enim eget
            vestibulum mi sagittis donec. Tellus rhoncus massa posuere feugiat
            sed adipiscing in habitant sodales. Ipsum odio id quisque mauris sit
            pulvinar viverra nec in. Mi nisl venenatis sagittis et vulputate
            pretium mi ut. Nisi urna suspendisse senectus netus dignissim
            ultrices mus. Ut fames dignissim id nibh purus dictum. At nunc vel
            in sed diam in interdum. Molestie rhoncus egestas tristique id quis
            amet sed.
          </p>

          <p className="font-bold text-sm font-sans mt-10">Share</p>
          <div className="flex gap-2.5 mt-2 flex-wrap">
            <img
              className="w-6 h-6 bg-blueicon p-1 rounded-full"
              src={linkedin.src}
              alt="linkedin"
            />
            <img
              className="w-6 h-6 bg-blueicon p-1 rounded-full"
              src={instagram.src}
              alt="instagram"
            />
            <img
              className="w-6 h-6 bg-blueicon p-1 rounded-full"
              src={whatsapp.src}
              alt="whatsapp"
            />
            <img
              className="w-6 h-6 bg-blueicon p-1 rounded-full"
              src={twitter.src}
              alt="twitter"
            />
            <img
              className="w-6 h-6 bg-blueicon p-1 rounded-full"
              src={share.src}
              alt="share"
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <h1 className="font-semibold text-center lg:text-left text-xl mb-4">Berita Terkait</h1>
          <div className="py-5 px-3 border-b-2 mb-4">
            <h1 className="font-semibold text-base mb-2">Your Must-Read Roadmap to Optimize for New HTS Codes</h1>
            <p className="flex items-center gap-1">
              <img className="w-4 h-4 mt-1" src={user.src} alt="user" /> Dibimbing.id . <img className="w-4 h-4 mt-1" src={kalender.src} alt="calendar" /> 26 Sep 2022
            </p>
          </div>
          <div className="py-5 px-3 border-b-2 mb-4">
            <h1 className="font-semibold text-base mb-2">Your Must-Read Roadmap to Optimize for New HTS Codes</h1>
            <p className="flex items-center gap-1">
              <img className="w-4 h-4 mt-1" src={user.src} alt="user" /> Dibimbing.id . <img className="w-4 h-4 mt-1" src={kalender.src} alt="calendar" /> 26 Sep 2022
            </p>
          </div>
          <div className="py-5 px-3 border-b-2 mb-4">
            <h1 className="font-semibold text-base mb-2">Your Must-Read Roadmap to Optimize for New HTS Codes</h1>
            <p className="flex items-center gap-1">
              <img className="w-4 h-4 mt-1" src={user.src} alt="user" /> Dibimbing.id . <img className="w-4 h-4 mt-1" src={kalender.src} alt="calendar" /> 26 Sep 2022
            </p>
          </div>
          <div className="py-5 px-3 border-b-2 mb-4">
            <h1 className="font-semibold text-base mb-2">Your Must-Read Roadmap to Optimize for New HTS Codes</h1>
            <p className="flex items-center gap-1">
              <img className="w-4 h-4 mt-1" src={user.src} alt="user" /> Dibimbing.id . <img className="w-4 h-4 mt-1" src={kalender.src} alt="calendar" /> 26 Sep 2022
            </p>
          </div>
          <div className="py-5 px-3 border-b-2">
            <h1 className="font-semibold text-base mb-2">Your Must-Read Roadmap to Optimize for New HTS Codes</h1>
            <p className="flex items-center gap-1">
              <img className="w-4 h-4 mt-1" src={user.src} alt="user" /> Dibimbing.id . <img className="w-4 h-4 mt-1" src={kalender.src} alt="calendar" /> 26 Sep 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
