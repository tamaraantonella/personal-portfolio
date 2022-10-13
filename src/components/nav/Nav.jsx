import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

export default function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav className="bg-[#261f384d] w-max py-[0.7rem] px-8 z-10 fixed left-[50%] bottom-8 translate-x-[-50%] flex  gap-[1.3rem] rounded-3xl backdrop-blur-md ">
      <a
        href="#top"
        onClick={() => setActive("#")}
        className={`p-2 rounded-full  text-xl   ${
          active === "#"
            ? ` bg-color_primary text-color_bg`
            : ` bg-transparent`
        }`}
      >
        {" "}
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={`p-2 rounded-full  text-xl ${
          active === "#about"
            ? ` bg-color_primary text-color_bg`
            : ` bg-transparent`
        }`}
      >
        {" "}
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={`p-2 rounded-full  text-xl  ${
          active === "#experience"
            ? ` bg-color_primary text-color_bg`
            : ` bg-transparent`
        }`}
      >
        {" "}
        <HiAcademicCap />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={`p-2 rounded-full  text-xl ${
          active === "#projects"
            ? ` bg-color_primary text-color_bg`
            : ` bg-transparent`
        }`}
      >
        {" "}
        <MdHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={`p-2 rounded-full  text-xl ${
          active === "#contact"
            ? ` bg-color_primary text-color_bg`
            : ` bg-transparent`
        }`}
      >
        {" "}
        <MdOutlineMessage />
      </a>
    </nav>
  );
}
