import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Navbar: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-gray-200 dark:bg-gray-800">
      <div className="font-bold text-lg text-gray-800 dark:text-white">
        PLP MERN
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline text-blue-600 dark:text-blue-400">
          Tasks
        </Link>
        <Link to="/posts" className="hover:underline text-blue-600 dark:text-blue-400">
          API Posts
        </Link>
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-400"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
