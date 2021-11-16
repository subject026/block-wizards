import React, { useState, createRef } from "react";
import Wizard from "./components/Wizard";
import { saveAsPng } from "./components/Canvas";

// const parts = ["background", ""];

const initialState = {
  color: {
    h: Math.floor(Math.random() * 360),
    s: 95,
    l: 50,
  },
};

function App() {
  const [state, setState] = useState({
    ...initialState,
  });

  const svg = createRef(null);

  const handleInputChange = ({ target: { value, name } }) => {
    let newColor = { ...state.color };
    switch (name) {
      case "hue":
        newColor.h = value;
        break;
      case "sat":
        newColor.s = value;
        break;
      case "light":
        newColor.l = value;
        break;
      default:
        console.log("whaaaaaaa");
    }
    console.log(newColor);
    setState(() => ({ ...state, color: { ...newColor } }));
  };

  const handleClick = async () => {
    const result = await saveAsPng({ svg: svg.current });
    console.log(result);

    const a = document.createElement("a"); //Create <a>
    a.href = result; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click(); //Downloaded file
  };
  console.log(state);
  return (
    <div className="min-h-screen bg-gray-300 p-4 sm:p-12 flex flex-col justify-center items-center">
      <div>
        <Wizard svg={svg} color={state.color} />
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
              value={state.color.h}
              onChange={handleInputChange}
            />
            <input
              name="hue"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="360"
              value={state.color.h}
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
              value={state.color.s}
              onChange={handleInputChange}
            />
            <input
              name="sat"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="100"
              value={state.color.s}
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
              value={state.color.l}
              onChange={handleInputChange}
            />
            <input
              name="light"
              onChange={handleInputChange}
              type="range"
              min="0"
              max="100"
              value={state.color.l}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
