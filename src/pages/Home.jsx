import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import ExplodingText from "../components/ExplodingText.jsx";
import ExplodingText2 from "../components/ExplodingText2.jsx";
import Drag from "../components/Drag"



export default function Home() {
  return (
    <main className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10 ">

      <Drag></Drag>

      <div>
      <ExplodingText2 text="Mern Stack Developer" />
      </div>

         {/* <ExplodingText text="Hi, I am Rakibul Hasan, a passionate web developer focused on the MERN stack. I love building interactive, modern web applications and solving programming challenges. I am constantly learning and experimenting with new technologies to create efficient and user-friendly digital experiences."/> */}

         <section className="xl:flex border w-full h-[80vh] ">

         <div className=" mt-10 xl:w-1/2">

        <div>
          
        </div>

         <div className="intro mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left ">
          Hi, I am Rakibul Hasan, a passionate web developer focused on the MERN stack. I love building interactive, modern web applications and solving programming challenges. I am constantly learning and experimenting with new technologies to create efficient and user-friendly digital experiences
         </div>

         <div className="social-link flex mt-10 gap-4 z-10 max-w-full sm-max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto justify-center">
          <a className="social-items" href="/">LinkedIn</a>
          <a className="social-items" href="/">Twitter</a>
          <a className="social-items" href="/">Github</a>
          <a className="social-items" href="/">Facebook</a>
         </div>


         </div> 
         <div className="border  ">
         
         </div>
         </section>


    </main>
  );
}

