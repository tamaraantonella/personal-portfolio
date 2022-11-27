import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useMemo } from "react";

export function ParticlesBg() {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.3 },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
      },

      fullScreen: {
        enable: true,
        zIndex: 0,
      },
    };
  }, []);
  const particlesInit = useCallback((main) => {
    loadSlim(main);
    loadFull(main);
  }, []);
  return <Particles init={particlesInit} options={options}></Particles>;
}
