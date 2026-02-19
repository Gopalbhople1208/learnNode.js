import { useState, useEffect } from "react";


function About() {
  const [count, setCount] = useState("");

  
    useEffect(() => {
      fetch("http://localhost:4202")
        .then((resp) => resp.json())
        .then((data) => {
          setCount(data.message);
        });
    }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-center px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to About Page
      </h1>

      <h2 className="text-xl md:text-2xl mb-4">
        Your one-stop solution for awesome content
      </h2>

      <p className="text-lg mb-6">{count}</p>

      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        Get Started
      </button>

    </div>
  );
}

export default About;
