import React from "react";

import Hat from "./Wizard/Hat.js";

import { getHSL, shiftHue } from "../utils/index.js";

const Wizard = ({ color, svg }) => {
  const secondaryColor = shiftHue(color, 70);
  const nextColor = shiftHue(secondaryColor, 70);

  return (
    <div>
      <svg
        style={{ height: "100%", shapeRendering: "crispEdges" }}
        viewBox="0 0 6.615 6.615"
        xmlns="http://www.w3.org/2000/svg"
        ref={svg}
      >
        <defs>
          <linearGradient id="a">
            <stop style={{ stopColor: getHSL(secondaryColor) }} offset="0" />
            <stop style={{ stopColor: getHSL(color) }} offset="1" />
          </linearGradient>
          <linearGradient
            xlinkHref="#a"
            id="b"
            x1="0"
            y1="6.085"
            x2="6.615"
            y2=".529"
            gradientUnits="userSpaceOnUse"
          />
        </defs>
        <g>
          <path
            style={{
              fill: "url(#b)",
              fillRule: "evenodd",
              strokeWidth: 0.264583,
              fillOpacity: 1,
            }}
            d="M0 0h6.615v6.615H0z"
          />
        </g>

        {/* <g>
          <path
            style={{
              fill: "#c8beb7",
            }}
            d="M0 0h6.615v6.615H0z"
          />
        </g> */}
        <g>
          <path
            style={{ fill: "#d38d5f" }}
            d="M2.117 2.117v.264h-.265v.794h-.265v.53h.265v2.91h1.323v-.53h1.058v-.264h.265v-.265h.264V2.381h-.264v-.264h-.265Z"
          />
        </g>
        <g>
          <path
            style={{ fill: "#000" }}
            d="M9 7v1h7V7Zm7 1v1h1V8Zm1 1v12h1V9Zm0 12h-1v1h1zm-1 1h-5v3h1v-2h4zM9 8H8v1h1ZM8 9H7v3h1Zm-1 3H6v2h1zm0 2v11h1V14Z"
            transform="scale(.26458)"
          />
        </g>
        <g>
          <path style={{ fill: "#000" }} d="M3.175 5.027h.794v.265h-.794z" />
        </g>
        <g>
          <path
            style={{ fill: getHSL(color) }}
            d="M3.969 2.91h.794v.794h-.794zM2.381 2.91h.794v.794h-.794z"
          />
        </g>
        <path
          style={{ fill: "#000" }}
          d="M7 10v1h1v3h1v-3h3v3h1v-2h1v2h1v-3h3v3h1v-4H7zm11 4h-3v1h3v-1zm-6 0H9v1h3v-1zm-5-3H6v1h1v-1z"
          transform="scale(.26458)"
        />

        {/* hat */}
        <Hat color={nextColor} />
      </svg>
    </div>
  );
};

export default Wizard;
