"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Modal from "./Modal";

const HeroContent = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center  px-5 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center md:items-start items-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="md:text-[#ba9cff] font-bold text-slate-800 text-[13px]">
            Développeur web Front-End
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            MANDO
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Christ-Of-Fair{" "}
            </span>
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          Passionné par l&apos;univers numérique et fort de plus de trois ans
d&apos;expérience dans la conception et le développement
d&apos;applications web, compétent en web design et avec une
connaissance des frameworks front-end.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" onClick={()  => setShowModal(true)}
        >
          Voir mon CV
        </motion.a>
        <div>
          <Modal isVisible={showModal} onClose={() => setShowModal(false) } />
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full  h-full flex justify-center items-center"
      >
        <div className="bg-black  w-[300px] rounded-full hidden md:flex  justify-center items-center">
            <Image
              src="/cof13.jpg"
              priority
              quality={100}
              alt="image christo"
              className="rounded-full  absolute object-contain w-[300px] h-[300px]"
              width={1000}
              height={1000}
            />
            <motion.svg
              className="w-[300px] relative h-[300px]"
              fill="transparent"
              viewBox="0 8 586 586"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="300"
                cy="300"
                r="300"
                stroke="#bbf3ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
              />
            </motion.svg>
          </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
