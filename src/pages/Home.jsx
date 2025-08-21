import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import ExplodingText from "../components/ExplodingText.jsx";
import ExplodingText2 from "../components/ExplodingText2.jsx";
import Drag from "../components/Drag"
import Name from "../components/Name.jsx";
import HeroRight from "../components/HeroRight.jsx";


export default function Home() {
  return (
    <main className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10 ">

      <Drag></Drag>

      <div className="mt-5  p-4">
      <ExplodingText2 text="Mern Stack Developer" />
      </div>
         <section className="lg:flex lg:mt-10 h-[80vh] ">

         <div className=" mt-10 xl:w-1/2 xl:px-30 xl:max-h-fit border p-4 rounded-2xl">
            
        <Name className="mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left "></Name>

         <div className="intro mx-auto p-4 text-base sm:text-sm md:text-lg lg:text-lg leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left fade-in text-gray-800">
          Hi, I am Rakibul Hasan, a passionate web developer focused on the MERN stack. I love building interactive, modern web applications and solving programming challenges. I am constantly learning and experimenting with new technologies to create efficient and user-friendly digital experiences
         </div>

         <div className="social-link flex mt-10 mb-2 gap-4 z-10 max-w-full sm-max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto justify-center relative">
          <a className="social-items" href="/">LinkedIn</a>
          <a className="social-items" href="/">Twitter</a>
          <a className="social-items" href="/">Github</a>
          <a className="social-items" href="/">Instagram</a>
          <a className="social-items" href="/">Facebook</a>
         </div>


         </div> 
         <div className="mt-10 xl:w-1/2 border border-gray-500 p-4 rounded-2xl lg:max-h-fit">

          <HeroRight />

         </div>
         </section>


    </main>
  );
}

