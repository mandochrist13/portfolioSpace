import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/phyto.png"
          title="Phytoscience Gabon"
          description="Phyto Science est une entreprise mondiale de santé et de bien-être."
          lien= "https://phytosciencegabon.com/"
        />
        <ProjectCard
          src="/onmaced.png"
          title="Cabinet Onmaced"
          description="Le Cabinet d’Expertise et de Conseils Stratégiques ONMACED & fils est spécialisé dans les secteurs Finance, Mines et Hydrocarbures."
          lien= "https://cabinet-onmaced.com/"
        />
        <ProjectCard
          src="/desty.png"
          title="Desty Shop"
          description="Boutique en ligne où la mode et les tendances se rencontrent "
          lien= "https://destyshop.fr/"
        />
        <ProjectCard
          src="/keepHeart.png"
          title="Keep earth"
          description="Un Avertissement pour notre Planète : L'Histoire de Nos Choix. "
          lien= "https://projet-nasa.vercel.app/"
        />
        <ProjectCard
          src="/mbulu.png"
          title="Mbulu"
          description="Le dictionnaire numérique interactif dédié aux langues gabonaises. "
          lien= "https://dev-mbulu.netlify.app/"
        />
        <ProjectCard
          src="/suncom.png"
          title="Suncomcocotier"
          description="SUNCOM COCOTIERS est une PME de droit gabonais dont l’offre de services s’articule à la vente des solutions et des produits aux particuliers et aux Entreprises. "
          lien= "https://suncomcocotiers.com/fr/"
        />
        <ProjectCard
          src="/fourniture.png"
          title="Fourniture en ligne"
          description="Fourniture en Ligne est la solution innovante pour simplifier la préparation de la rentrée scolaire. "
          lien= "https://fournitureenligne.com/"
        />
        <ProjectCard
          src="/ecmac.png"
          title="ECMAC"
          description="1ère école d'Afrique Centrale, spécialisée dans les métiers de la Monétique & TES. "
          lien="https://www.ecmac-gabon.org/"
        />
        <ProjectCard
          src="/sgts.png"
          title="SGTS bazar"
          description="Plateforme e-commerce moderne de vente en tout genre"
          lien="https://bazar-lilac.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
