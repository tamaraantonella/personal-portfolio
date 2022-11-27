import React from "react";
import { About, Header, Experience, Projects, Contact, Footer, Nav, LangSwitch } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";
import { easing, stagger, transition } from "./constants/animation";



const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className="mx-auto relative">
      <motion.div style={{ scaleX }} className="progress-bar" />
      <LangSwitch easing={easing} />
      <Nav stagger={stagger} />
      <Header stagger={stagger} easing={easing} transition={transition} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default App;
