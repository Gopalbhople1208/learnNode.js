import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

function App() {

  const [count, setCount] = useState("");

  useEffect(() => {
    fetch("http://localhost:4202")
      .then((resp) => resp.json())
      .then((data) => {
        setCount(data.message);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">MyApp</h1>

        <ul className="flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home count={count} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;


