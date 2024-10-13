import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  lien: string;
}

const ProjectCard = ({ src, title, description, lien }: Props) => {
  return (
    <div className="relative overflow-hidden pb-3 rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="p-2">
                <a
                  href={lien}
                  className="p-2 border rounded mt-6 border-[#bbf3ff] text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black"
                >
                  En savoir plus
                </a>
              </div>
    </div>
  );
};

export default ProjectCard;
