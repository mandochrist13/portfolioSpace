"use client";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { useEffect, useRef } from "react";

export default function Home() {
  // Ajout de l'audioRef pour lire la musique
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Gestion d'erreur si la lecture automatique est bloquée
        console.log("Lecture automatique bloquée :", error);
      });
    }
  }, []);

  return (
    <main className="h-full w-full">
      {/* L'audio est défini ici et sera lu automatiquement si permis */}
      <audio
        ref={audioRef}
        src="/House of The Dragon_ Targaryen Theme _ EPIC VERSION (Game of Thrones x House of the Dragon).mp3"
        preload="auto"
        loop
      />
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
