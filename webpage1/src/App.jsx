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
  <div>

    {/* Navbar */}
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyApp</h1>

      {/* Menu */}
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">About</li>
        <li className="hover:text-yellow-300 cursor-pointer transition duration-300">Contact</li>
      </ul>

    </nav>

    {/* Content Section */}
    <div className="p-8 text-center">
      <h2 className="text-2xl font-semibold">{count}</h2>
    </div>

  </div>
);
}

export default App

