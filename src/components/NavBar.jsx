import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="inline-flex items-center space-x-2 bg-gray-100 p-2 rounded-2xl mx-auto mt-8 my-4 shadow-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
            isActive
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/Profile"
        className={({ isActive }) =>
          `px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
            isActive
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          }`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/Projects"
        className={({ isActive }) =>
          `px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
            isActive
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          }`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
            isActive
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          }`
        }
      >
        Contact
      </NavLink>
    </header>
  );
}

export default NavBar;
