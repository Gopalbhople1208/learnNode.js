import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState("");

  useEffect(() => {
    fetch("http://localhost:4202")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCount(data.message);
      });
  }, []);

 return (
  <div className="min-h-screen flex flex-col">

    {/* Navbar */}
    <nav className="bg-blue-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">MyApp</h1>

      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">About</li>
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">Contact</li>
      </ul>
    </nav>

    {/* Hero Section (Takes Remaining Screen Height) */}
    <div className="flex flex-col flex-1 justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-center px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Home Page
      </h1>

      <h2 className="text-xl md:text-2xl">
        Your one-stop solution for awesome content
      </h2>

      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        Get Started
      </button>

    </div>

  </div>
);

}

export default App

