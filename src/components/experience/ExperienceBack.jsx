import React from "react";
import { GiCheckMark } from "react-icons/gi";

const ExperienceBack = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>NodeJs</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Express</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>MySQL</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>ORM</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>Sequelize</h4>
      </article>
      <article className="flex gap-3 items-center">
        <GiCheckMark className="experience__details-icons" />
        <h4>PostgreSQL</h4>
      </article>
    </div>
  );
};

export default ExperienceBack;
