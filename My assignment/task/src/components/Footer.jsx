import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
}
