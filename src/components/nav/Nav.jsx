import React, { useState } from "react";
import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useWindowDimensions } from "../index";
import Menu from "./Menu";

export function Nav({ easing }) {

  const [active, setActive] = useState("#");
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  function handleMenu() {
    setOpen(!open);
  }
  function handleSelection(what) {
    setActive(what);
    setOpen(false);
  }

  useEffect(() => {
    const domContent = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      );
      //Track all sections that have an `id` applied
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });
    };
    domContent();
  }, [active]);
  return (
    <>
      <button
        onClick={handleMenu}
        className={
          `fixed sm:hidden right-0 m-2 px-1 rounded-md mt-5 z-50 text-color_primary text-3xl` +
          (open ? ` bg-color_primary text-black` : ``)
        }>
        {!open ? <FiMenu /> : <MdOutlineClose />}
      </button>

      {width < 640 ? (
        <Menu
          open={open}
          active={active}
          handleSelection={handleSelection}
          easing={easing}
        />
      ) : (
        <Menu
          open={null}
          active={active}
          handleSelection={handleSelection}
          easing={easing}
        />
      )}
    </>
  );
}
