import * as React from "react";
import { IIconProps } from "src/models";

const IconLibrary: React.FC<IIconProps> = ({ w, h, className }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={w}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default IconLibrary;
