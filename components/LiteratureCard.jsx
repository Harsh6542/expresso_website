import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const LiteratureCard = ({ literature }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-transparent rounded-xl shadow-lg border-2 border-gray-200 w-60 h-80 backdrop-filter backdrop-blur-lg">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col col-span-1 md:col-span-8/10 bg-transparent items-start">
          <div className="text-xl font-bold text-center text-white font-antonio">
            {literature.title}
          </div>
          <div className="text-[10] text-left text-white font-antonio mt-2">
            {literature.author}
          </div>
        </div>
        <div className="flex flex-col col-span-1 items-center text-bold md:col-span-2/10  bg-transparent border-white border-l-4 border-b-4 m-0 p-0.5 text-black">
          <div className="mb-1 max-h-[70px] overflow-hidden">
            <Image
              src={literature.authorImage}
              width={65}
              height={80}
              alt={literature.author}
            />
          </div>
          <div className="flex flex-col items-center font-bold text-white text-center text-[10px] font-sans">
            <span>{literature.author}</span>
            <div className="flex">
              {literature.instagram && (
                <a href={literature.instagram} target="_blank" className="mx-1">
                  <FaInstagram className="text-white m-0.5 align-middle w-3 h-5 hover:cursor-pointer" />
                </a>
              )}
              {literature.linkedin && (
                <a href={literature.linkedin} target="_blank" className="mx-1">
                  <FaLinkedin className="text-white m-0.5 align-middle w-3 h-5 hover:cursor-pointer" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex mt-2">
        <Image
          src={literature.coverImage}
          width={240}
          height={250}
          alt={literature.title}
        />
      </div> */}
      <div className="text-white text-sm mt-2 justify-between whitespace-pre-line overflow-y-auto max-h-64 font-[PPWoodland-Regular]">
        {literature.description}
      </div>
    </div>
  );
};

export default LiteratureCard;
