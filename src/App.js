import React from "react";
import { About, Header, Experience, Projects, Contact, Footer, Nav } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";


const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="mx-auto relative">
      <motion.div style={{ scaleX }} className="progress-bar" />
      <Nav />
      <Header />
      <About/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
