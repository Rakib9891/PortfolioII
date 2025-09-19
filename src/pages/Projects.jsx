import React from "react";
import ProjectCard from "../components/ProjectCard";
import Name from "../components/Name";

function Projects() {
  return <div className="flex flex-col justify-center items-center gap-4 overflow-y-visible">
    <Name props={"My Projects"} className="mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left "></Name>

    <ProjectCard/>
    </div>
 
}

export default Projects;
