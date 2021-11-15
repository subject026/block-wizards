import React, { useState, createRef } from "react";
import Wizard from "./components/Wizard";
import { saveAsPng } from "./components/Canvas";

// const parts = ["background", ""];

const initialState = {
  color: "",
  hue: Math.floor(Math.random() * 360),
  sat: 90,
  light: 10,
};

function App() {
  const [state, setState] = useState({
    ...initialState,
    color: `hsl(${initialState.hue}, ${initialState.sat}%, ${initialState.light}%)`,
  });

  const svg = createRef(null);

  const handleInputChange = ({ target: { value, name } }) => {
    console.log(name, value);
    const newState = { ...state };
    newState[name] = value;
    const { hue, sat, light } = newState;
    const color = `hsl(${hue}, ${sat}%, ${light}%)`;
    setState(() => ({ ...newState, color }));
  };

  const handleClick = async () => {
    console.log(svg.current);
    const result = await saveAsPng({ svg: svg.current });
    console.log(result);
  };

  const { hue, sat, light, color } = state;

  return (
    <div className="min-h-screen bg-gray-300 p-4 sm:p-12 flex flex-col justify-center items-center">
      <div>
        <Wizard svg={svg} color={color} />
        <div className="p-2 sm:p-12 md:px-32 bg-gray-200 uppercase">
          <button className="bg-red-700 p-4" onClick={handleClick}>
            save
          </button>
          <label className="block p-4 mb-4 sm:mb-8 bg-gray-100">
            Hue
            <input
              name="hue"
              id="hue"
              className="ml-4 mb-4"
              type="number"
              step="1"
              min="0"
              max="360"
              value={hue}
              onChange={handleInputChange}
            />
            <input
              name="hue"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="360"
              value={hue}
            />
          </label>
          <label className="block p-2 mb-4 bg-gray-100">
            Saturation
            <input
              className="m-4"
              name="sat"
              type="number"
              step="1"
              min="0"
              max="100"
              value={sat}
              onChange={handleInputChange}
            />
            <input
              name="sat"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="100"
              value={sat}
            />
          </label>
          <label className="block p-4 bg-gray-100">
            Lightness
            <input
              className="mb-4 mr-4"
              name="light"
              type="number"
              step="1"
              min="0"
              max="100"
              value={light}
              onChange={handleInputChange}
            />
            <input
              name="light"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="100"
              value={light}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
