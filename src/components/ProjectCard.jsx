import React, { useState } from "react";
// import { log } from "three/tsl";
import ProjectModal from "./ProjectModal";
import photo from "../assets/penguin.png";

function ProjectCard() {
  const [showProject, setshowProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "This is the first project.",
      imageUrl: photo,
      link: "this is the live link",

    },
    {
      id: 2,
      title: "Project Two",
      description: "This is the second project.",
      imageUrl: photo,
      link: "this is the live link",

    },
    {
      id: 3,
      title: "Project Three",
      description: "This is the third project.",
      imageUrl: photo,
      link: "this is the live link",

    },
    {
      id: 4,
      title: "Project Four",
      description: "This is the fourth project",
      imageUrl: photo,
      link: "this is the live link",

    },
  ];
//   if (click) {
//     console.log(`Cliked ${card.title}`);
//   }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-screen p-25 relative">
      {projects.map((card, index) => (
        <div
          key={index}
          onClick={() => setshowProject(card)}
          className="border border-gray-500 h-72 flex flex-col items-center justify-center m-4 p-4"
        >
          <h2>{card.title}</h2>
          <div className="p-4 h-48 w-48">
            <img
              className="w-full h-auto object-cover"
              src={card.imageUrl}
              alt={card.title}
            />
          </div>
          <p>{card.description}</p>
        </div>
      ))}

      {<ProjectModal select={showProject} onClose={() => setshowProject(null)}/>}
    </div>
  );
}

export default ProjectCard;
