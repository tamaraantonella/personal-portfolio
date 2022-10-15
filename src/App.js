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

const App = () => {
  return (
    <div className="mx-auto relative">
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
