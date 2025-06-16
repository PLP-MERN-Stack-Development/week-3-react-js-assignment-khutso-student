import { useState } from 'react';
import './App.css';
import RandomUser from './components/RandomUser'; // Adjust path if needed
import TaskManager from './components/TaskManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <Navbar />

      </header>

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            {/* <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p> */}
            
            {/* <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div> */}

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              <TaskManager />

            </p>
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
       <div className="text-gray-500 dark:text-gray-400">
          <RandomUser />
        </div>

        </div>
      </main>

      {/* Footer component will go here */}
      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <Footer />

      </footer>
    

    </div>
  );
  
}

export default App; 