import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useMemo } from "react";

export function ParticlesBg() {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.5 },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      backgroundMask: {
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      },
    };
  }, []);
  const particlesInit = useCallback((main) => {
    loadSlim(main);
    loadFull(main);
  }, []);
  return <Particles  init={particlesInit} options={options}></Particles>;
}
