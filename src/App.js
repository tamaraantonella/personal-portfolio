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
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing, delay: 0.5 },
    },
  };
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const lastName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };
  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6, ease: easing
      }
    }
  }
  return (
    <motion.div className="mx-auto relative">
      <motion.div style={{ scaleX }} className="progress-bar" />
      <LangSwitch easing={easing}/>
      <Nav stagger={stagger} />
      <Header stagger={stagger} easing={easing} />
      <About/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default App;
