import { GiCheckMark } from "react-icons/gi";
import React from "react";

const ExperienceFront = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Ajax</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Bootstrap</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>CSS</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>HTML</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Javascript</h4>
      </article>

      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>React Native</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>React</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>React-Redux</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>SASS</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Tailwind</h4>
      </article>
    </div>
  );
};

export default ExperienceFront;
