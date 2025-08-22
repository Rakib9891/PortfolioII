import React from "react";

import SocialLink from "../components/SocialLink.jsx";
function ContactModal() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center m-10 px-6"
    >
      <h2 className="text-5xl font-extrabold text-gray-500 leading-relaxed text-shadow-4xs rounded-xl ">
        Get In Touch
      </h2>
      <p className="text-gray-500 max-w-xl text-center mb-8">
        I’m always open to new opportunities and collaborations. Whether you
        have a question or just want to say hi, feel free to reach out.
      </p>

      <div className="flex flex-col lg:gap-40 justify-around lg:flex-row items-center">

        <div className="w-2xl mb-8 lg:mb-0">

        {/* Contact Form */}
        <form className="w-fit bg-gray-300 shadow-xl rounded-4xl p-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-500 hover:scale-105 transition-all duration-300 ease-in-out p-3 shadow-xl rounded-4xl  bg-gray-400 outline-none hover:border-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-500 hover:scale-105 transition-all duration-300 ease-in-out p-3 shadow-xl rounded-4xl  bg-gray-400 outline-none hover:border-gray-700"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-500 hover:scale-105 transition-all duration-300 ease-in-out p-3 shadow-xl rounded-4xl  bg-gray-400 outline-none hover:border-gray-700"
            required
          ></textarea>
          <button 
          className="w-full border border-gray-500 hover:scale-105 transition-all duration-300 ease-in-out p-3 shadow-xl rounded-4xl text-gray-600 bg-gray-400 outline-none hover:border-gray-700">
            Send Message
          </button>
        </form>
         </div>

        <div className="">
          {/* Direct Contact Info */}
          <div className="mt-6 flex  gap-4">
            <a href="mailto:rakibul@example.com" className="social-items">
              Email
            </a>
            <a href="https://wa.me/01726600273" className="social-items">
              WhatsApp
            </a>
            <a href="tel:+8801726600273" className="social-items">
              Phone
            </a>

  
          </div>

          
          <SocialLink />
         

         
          {/* Social Links */}
        </div>
      </div>
    </section>
  );
}

export default ContactModal;
