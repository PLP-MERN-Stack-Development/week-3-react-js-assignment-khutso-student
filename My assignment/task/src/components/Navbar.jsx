import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          PLP Task Manager
        </h1>

        {/* Navigation links */}
        <div className="space-x-4 hidden md:flex">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Tasks
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
        </div>

        {/* Hamburger menu placeholder for mobile (optional) */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Icon (3 bars) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
