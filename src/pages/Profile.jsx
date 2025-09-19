import React from "react";
import Name from "../components/Name";
import profilPic from "../assets/profile.jpg";

// function Profile() {
//   return <div className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10 ">
//     <Name props={"Welcome To My Profile"} className="mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words  md:text-left "></Name>
//     <div className="mt-6 p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words  md:text-left ">
//       <div>
//       <h2 className="mb-5 text-3xl text-gray-500">About Me</h2>
//       <div className="text-justify text-gray-800">
//       I’m Rakibul Hasan, a dedicated MERN stack developer with a passion for creating seamless digital experiences. From interactive front-end designs to robust back-end systems, I enjoy bringing projects to life while continuously sharpening my skills.
//       </div>
//       </div>
      
//       <img src="" alt="" />
//     </div>
//   </div>;
// }

// export default Profile;

function Profile() {
  return (
    <div className="flex max-w-[90vw] lg:max-w-[80vw] mx-auto flex-col items-center justify-center mt-10">
      <Name 
        props={"Welcome To My Profile"} 
        className="mx-auto p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words md:text-left"
      />
      
      <div className="mt-6 p-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words md:text-left space-y-12">
        
        {/* Profile Image and About Me Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-shrink-0">
            <img 
              src={profilPic}
              alt="Rakibul Hasan" 
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="mb-5 text-3xl text-gray-500 font-semibold">About Me</h2>
            <div className="text-justify text-gray-800 space-y-4">
              <p>
                I'm Rakibul Hasan, a dedicated MERN stack developer with a passion for creating seamless digital experiences. From interactive front-end designs to robust back-end systems, I enjoy bringing projects to life while continuously sharpening my skills.
              </p>
              <p>
                With expertise in modern web technologies and a keen eye for user experience, I strive to build applications that are not only functional but also intuitive and engaging.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="mb-6 text-3xl text-gray-500 font-semibold">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience/Education Section */}
        <div>
          <h2 className="mb-6 text-3xl text-gray-500 font-semibold">Background</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-medium text-gray-800">Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">Self-taught & Personal Projects</p>
              <p className="text-gray-700">
                Developed multiple full-stack applications using MERN stack, focusing on responsive design and user experience.
              </p>
            </div>
            {/* Add more experience/education entries as needed */}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="mb-6 text-3xl text-gray-500 font-semibold">Interests & Hobbies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💻', label: 'Coding' },
              { icon: '🎮', label: 'Gaming' },
              { icon: '📚', label: 'Learning' },
              { icon: '🎵', label: 'Music' }
            ].map(interest => (
              <div key={interest.label} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{interest.icon}</span>
                <span className="text-gray-700 font-medium">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-6 text-3xl text-gray-500 font-semibold">Get In Touch</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
            <p className="text-gray-700 mb-4">
              I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:your-email@gmail.com" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email</span>
              </a>
              <a href="https://github.com/your-username" className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/your-profile" className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fun Fact or Quote */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl text-center">
          <p className="text-lg italic text-gray-700">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
          <p className="text-sm text-gray-600 mt-2">My development philosophy in a nutshell!</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;