import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import photo from "../assets/project1.png";

function ProjectCard() {
  const [showProject, setshowProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Linkstaa",
      imageUrl: photo,
    },

  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-screen p-25 relative">
      {projects.map((card, index) => (
        <div
          key={index}
          onClick={() => setshowProject(card)}
          className="border border-gray-400 flex flex-col items-center justify-center m-4 p-4 rounded-2xl hover:scale-105 hover:cursor-pointer hover:border-gray-500 transition-all duration-300"
        >

            <img
              className="w-full h-auto object-cover"
              src={card.imageUrl}
              alt={card.title}
            />
         
          <p>{card.description}</p>
        </div>
      ))}

      {<ProjectModal select={showProject} onClose={() => setshowProject(null)}/>}
    </div>
  );
}

export default ProjectCard;
