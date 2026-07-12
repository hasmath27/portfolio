import React from "react";
import { ThemeProvider } from "./ThemeContext.jsx";
import Header       from "./components/Header.jsx";
import Hero         from "./components/Hero.jsx";
import Projects     from "./components/Projects.jsx";
import Skills       from "./components/Skills.jsx";
import Certificates from "./components/Certificates.jsx";
import About        from "./components/About.jsx";
import Footer       from "./components/Footer.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <About />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
