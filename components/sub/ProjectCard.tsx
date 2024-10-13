import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  lien: string;
}

const ProjectCard = ({ src, title, description, lien }: Props) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden pb-3 rounded-lg shadow-lg border border-[#2A0E61]">
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
                <motion.a
                variants={slideInFromLeft(1)}
                  href={lien}
                  className="p-2 relative button-primary z-20 rounded mt-6 text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black"
                >
                  
                  Visualiser le projet
                </motion.a>
              </div>
    </div>
  );
};

export default ProjectCard;
