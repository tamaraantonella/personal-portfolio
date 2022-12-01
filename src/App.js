import React from "react";
import { About, Header, Experience, Projects, Contact, Footer, Nav, ParticlesBg, } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";
import { container, easing, stagger, subtitleAndContent, title, transition } from "./constants/animation";



const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <ParticlesBg />
      <motion.div className="sm:mx-auto box-border z-20 ">
        <motion.div style={{ scaleX }} className="progress-bar" />
        <Nav stagger={stagger} easing={easing} />
        <Header stagger={stagger} easing={easing} transition={transition} />
        <About container={container} subtitleAndContent={subtitleAndContent} title={title} />
        <Experience container={container} subtitleAndContent={subtitleAndContent} title={title} />
        <Projects container={container} subtitleAndContent={subtitleAndContent} title={title} />
        <Contact container={container} subtitleAndContent={subtitleAndContent} title={title} />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
