import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between gap-8 m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-[40px] flex flex-row items-center"
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer rounded-full hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            
          </span>
        </a>

        <div className="w-full max-w-[500px] h-full hidden md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Accueil
            </a>
            <a href="#skills" className="cursor-pointer">
              Compétences
            </a>
            <a href="#projects" className="cursor-pointer">
            Réalisation
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            
            <a href={social.link} key={social.id} className="cursor-pointer">
              <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
