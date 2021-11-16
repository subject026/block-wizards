import React from "react";

import { getHSL, shiftLightness } from "../../utils";

export default function Hat({ color }) {
  const black = "#000";
  const hat3 = shiftLightness(color, -8);
  const hat2 = shiftLightness(color, -16);
  const hat1 = shiftLightness(color, -24);
  return (
    <>
      {/* 
      nose

     */}
      <path style={{ fill: black }} d="M3.44 4.498h.529v.265H3.44z" />

      <g>
        <path
          style={{ fill: black }}
          d="M7 10v1h1v3h1v-3h3v3h1v-2h1v2h1v-3h3v3h1v-4H9Zm11 4h-3v1h3zm-6 0H9v1h3zm-5-3H6v1h1z"
          transform="scale(.26458)"
        />
      </g>
      <g>
        <path style={{ fill: black }} d="M.794 2.381h1.852v.265H.794z" />
        <path
          style={{ fill: black }}
          d="M2.381 2.117h2.91v.265h-2.91zM4.762 1.852h.265v.265h-.265zM3.969 1.587h.794v.265h-.794z"
        />
        <path
          style={{ fill: black }}
          d="M3.704 1.323h.265v.265h-.265zM3.44 1.058h.265v.265H3.44zM3.175.794h.265v.265h-.265zM2.646.529h.529v.265h-.529zM1.587.265h1.058V.53H1.587z"
        />
        <path
          style={{ fill: black }}
          d="M1.323.529h.265v.265h-.265zM.794.794h.529v.265H.794z"
        />
        <path
          style={{ fill: black }}
          d="M.529 1.058h1.058v.265H.529zM.529 1.323h.265v.265H.529zM1.587 1.323h.265v.529h-.265zM1.852 1.587h.265v.265h-.265zM.794 1.852h.794v.265H.794zM.529 2.117h.265v.265H.529z"
        />
      </g>
      <g>
        <path
          style={{ fill: getHSL(hat1) }}
          d="M5 3v1h1v1h1v1h2V4H8V3Z"
          transform="scale(.26458)"
        />
      </g>
      <g>
        <path
          style={{ fill: getHSL(hat2) }}
          d="M6 2v1h2v1h1v2H8v1h7V6h-4V4h-1V3H9V2Zm2 5H6v1h2z"
          transform="scale(.26458)"
        />
      </g>
      <g>
        <path
          style={{ fill: getHSL(hat3) }}
          d="M9 2v1h1V2Zm1 1v1h1v2h3V5h-1V4h-1V3ZM8 7v1H3v1h6V8h9V7Z"
          transform="scale(.26458)"
        />
      </g>
    </>
  );
}
