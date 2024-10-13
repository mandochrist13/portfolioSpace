"use client";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Tentative de lecture automatique (sera bloquée dans la plupart des navigateurs)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Lecture automatique bloquée");
      });
    }
  }, []);

  return (
    <main className="h-full w-full">
      <audio
        ref={audioRef}
        src="/HouseOfTheDragon.mp3"
        preload="auto"
        loop
      />

      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>

      <div className="fixed z-20 bottom-5 right-5">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="bg-green-500 text-white p-2 rounded"
          >
            Play Music
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="bg-red-500 text-white p-2 rounded"
          >
            Pause Music
          </button>
        )}
      </div>
    </main>
  );
}
