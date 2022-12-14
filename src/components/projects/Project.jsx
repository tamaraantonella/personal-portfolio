import React from "react";

export default function Project({
  urlImg,
  name,
  details,
  tech,
  liveDemo,
  repo,
}) {
  return (
    <div className="  border border-b-2 border-transparent p-[1.4rem] rounded-md transition-all duration-500 flex flex-col md:flex-row w-full md:items-center hover:border-color_primary_variant hover:bg-transparent md:gap-8">
      <div className=" w-full md:w-80  h-[200px] ">
        <img
          className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01]"
          src={urlImg}
          alt=""
        />
      </div>

      <div className="md:w-2/4">
        <h3 className="font-semibold text-xl mt-3">{name}</h3>
        <h5 className="text-color_light">{details}</h5>
        <h5 className="text-color_light mb-3 h-20">{tech}</h5>
        <div className="flex gap-2 mb-3">
          <a
            href={repo}
            className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
            target="_blank"
            rel="noreferrer">
            Repo
          </a>
          <a
            href={liveDemo}
            className="rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-black   hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
            target="_blank"
            rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
