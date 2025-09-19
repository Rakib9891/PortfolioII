import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import ExplodingText from "../components/ExplodingText.jsx";
import ExplodingText2 from "../components/ExplodingText2.jsx";
import Drag from "../components/Drag"
import Name from "../components/Name.jsx";
import HeroRight from "../components/HeroRight.jsx";
import SocialLink from "../components/SocialLink.jsx";


export default function Home() {
  return (
    <main className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10 ">

      <Drag></Drag>

      <div className="mt-5 p-4 bg-gray-200 border-gray-500 border rounded-xl shadow-lg">
      <ExplodingText2 text="Mern Stack Developer" className=""/>
      </div>
         <section className="lg:flex lg:mt-10 h-[80vh] ">

         <div className=" mt-10 xl:w-1/2 xl:px-30 xl:max-h-fit border-white border hover:border-gray-500 p-4 rounded-2xl">
            
        <Name props={"Hello, I am Rakibul Hasan"} className="mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left "></Name>

         <div className="intro mx-auto p-4 text-base sm:text-sm md:text-lg lg:text-lg leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left fade-in text-gray-800">
          a passionate web developer focused on the MERN stack. I love building interactive, modern web applications and solving programming challenges. I am constantly learning and experimenting with new technologies to create efficient and user-friendly digital experiences
         </div>

         <SocialLink/>

         </div> 
         <div className="mt-10 xl:w-1/2 border border-white hover:border-gray-500 p-4 rounded-2xl lg:max-h-fit">

          <HeroRight />

         </div>
         </section>


    </main>
  );
}

