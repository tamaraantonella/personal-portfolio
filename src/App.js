import React from "react";
import { About, Header, Experience, Projects, Contact, Footer, Nav, LangSwitch } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";



const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };





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
