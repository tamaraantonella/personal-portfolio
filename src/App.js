import React from "react";
//eslint-disable-next-line
import About from "./components/about/About";
//eslint-disable-next-line
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";

//eslint-disable-next-line
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
//eslint-disable-next-line
import Projects from "./components/projects/Projects";
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
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
