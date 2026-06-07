import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="w-full h-screen flex items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="text-center px-4">
       
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-8">
          🎨 Background Changer
        </h1>

  
        <p className="text-xl md:text-2xl text-white mb-16">
          Current Color:
          <span className="ml-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md font-semibold capitalize">
            {color}
          </span>
        </p>

    
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-8">
          <button
            onClick={() => setColor("red")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-6 py-3 rounded-full text-black font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("brown")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor("purple")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("pink")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="px-6 py-3 rounded-full text-black font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("gray")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("olive")}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-transform duration-300 hover:z-10 hover:scale-110 hover:-translate-y-1"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;