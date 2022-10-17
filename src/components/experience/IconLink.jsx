import React from "react";

export default function IconLink({ path, icon, name }) {
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className={`flex justify-center pb-3 transition-all ease-in-out duration-500 md:grayscale hover:grayscale-0 cursor-pointer ${name === 'express' && 'invert'}`}
    >
      <img src={icon} alt={name} />
    </a>
  );
}
