import React from "react";

import ContactModal from "../components/ContactModal";
import Name from "../components/Name";

function Contact() {
  return <div className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10 ">
    <Name props={"Get In Touch"} className="mx-auto p-4 sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words  md:text-left text-5xl font-extrabold text-gray-500 text-shadow-4xs rounded-xl "></Name>
    <ContactModal/>

  </div>;
}

export default Contact;
